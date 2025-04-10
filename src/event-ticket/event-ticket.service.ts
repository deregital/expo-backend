import { PRISMA_SERVICE } from '@/prisma/constants';
import { PrismaService } from '@/prisma/prisma.service';
import { Inject, Injectable } from '@nestjs/common';
import { EventTicket, TicketGroup, TicketType } from '~/types/prisma-schema';

@Injectable()
export class EventTicketService {
  constructor(@Inject(PRISMA_SERVICE) private prisma: PrismaService) {}

  async deleteByEventId(eventId: string): Promise<void> {
    await this.prisma.eventTicket.deleteMany({
      where: {
        eventId,
      },
    });
  }

  async createMany(
    eventId: string,
    eventTickets: Pick<EventTicket, 'amount' | 'price' | 'type'>[],
  ): Promise<Pick<EventTicket, 'id' | 'amount' | 'price' | 'type'>[]> {
    return await this.prisma.eventTicket.createManyAndReturn({
      data: eventTickets.map((eventTicket) => ({
        eventId,
        ...eventTicket,
      })),
      select: {
        id: true,
        amount: true,
        price: true,
        type: true,
      },
    });
  }

  async findByTicketGroupIdAndType(
    id: TicketGroup['id'],
    type: TicketType,
  ): Promise<{
    amountTickets: number;
    event: {
      id: string;
      name: string;
      eventTickets: {
        price: number | null;
        amount: number | null;
        type: TicketType;
      }[];
    };
  } | null> {
    return await this.prisma.ticketGroup.findUnique({
      where: { id },
      select: {
        amountTickets: true,
        event: {
          select: {
            id: true,
            name: true,
            eventTickets: {
              where: {
                type,
              },
              select: {
                price: true,
                amount: true,
                type: true,
              },
            },
          },
        },
      },
    });
  }
}
