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
  TicketType,
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

  async findStatistics(): Promise<unknown> {
    return { test: 'Deregital' };
  }

  async findStatisticsById(id: Event['id']): Promise<unknown> {
    const event = await this.prisma.event.findUnique({
      where: { id },
      include: {
        tickets: true,
        eventTickets: true,
      },
    });
    if (!event) {
      return;
    }

    // Cantidad maxima de tickets
    const maxTickets = event.eventTickets.reduce(
      (total, ticket) => (total += ticket.amount ?? 0),
      0,
    );

    const spectatorTicket = event.eventTickets.find(
      (ticket) => ticket.type === TicketType.SPECTATOR,
    );

    const emmitedTickets = event.tickets.length;

    // Porcentaje de tickets emitidos
    const emittedTicketsPercent = parseFloat(
      ((event.tickets.length / maxTickets) * 100).toFixed(2),
    );

    // Total recaudado (entradas emitidas de espectador)
    const totalIncome = event.tickets.reduce((income, ticket) => {
      if (ticket.type === TicketType.SPECTATOR) {
        const price = spectatorTicket?.price ?? 0;
        income += price;
      }
      return income;
    }, 0);

    // Maximo posible de recaudacion
    const maxTotalIncome = event.eventTickets.reduce((maxIncome, ticket) => {
      const price = ticket.price ?? 0;
      const amount = ticket.amount ?? 1;
      maxIncome += price * amount;
      return maxIncome;
    }, 0);

    // Todas las posibles entradas y por tipo
    const maxTicketPerType = event.eventTickets.reduce(
      (counts, ticket) => {
        const amount = ticket.amount ?? 0;

        counts[ticket.type] = (counts[ticket.type] ?? 0) + amount;
        return counts;
      },
      {} as Record<TicketType, number>,
    );

    // Entradas emitidas totales y por tipo
    const emmitedticketPerType = event.tickets.reduce(
      (counts, ticket) => {
        counts[ticket.type] = (counts[ticket.type] ?? 0) + 1;
        return counts;
      },
      {} as Record<TicketType, number>,
    );

    const totalTicketsScanned = event.tickets.reduce(
      (totalTickets, ticket) => (totalTickets += ticket.scanned ? 1 : 0),
      0,
    );

    const notScanned = emmitedTickets - totalTicketsScanned;

    // Taza de asistencia en SPECTATORS
    const attendancePercent = parseFloat(
      (
        (emmitedticketPerType.SPECTATOR / maxTicketPerType.SPECTATOR) *
        100
      ).toFixed(2),
    );

    // Presentismo por hora (flujo de llegada)
    const gteAttendance = new Date('2025-04-23T14:30:00');
    const lteAttendance = new Date('2025-04-23T15:30:00');
    const attendancePerHour = event.tickets.filter((ticket) => {
      if (!ticket.scannedAt) {
        const attendaneDate = new Date(ticket.scannedAt!);
        if (gteAttendance >= attendaneDate && attendaneDate <= lteAttendance) {
          return ticket.scannedAt;
        }
      }
    });

    // Promedio de entradas emitidas por ticket-group.
    const { _avg: avgAmountPerTicketGroup } =
      await this.prisma.ticketGroup.aggregate({
        where: { eventId: event.id },
        _avg: {
          amountTickets: true,
        },
      });

    return {
      maxTickets,
      emmitedTickets,
      emittedTicketsPercent,
      emmitedticketPerType,
      totalIncome,
      maxTotalIncome,
      maxTicketPerType,
      totalTicketsScanned,
      notScanned,
      attendancePercent,
      attendancePerHour,
      avgAmountPerTicketGroup: avgAmountPerTicketGroup.amountTickets,
      event,
    };
  }

  async update(
    id: Event['id'],
    updateEventDto: Omit<UpdateEventDto, 'eventTickets'> & {
      eventTickets: Pick<EventTicket, 'id' | 'amount' | 'price' | 'type'>[];
    },
  ): Promise<z.infer<typeof updateEventResponseSchema>> {
    return await this.prisma.event.update({
      where: { id },
      data: {
        name: updateEventDto.name,
        date: updateEventDto.date,
        location: updateEventDto.location,
        startingDate: updateEventDto.startingDate,
        endingDate: updateEventDto.endingDate,
        eventTickets: {
          set: updateEventDto.eventTickets.map((ticket) => ({
            id: ticket.id,
            amount: ticket.amount,
            price: ticket.price,
            type: ticket.type,
          })),
        },
        tags: { set: updateEventDto.tagsId.map((tag) => ({ id: tag })) },
        folder: updateEventDto.folderId
          ? { connect: { id: updateEventDto.folderId } }
          : { disconnect: true },
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
      'date' | 'location' | 'name' | 'startingDate' | 'endingDate'
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
      },
      create: {
        date: event.date,
        startingDate: event.startingDate,
        endingDate: event.endingDate,
        location: event.location,
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
}
