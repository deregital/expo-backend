import {
  CreateEventDto,
  createEventResponseSchema,
} from '@/event/dto/create-event.dto';
import { getAllEventsResponseSchema } from '@/event/dto/get-all-event.dto';
import {
  getByIdEventResponseSchema,
  getBySupraEventResponseSchema,
} from '@/event/dto/get-by-id-event.dto';
import {
  UpdateEventDto,
  updateEventResponseSchema,
} from '@/event/dto/update-event.dto';
import { translate } from '@/i18n/translate';
import { PRISMA_SERVICE } from '@/prisma/constants';
import { PrismaService } from '@/prisma/prisma.service';
import { Inject, Injectable } from '@nestjs/common';
import { z } from 'zod';
import { Event, TagGroup, TagType } from '~/types';
import { deleteEventResponseSchema } from './dto/delete-event.dto';

@Injectable()
export class EventService {
  constructor(@Inject(PRISMA_SERVICE) private prisma: PrismaService) {}

  async create(
    dto: Omit<CreateEventDto, 'subEvents' | 'folderId'> & {
      tagGroupId: string;
      folderId?: string;
      subEvents?: { id: string }[];
    },
  ): Promise<z.infer<typeof createEventResponseSchema>> {
    return await this.prisma.event.create({
      data: {
        name: dto.name,
        date: dto.date,
        startingDate: dto.startingDate,
        endingDate: dto.endingDate,
        location: dto.location,
        folder: dto.folderId ? { connect: { id: dto.folderId } } : undefined,
        tagAssisted: {
          create: {
            group: { connect: { id: dto.tagGroupId } },
            name: `${dto.name} - ${translate('prisma.tag.assisted')}`,
            type: TagType.EVENT,
          },
        },
        tagConfirmed: {
          create: {
            group: { connect: { id: dto.tagGroupId } },
            name: `${dto.name} - ${translate('prisma.tag.confirmed')}`,
            type: TagType.EVENT,
          },
        },
        subEvents: dto.subEvents
          ? { connect: dto.subEvents.map((subEvent) => ({ id: subEvent.id })) }
          : undefined,

        tags: { connect: dto.tags.map((tag) => ({ id: tag })) },
        eventTickets: {
          create: dto.eventTickets.map((ticket) => ({
            amount: ticket.amount,
            type: ticket.type,
            price: ticket.price,
          })),
        },
      },
    });
  }
  async findAll(): Promise<
    z.infer<typeof getAllEventsResponseSchema.shape.withoutFolder>
  > {
    const events = await this.prisma.event.findMany({
      include: {
        folder: true,
        tagAssisted: true,
        tagConfirmed: true,
        subEvents: true,
        supraEvent: true,
      },
    });
    return events;
  }

  async findWithoutFolder(): Promise<
    Array<Event & { subEvents: Event[]; supraEvent: Event | null }>
  > {
    return await this.prisma.event.findMany({
      where: {
        folderId: null,
      },
      include: {
        subEvents: true,
        supraEvent: true,
      },
    });
  }

  async findById(
    id: Event['id'],
  ): Promise<z.infer<typeof getByIdEventResponseSchema>> {
    const event = await this.prisma.event.findUnique({
      where: { id },
      include: {
        subEvents: true,
        supraEvent: true,
      },
    });
    return event!;
  }

  async findBySupraEventId(
    id: Event['id'],
  ): Promise<z.infer<typeof getBySupraEventResponseSchema>> {
    const events = await this.prisma.event.findMany({
      where: {
        supraEventId: id,
      },
      include: {
        tagAssisted: true,
        tagConfirmed: true,
      },
    });
    return events;
  }

  async update(
    id: Event['id'],
    updateEventDto: UpdateEventDto,
  ): Promise<z.infer<typeof updateEventResponseSchema>> {
    return await this.prisma.event.update({
      where: { id },
      data: {
        name: updateEventDto.name,
        date: updateEventDto.date,
        location: updateEventDto.location,
        folder: updateEventDto.folderId
          ? { connect: { id: updateEventDto.folderId } }
          : { disconnect: true },
      },
      include: {
        tagAssisted: {
          include: {
            group: true,
          },
        },
      },
    });
  }

  async upsert({
    id,
    event,
    supraEventId,
    tagGroupId,
  }: {
    id: Event['id'];
    event: Pick<
      Event,
      'date' | 'location' | 'name' | 'startingDate' | 'endingDate'
    >;
    supraEventId: Event['id'];
    tagGroupId: TagGroup['id'];
  }): Promise<Event> {
    return await this.prisma.event.upsert({
      where: {
        id,
      },
      update: {
        date: event.date,
        startingDate: event.startingDate,
        endingDate: event.endingDate,
        location: event.location,
        name: event.name,
      },
      create: {
        date: event.date,
        startingDate: event.startingDate,
        endingDate: event.endingDate,
        location: event.location,
        name: event.name,
        supraEvent: {
          connect: {
            id: supraEventId,
          },
        },
        tagAssisted: {
          create: {
            group: {
              connect: {
                id: tagGroupId,
              },
            },
            name: `${event.name} - ${translate('prisma.tag.assisted')}`,
            type: TagType.EVENT,
          },
        },
        tagConfirmed: {
          create: {
            group: {
              connect: {
                id: tagGroupId,
              },
            },
            name: `${event.name} - ${translate('prisma.tag.confirmed')}`,
            type: TagType.EVENT,
          },
        },
      },
    });
  }

  async delete(id: string): Promise<z.infer<typeof deleteEventResponseSchema>> {
    const deletedEvent = await this.prisma.event.delete({
      where: { id },
    });
    return deletedEvent;
  }
}
