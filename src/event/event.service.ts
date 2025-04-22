import {
  CreateEventDto,
  createEventResponseSchema,
} from '@/event/dto/create-event.dto';
import { getActiveEventsResponseSchema } from '@/event/dto/get-active-events.dto';
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
import {
  Event,
  EventTicket,
  Prisma,
  Tag,
  TagGroup,
  TagType,
} from '~/types/prisma-schema';
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
        mainPictureUrl: dto.mainPictureUrl ?? undefined,
        bannerUrl: dto.bannerUrl ?? undefined,
        description: dto.description ?? undefined,
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

        tags: { connect: dto.tagsId.map((tag) => ({ id: tag })) },
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

  async findWithoutFolder(): Promise<
    Array<
      Event & {
        subEvents: Event[];
        supraEvent: Event | null;
        tags: (Pick<Tag, 'id' | 'name' | 'type'> & {
          group: Pick<TagGroup, 'color' | 'isExclusive' | 'name' | 'id'>;
        })[];
        eventTickets: EventTicket[];
      }
    >
  > {
    return await this.prisma.event.findMany({
      where: { folderId: null },
      include: {
        subEvents: true,
        supraEvent: true,
        tags: {
          include: {
            group: {
              select: { id: true, color: true, name: true, isExclusive: true },
            },
          },
        },
        eventTickets: true,
      },
    });
  }

  async findById(
    id: Event['id'],
  ): Promise<z.infer<typeof getByIdEventResponseSchema>> {
    const event = await this.prisma.event.findUnique({
      where: { id },
      include: {
        tagAssisted: {
          include: {
            group: true,
          },
        },
        tagConfirmed: {
          include: {
            group: true,
          },
        },
        subEvents: true,
        eventTickets: true,
        supraEvent: true,
        tags: { include: { group: true } },
        tickets: true,
      },
    });
    return event!;
  }

  async findBySupraEventId(
    id: Event['id'],
  ): Promise<z.infer<typeof getBySupraEventResponseSchema>> {
    const events = await this.prisma.event.findMany({
      where: { supraEventId: id },
      include: { tagAssisted: true, tagConfirmed: true },
    });
    return events;
  }

  async update(
    id: Event['id'],
    updateEventDto: Partial<
      Omit<UpdateEventDto, 'eventTickets'> & {
        eventTickets: Pick<EventTicket, 'id' | 'amount' | 'price' | 'type'>[];
      }
    >,
  ): Promise<z.infer<typeof updateEventResponseSchema>> {
    return await this.prisma.event.update({
      where: { id },
      data: {
        name: updateEventDto.name,
        date: updateEventDto.date,
        location: updateEventDto.location,
        startingDate: updateEventDto.startingDate,
        endingDate: updateEventDto.endingDate,
        bannerUrl: updateEventDto.bannerUrl,
        mainPictureUrl: updateEventDto.mainPictureUrl,
        description: updateEventDto.description,
        eventTickets: updateEventDto.eventTickets
          ? {
              set: updateEventDto.eventTickets.map((ticket) => ({
                id: ticket.id,
                amount: ticket.amount,
                price: ticket.price,
                type: ticket.type,
              })),
            }
          : undefined,
        tags: updateEventDto.tagsId
          ? {
              set: updateEventDto.tagsId.map((tag) => ({ id: tag })),
            }
          : undefined,
        folder: updateEventDto.folderId
          ? { connect: { id: updateEventDto.folderId } }
          : updateEventDto.folderId === null
            ? { disconnect: true }
            : undefined,
      },
      include: {
        tagAssisted: { include: { group: true } },
        eventTickets: {
          select: { id: true, amount: true, price: true, type: true },
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
      | 'date'
      | 'location'
      | 'name'
      | 'startingDate'
      | 'endingDate'
      | 'bannerUrl'
      | 'mainPictureUrl'
      | 'description'
    >;
    supraEventId: Event['id'];
    tagGroupId: TagGroup['id'];
  }): Promise<Event> {
    return await this.prisma.event.upsert({
      where: { id },
      update: {
        date: event.date,
        startingDate: event.startingDate,
        endingDate: event.endingDate,
        location: event.location,
        name: event.name,
        bannerUrl: event.bannerUrl,
        mainPictureUrl: event.mainPictureUrl,
        description: event.description,
      },
      create: {
        date: event.date,
        startingDate: event.startingDate,
        endingDate: event.endingDate,
        location: event.location,
        bannerUrl: event.bannerUrl,
        mainPictureUrl: event.mainPictureUrl,
        description: event.description,
        name: event.name,
        supraEvent: { connect: { id: supraEventId } },
        tagAssisted: {
          create: {
            group: { connect: { id: tagGroupId } },
            name: `${event.name} - ${translate('prisma.tag.assisted')}`,
            type: TagType.EVENT,
          },
        },
        tagConfirmed: {
          create: {
            group: { connect: { id: tagGroupId } },
            name: `${event.name} - ${translate('prisma.tag.confirmed')}`,
            type: TagType.EVENT,
          },
        },
      },
    });
  }

  async delete(id: string): Promise<z.infer<typeof deleteEventResponseSchema>> {
    const deletedEvent = await this.prisma.event.delete({ where: { id } });
    return deletedEvent;
  }

  async toggleActive(
    id: string,
    { active }: { active: boolean },
  ): Promise<Event> {
    return await this.prisma.event.update({ where: { id }, data: { active } });
  }

  async findActive(): Promise<z.infer<typeof getActiveEventsResponseSchema>> {
    const events = await this.prisma.event.findMany({
      where: {
        active: true,
        endingDate: {
          gt: new Date(),
        },
      },
      orderBy: {
        endingDate: 'asc',
      },
      include: {
        eventTickets: true,
      },
    });

    return { events };
  }

  async findActiveByTags(
    tagIds: Tag['id'][],
  ): Promise<
    Prisma.EventGetPayload<{ include: { tickets: true; eventTickets: true } }>[]
  > {
    return await this.prisma.event.findMany({
      where: {
        active: true,
        endingDate: { gt: new Date() },
        tags: { some: { id: { in: tagIds } } },
      },
      include: { tickets: true, eventTickets: true },
    });
  }

  async getEventBannerUrl(id: Event['id']): Promise<string | null> {
    const event = await this.prisma.event.findUnique({ where: { id } });
    return event?.bannerUrl ?? null;
  }

  async getEventMainPictureUrl(id: Event['id']): Promise<string | null> {
    const event = await this.prisma.event.findUnique({ where: { id } });
    return event?.mainPictureUrl ?? null;
  }

  async deleteBanner(id: Event['id']): Promise<void> {
    await this.prisma.event.update({
      where: { id },
      data: { bannerUrl: null },
    });
  }

  async deleteMainPicture(id: Event['id']): Promise<void> {
    await this.prisma.event.update({
      where: { id },
      data: { mainPictureUrl: null },
    });
  }
}
