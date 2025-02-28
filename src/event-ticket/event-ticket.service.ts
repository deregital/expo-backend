import { PRISMA_SERVICE } from '@/prisma/constants';
import { PrismaService } from '@/prisma/prisma.service';
import { Inject, Injectable } from '@nestjs/common';
import { EventTicket } from '~/types/prisma-schema';

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
}
