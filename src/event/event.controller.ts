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
import { ImageService } from '@/image/image.service';
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
  HttpStatus,
  NotFoundException,
  Param,
  ParseFilePipeBuilder,
  Patch,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ApiConflictResponse,
  ApiConsumes,
  ApiCreatedResponse,
  ApiGoneResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
import z from 'zod';
import { Event, EventTicket, Role, Tag, TagGroup } from '~/types/prisma-schema';
import { deleteBannerEventResponseSchema } from './dto/delete-banner-event.dto';
import { deleteMainPictureEventResponseSchema } from './dto/delete-main-picture-event.dto';
import {
  UpdateBannerEventDto,
  UpdateBannerEventResponseDto,
} from './dto/update-banner-event.dto';
import {
  UpdateMainPictureEventDto,
  UpdateMainPictureEventResponseDto,
} from './dto/update-main-picture-event.dto';

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
    private readonly imageService: ImageService,
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
          const subEventStartingDate = setHoursAndMinutes(
            subEvent.date,
            subEvent.startingDate,
          );
          const subEventEndingDate = setHoursAndMinutes(
            subEvent.date,
            subEvent.endingDate,
          );
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
            startingDate: subEventStartingDate.toISOString(),
            endingDate: subEventEndingDate.toISOString(),
            mainPictureUrl: subEvent.mainPictureUrl,
            bannerUrl: subEvent.bannerUrl,
            description: subEvent.description,
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

  @ApiOkResponse({
    description: translate('route.image.update.success'),
    type: UpdateBannerEventResponseDto,
  })
  @ApiInternalServerErrorResponse({
    description: translate('route.image.update.error'),
    type: ErrorDto,
  })
  @ApiUnprocessableEntityResponse({
    description: translate('route.image.update.unprocessable-entity'),
    type: ErrorDto,
  })
  @ApiConflictResponse({
    description: translate('route.image.update.conflict'),
    type: ErrorDto,
  })
  @UseInterceptors(FileInterceptor('image'))
  @ApiConsumes('multipart/form-data')
  @Patch('/update-banner/:id')
  async updateBanner(
    @Param('id', new ExistingRecord('event')) id: string,
    @Body() body: UpdateBannerEventDto,
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({
          fileType: /(jpeg|png|webp)/, // Ver errores custom
        })
        .build({
          errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
        }),
    )
    file: Express.Multer.File,
  ): Promise<UpdateBannerEventResponseDto> {
    const currentPictureUrl = await this.eventService.getEventBannerUrl(id);

    if (currentPictureUrl) {
      await this.imageService.deleteImage(currentPictureUrl);
    }

    const pictureUrl = await this.imageService.updateImage(
      `event-banner-${id}`,
      file,
    );

    if (!pictureUrl) {
      throw new ConflictException([translate('route.image.update.conflict')]);
    }

    await this.eventService.update(id, {
      bannerUrl: pictureUrl,
    });

    return {
      message: translate('route.image.update.success'),
    };
  }

  @ApiOkResponse({
    description: translate('route.image.delete.success'),
    type: UpdateMainPictureEventResponseDto,
  })
  @ApiInternalServerErrorResponse({
    description: translate('route.image.delete.error'),
    type: ErrorDto,
  })
  @ApiNotFoundResponse({
    description: translate('route.image.delete.not-found'),
    type: ErrorDto,
  })
  @Delete('/delete-banner/:id')
  async deleteBanner(
    @Param('id', new ExistingRecord('event')) id: string,
  ): Promise<z.infer<typeof deleteBannerEventResponseSchema>> {
    const event = await this.eventService.findById(id);
    if (event.bannerUrl) {
      await this.imageService.deleteImage(event.bannerUrl);
    } else {
      throw new NotFoundException([translate('route.image.delete.not-found')]);
    }
    await this.eventService.deleteBanner(id);
    return {
      message: translate('route.image.delete.success'),
    };
  }

  @ApiOkResponse({
    description: translate('route.image.update.success'),
    type: UpdateMainPictureEventResponseDto,
  })
  @ApiInternalServerErrorResponse({
    description: translate('route.image.update.error'),
    type: ErrorDto,
  })
  @ApiUnprocessableEntityResponse({
    description: translate('route.image.update.unprocessable-entity'),
    type: ErrorDto,
  })
  @ApiConflictResponse({
    description: translate('route.image.update.conflict'),
    type: ErrorDto,
  })
  @UseInterceptors(FileInterceptor('image'))
  @ApiConsumes('multipart/form-data')
  @Patch('/update-main-picture/:id')
  async updateMainPicture(
    @Param('id', new ExistingRecord('event')) id: string,
    @Body() body: UpdateMainPictureEventDto,
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({
          fileType: /(jpeg|png|webp)/, // Ver errores custom
        })
        .build({
          errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
        }),
    )
    file: Express.Multer.File,
  ): Promise<UpdateMainPictureEventResponseDto> {
    const currentPictureUrl =
      await this.eventService.getEventMainPictureUrl(id);

    if (currentPictureUrl) {
      await this.imageService.deleteImage(currentPictureUrl);
    }

    const pictureUrl = await this.imageService.updateImage(
      `event-main-picture-${id}`,
      file,
    );

    if (!pictureUrl) {
      throw new ConflictException([translate('route.image.update.conflict')]);
    }

    await this.eventService.update(id, {
      mainPictureUrl: pictureUrl,
    });

    return {
      message: translate('route.image.update.success'),
    };
  }

  @ApiOkResponse({
    description: translate('route.image.delete.success'),
    type: UpdateMainPictureEventResponseDto,
  })
  @ApiInternalServerErrorResponse({
    description: translate('route.image.delete.error'),
    type: ErrorDto,
  })
  @ApiNotFoundResponse({
    description: translate('route.image.delete.not-found'),
    type: ErrorDto,
  })
  @Delete('/delete-main-picture/:id')
  async deleteMainPicture(
    @Param('id', new ExistingRecord('event')) id: string,
  ): Promise<z.infer<typeof deleteMainPictureEventResponseSchema>> {
    const event = await this.eventService.findById(id);
    if (event.mainPictureUrl) {
      await this.imageService.deleteImage(event.mainPictureUrl);
    } else {
      throw new NotFoundException([translate('route.image.delete.not-found')]);
    }
    await this.eventService.deleteMainPicture(id);
    return {
      message: translate('route.image.update.success'),
    };
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

    if (
      (event.active || event.tickets.length > 0) &&
      updateEventDto.description === undefined &&
      updateEventDto.bannerUrl === undefined &&
      updateEventDto.mainPictureUrl === undefined
    ) {
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

    if (updateEventDto.eventTickets && updateEventDto.eventTickets.length > 0) {
      eventTickets = await this.eventTicketsService.createMany(
        id,
        updateEventDto.eventTickets.map((ticket) => ({
          type: ticket?.type ?? 'PARTICIPANT',
          amount: ticket?.amount ?? null,
          price: ticket?.price ?? null,
        })),
      );
    }

    const updatedStartingDate = setHoursAndMinutes(
      updateEventDto.date ?? event.date.toISOString(),
      updateEventDto.startingDate ?? event.startingDate.toISOString(),
    );
    const updatedEndingDate = setHoursAndMinutes(
      updateEventDto.date ?? event.date.toISOString(),
      updateEventDto.endingDate ?? event.endingDate.toISOString(),
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
        !updateEventDto.subEvents?.some((sub) => sub.id === subEvent.id),
    );

    updateEventDto.subEvents?.forEach(async (subEvent) => {
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
          eventName: subEvent.name ?? '',
          groupId: inputSubEvent.tagAssisted.groupId,
        });

        tagGroupSubEventId = inputSubEvent.tagAssisted.groupId;
      } else {
        // if subEvent does not exist, create it
        const tagGroupSubEvent = await this.tagGroupService.create({
          color: '#666666',
          isExclusive: true,
          name: subEvent.name ?? '',
        });
        tagGroupSubEventId = tagGroupSubEvent.id;
      }

      const newDate = new Date(subEvent.date ?? '');

      await this.eventService.upsert({
        event: {
          ...subEvent,
          date: newDate,
          startingDate: new Date(subEvent.startingDate ?? ''),
          endingDate: new Date(subEvent.endingDate ?? ''),
          location: subEvent.location ?? '',
          name: subEvent.name ?? '',
          description: subEvent.description ?? null,
          bannerUrl: subEvent.bannerUrl ?? null,
          mainPictureUrl: subEvent.mainPictureUrl ?? null,
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
