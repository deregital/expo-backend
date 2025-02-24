import { Roles } from '@/auth/decorators/rol.decorator';
import { JwtGuard } from '@/auth/guards/jwt.guard';
import { RoleGuard } from '@/auth/guards/role.guard';
import { EventFolderService } from '@/event-folder/event-folder.service';
import {
  CreateEventDto,
  CreateEventResponseDto,
  createEventResponseSchema,
} from '@/event/dto/create-event.dto';
import {
  DeleteEventResponseDto,
  deleteEventResponseSchema,
} from '@/event/dto/delete-event.dto';
import {
  GetAllEventsResponseDto,
  getAllEventsResponseSchema,
} from '@/event/dto/get-all-event.dto';
import {
  GetByIdEventResponseDto,
  getByIdEventResponseSchema,
} from '@/event/dto/get-by-id-event.dto';
import {
  UpdateEventDto,
  UpdateEventResponseDto,
  updateEventResponseSchema,
} from '@/event/dto/update-event.dto';
import { EventService } from '@/event/event.service';
import { translate } from '@/i18n/translate';
import { ErrorDto } from '@/shared/errors/errorType';
import { ExistingRecord } from '@/shared/validation/checkExistingRecord';
import { TagGroupService } from '@/tag-group/tag-group.service';
import { TagService } from '@/tag/tag.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import {
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiGoneResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
} from '@nestjs/swagger';
import z from 'zod';
import { Event, Role, Tag, TagGroup } from '~/types/prisma-schema';

@Roles(Role.ADMIN, Role.USER)
@UseGuards(JwtGuard, RoleGuard)
@Controller('event')
export class EventController {
  constructor(
    private readonly eventService: EventService,
    private readonly eventFolderService: EventFolderService,
    private readonly tagGroupService: TagGroupService,
    private readonly tagService: TagService,
  ) {}

  @ApiCreatedResponse({
    description: translate('route.event.create.success'),
    type: CreateEventResponseDto,
  })
  @ApiConflictResponse({
    description: translate('route.event.create.conflict'),
    type: ErrorDto,
  })
  @Post('/create')
  async create(
    @Body() createEventDto: CreateEventDto,
  ): Promise<z.infer<typeof createEventResponseSchema>> {
    const areValidTags = await Promise.all(
      createEventDto.tags.map(async (tagId) => {
        const tag = await this.tagService.findById(tagId);
        return !!tag;
      }),
    );

    if (areValidTags.includes(false)) {
      throw new NotFoundException([
        translate('route.event.create.tag-not-found'),
      ]);
    }

    const eventTagGroup = await this.tagGroupService.create({
      color: '#666666',
      isExclusive: true,
      name: createEventDto.name,
    });

    if (createEventDto.folderId) {
      const eventFolder = await this.eventFolderService.getById(
        createEventDto.folderId,
      );

      if (!eventFolder) {
        throw new NotFoundException([
          translate('route.event.create.folder-not-found'),
        ]);
      }
    }

    let subEvents: Event[] = [];

    if (createEventDto.subEvents) {
      subEvents = await Promise.all(
        createEventDto.subEvents.map(async (subEvent) => {
          const tagGroup = await this.tagGroupService.create({
            color: '#666666',
            isExclusive: true,
            name: subEvent.name,
          });

          return await this.eventService.create({
            ...subEvent,
            tagGroupId: tagGroup.id,
            tags: [],
            eventTickets: [],
          });
        }),
      );
    }

    return await this.eventService.create({
      ...createEventDto,
      folderId: createEventDto.folderId ?? undefined,
      tagGroupId: eventTagGroup.id,
      subEvents: subEvents.map((subEvent) => ({ id: subEvent.id })),
    });
  }

  @Get('/all')
  @ApiOkResponse({
    description: translate('route.event.get-all.success'),
    type: GetAllEventsResponseDto,
  })
  @ApiNotFoundResponse({
    description: translate('route.event.get-all.not-found'),
    type: ErrorDto,
  })
  async findAll(): Promise<z.infer<typeof getAllEventsResponseSchema>> {
    const eventsWithFolder = await this.eventFolderService.getAllNested();
    const eventsWithoutFolder = await this.eventService.findWithoutFolder();
    return {
      folders: eventsWithFolder,
      withoutFolder: eventsWithoutFolder,
    };
  }

  @Get('/:id')
  @ApiOkResponse({
    description: translate('route.event.get-by-id.success'),
    type: GetByIdEventResponseDto,
  })
  @ApiNotFoundResponse({
    description: translate('route.event.get-by-id.not-found'),
    type: ErrorDto,
  })
  async findById(
    @Param('id', new ExistingRecord('event')) id: string,
  ): Promise<z.infer<typeof getByIdEventResponseSchema>> {
    return await this.eventService.findById(id);
  }

  @Patch('/:id')
  @ApiOkResponse({
    description: translate('route.event.update.success'),
    type: UpdateEventResponseDto,
  })
  @ApiNotFoundResponse({
    description: translate('route.event.update.not-found'),
    type: ErrorDto,
  })
  async update(
    @Param('id', new ExistingRecord('event')) id: string,
    @Body() updateEventDto: UpdateEventDto,
  ): Promise<z.infer<typeof updateEventResponseSchema>> {
    if (updateEventDto.folderId) {
      const eventFolder = await this.eventFolderService.getById(
        updateEventDto.folderId,
      );

      if (!eventFolder) {
        throw new NotFoundException([
          translate('route.event.create.folder-not-found'),
        ]);
      }
    }

    const event = await this.eventService.update(id, updateEventDto);
    await this.updateEventTags({
      assistedTagId: event.tagAssistedId,
      confirmedTagId: event.tagConfirmedId,
      eventName: event.name,
      groupId: event.tagAssisted.groupId,
    });

    const subEvents = await this.eventService.findBySupraEventId(event.id);
    const deletedSubEvents = subEvents.filter(
      (subEvent) =>
        !updateEventDto.subEvents.some((sub) => sub.id === subEvent.id),
    );

    updateEventDto.subEvents.forEach(async (subEvent) => {
      let tagGroupSubEventId: string;
      if (subEvents.map((sub) => sub.id).includes(subEvent.id)) {
        // if subEvent already exists, update it
        const inputSubEvent = subEvents.find((sub) => sub.id === subEvent.id);
        if (!inputSubEvent) {
          throw new NotFoundException([
            translate('route.event.update.subevent-not-found'),
          ]);
        }

        await this.updateEventTags({
          assistedTagId: inputSubEvent.tagAssistedId,
          confirmedTagId: inputSubEvent.tagConfirmedId,
          eventName: subEvent.name,
          groupId: inputSubEvent.tagAssisted.groupId,
        });

        tagGroupSubEventId = inputSubEvent.tagAssisted.groupId;
      } else {
        // if subEvent does not exist, create it
        const tagGroupSubEvent = await this.tagGroupService.create({
          color: '#666666',
          isExclusive: true,
          name: subEvent.name,
        });
        tagGroupSubEventId = tagGroupSubEvent.id;
      }

      const newDate = new Date(subEvent.date);

      await this.eventService.upsert({
        event: {
          ...subEvent,
          date: newDate,
          startingDate: new Date(subEvent.startingDate),
          endingDate: new Date(subEvent.endingDate),
        },
        id: subEvent.id,
        supraEventId: event.id,
        tagGroupId: tagGroupSubEventId,
      });
    });

    deletedSubEvents.forEach(async (subEvent) => {
      await this.eventService.delete(subEvent.id);
      await this.tagGroupService.delete(subEvent.tagAssisted.groupId);
    });

    return event;
  }

  @Delete('/:id')
  @ApiGoneResponse({
    description: translate('route.event.delete.success'),
    type: DeleteEventResponseDto,
  })
  @ApiNotFoundResponse({
    description: translate('route.event.delete.not-found'),
    type: ErrorDto,
  })
  async remove(
    @Param('id', new ExistingRecord('event')) id: string,
  ): Promise<z.infer<typeof deleteEventResponseSchema>> {
    return await this.eventService.delete(id);
  }

  private async updateEventTags({
    groupId,
    assistedTagId,
    confirmedTagId,
    eventName,
  }: {
    groupId: TagGroup['id'];
    assistedTagId: Tag['id'];
    confirmedTagId: Tag['id'];
    eventName: Event['name'];
  }): Promise<void> {
    await this.tagGroupService.update(groupId, {
      name: eventName,
    });

    await this.tagService.update(assistedTagId, {
      name: `${eventName} - ${translate('prisma.tag.assisted')}`,
    });

    await this.tagService.update(confirmedTagId, {
      name: `${eventName} - ${translate('prisma.tag.confirmed')}`,
    });
  }
}
