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
import { Role } from '~/types/prisma-schema';

@Roles(Role.ADMIN, Role.USER)
@UseGuards(JwtGuard, RoleGuard)
@Controller('event')
export class EventController {
  constructor(
    private readonly eventService: EventService,
    private readonly eventFolderService: EventFolderService,
    private readonly tagGroupService: TagGroupService,
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

    const subEvents = await Promise.all(
      createEventDto.subEvents.map(async (subEvent) => {
        const tagGroup = await this.tagGroupService.create({
          color: '#666666',
          isExclusive: true,
          name: subEvent.name,
        });

        return await this.eventService.create({
          ...subEvent,
          tagGroupId: tagGroup.id,
        });
      }),
    );

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
    return await this.eventService.update(id, updateEventDto);
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
    return await this.eventService.remove(id);
  }
}
