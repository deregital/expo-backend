import { Roles } from '@/auth/decorators/rol.decorator';
import { JwtGuard } from '@/auth/guards/jwt.guard';
import { RoleGuard } from '@/auth/guards/role.guard';
import { EventFolderService } from '@/event-folder/event-folder.service';
import { EventTicketService } from '@/event-ticket/event-ticket.service';
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
  GetActiveEventsResponseDto,
  getActiveEventsResponseSchema,
} from '@/event/dto/get-active-events.dto';
import {
  GetAllEventsResponseDto,
  getAllEventsResponseSchema,
} from '@/event/dto/get-all-event.dto';
import {
  GetByIdEventResponseDto,
  getByIdEventResponseSchema,
} from '@/event/dto/get-by-id-event.dto';
import { toggleActiveResponseSchema } from '@/event/dto/toggle-active-event.dto';
import {
  UpdateEventDto,
  UpdateEventResponseDto,
  updateEventResponseSchema,
} from '@/event/dto/update-event.dto';
import { EventService } from '@/event/event.service';
import { translate } from '@/i18n/translate';
import { ErrorDto } from '@/shared/errors/errorType';
import { setHoursAndMinutes } from '@/shared/utils/utils';
import { ExistingRecord } from '@/shared/validation/checkExistingRecord';
import { TagGroupService } from '@/tag-group/tag-group.service';
import { TagService } from '@/tag/tag.service';
import { TicketGroupService } from '@/ticket-group/ticket-group.service';
import {
  Body,
  ConflictException,
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
import { Event, EventTicket, Role, Tag, TagGroup } from '~/types/prisma-schema';

@Roles(Role.ADMIN, Role.USER)
@UseGuards(JwtGuard, RoleGuard)
@Controller('event')
export class EventController {
  constructor(
    private readonly eventService: EventService,
    private readonly eventFolderService: EventFolderService,
    private readonly tagGroupService: TagGroupService,
    private readonly tagService: TagService,
    private readonly eventTicketsService: EventTicketService,
    private readonly ticketGroupService: TicketGroupService,
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
      createEventDto.tagsId.map(async (tagId) => {
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
            tagsId: createEventDto.tagsId,
            eventTickets: createEventDto.eventTickets,
            startingDate: subEvent.startingDate,
            endingDate: subEvent.endingDate,
          });
        }),
      );
    }

    const eventStartingDate = setHoursAndMinutes(
      createEventDto.date,
      createEventDto.startingDate,
    );

    const eventEndingDate = setHoursAndMinutes(
      createEventDto.date,
      createEventDto.endingDate,
    );

    return await this.eventService.create({
      ...createEventDto,
      folderId: createEventDto.folderId ?? undefined,
      tagGroupId: eventTagGroup.id,
      subEvents: subEvents.map((subEvent) => ({ id: subEvent.id })),
      startingDate: eventStartingDate.toISOString(),
      endingDate: eventEndingDate.toISOString(),
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

  @Roles(Role.ADMIN, Role.USER, Role.TICKETS)
  @Get('/find-active')
  @ApiOkResponse({
    description: translate('route.event.get-all.success'),
    type: GetActiveEventsResponseDto,
  })
  async getActive(): Promise<z.infer<typeof getActiveEventsResponseSchema>> {
    return await this.eventService.findActive();
  }

  @Roles(Role.TICKETS, Role.ADMIN, Role.USER)
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
    await this.ticketGroupService.deleteBookedTicketsGroup(id);
    return await this.eventService.findById(id);
  }

  @Patch('/:id')
  @ApiOkResponse({
    description: translate('route.event.update.success'),
    type: UpdateEventResponseDto,
  })
  @ApiConflictResponse({
    description: translate('route.event.update.active-event-not-editable'),
    type: ErrorDto,
  })
  @ApiNotFoundResponse({
    description: translate('route.event.update.not-found'),
    type: ErrorDto,
  })
  async update(
    @Param('id', new ExistingRecord('event')) id: string,
    @Body() updateEventDto: UpdateEventDto,
  ): Promise<z.infer<typeof updateEventResponseSchema>> {
    const event = await this.eventService.findById(id);

    if (event.active || event.tickets.length > 0) {
      throw new ConflictException([
        translate('route.event.update.active-event-not-editable'),
      ]);
    }

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

    if (event.eventTickets.length > 0) {
      await this.eventTicketsService.deleteByEventId(id);
    }

    let eventTickets: Pick<EventTicket, 'id' | 'amount' | 'price' | 'type'>[] =
      [];

    if (updateEventDto.eventTickets.length > 0) {
      eventTickets = await this.eventTicketsService.createMany(
        id,
        updateEventDto.eventTickets,
      );
    }

    const updatedStartingDate = setHoursAndMinutes(
      updateEventDto.date,
      updateEventDto.startingDate,
    );
    const updatedEndingDate = setHoursAndMinutes(
      updateEventDto.date,
      updateEventDto.endingDate,
    );

    const updatedEvent = await this.eventService.update(id, {
      ...updateEventDto,
      eventTickets,
      startingDate: updatedStartingDate.toISOString(),
      endingDate: updatedEndingDate.toISOString(),
    });
    await this.updateEventTags({
      assistedTagId: updatedEvent.tagAssistedId,
      confirmedTagId: updatedEvent.tagConfirmedId,
      eventName: updatedEvent.name,
      groupId: updatedEvent.tagAssisted.groupId,
    });

    const subEvents = await this.eventService.findBySupraEventId(
      updatedEvent.id,
    );
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
        supraEventId: updatedEvent.id,
        tagGroupId: tagGroupSubEventId,
      });
    });

    deletedSubEvents.forEach(async (subEvent) => {
      await this.eventService.delete(subEvent.id);
      await this.tagGroupService.delete(subEvent.tagAssisted.groupId);
    });

    return updatedEvent;
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
    const event = await this.eventService.findById(id);
    if (event.active) {
      throw new ConflictException([
        translate('route.event.delete.active-event-not-deletable'),
      ]);
    }

    if (event.tickets.length > 0) {
      throw new ConflictException([
        translate('route.event.delete.with-tickets-not-deletable'),
      ]);
    }

    const eventDeleted = await this.eventService.delete(id);
    await this.tagGroupService.delete(event.tagAssisted.groupId);
    return eventDeleted;
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

  @Post('/toggle-active/:id')
  @ApiOkResponse({
    description: translate('route.event.toggle-active.success'),
    type: UpdateEventResponseDto,
  })
  @ApiConflictResponse({
    description: translate(
      'route.event.toggle-active.active-event-not-editable',
    ),
    type: ErrorDto,
  })
  @ApiNotFoundResponse({
    description: translate('route.event.toggle-active.not-found'),
    type: ErrorDto,
  })
  async toggleActive(
    @Param('id', new ExistingRecord('event')) id: string,
  ): Promise<z.infer<typeof toggleActiveResponseSchema>> {
    const event = await this.eventService.findById(id);
    if (event.tickets.length > 0 && event.active) {
      throw new ConflictException([
        translate('route.event.toggle-active.active-event-not-editable'),
      ]);
    }
    return await this.eventService.toggleActive(id, { active: !event.active });
  }
}
