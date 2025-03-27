import { PRISMA_SERVICE } from '@/prisma/constants';
import { PrismaService } from '@/prisma/prisma.service';
import {
  CreateTicketGroupDto,
  createTicketGroupResponseSchema,
} from '@/ticket-group/dto/create-ticket-group.dto';
import { deleteTicketGroupResponseSchema } from '@/ticket-group/dto/delete-ticket-group.dto';
import { findTicketsByEventResponseSchema } from '@/ticket-group/dto/find-tickets-by-event.dto';
import {
  UpdateTicketGroupDto,
  updateTicketGroupResponseSchema,
} from '@/ticket-group/dto/update-ticket-group.dto';
import { Inject, Injectable } from '@nestjs/common';
import z from 'zod';

@Injectable()
export class TicketGroupService {
  constructor(@Inject(PRISMA_SERVICE) private prisma: PrismaService) {}

  async create(
    createTicketGroupDto: CreateTicketGroupDto,
  ): Promise<z.infer<typeof createTicketGroupResponseSchema>> {
    return await this.prisma.ticketGroup.create({
      data: createTicketGroupDto,
      include: {
        tickets: true,
        event: true,
      },
    });
  }

  async findTicketsByEvent(
    eventId: string,
  ): Promise<z.infer<typeof findTicketsByEventResponseSchema>> {
    const tickets = await this.prisma.ticketGroup.aggregate({
      where: { eventId },
      _sum: {
        amountTickets: true,
      },
    });

    return {
      tickets: tickets._sum.amountTickets ?? 0,
    };
  }
  async update(
    id: string,
    updateTicketGroupDto: UpdateTicketGroupDto,
  ): Promise<z.infer<typeof updateTicketGroupResponseSchema>> {
    return await this.prisma.ticketGroup.update({
      where: { id },
      data: updateTicketGroupDto,
      include: {
        tickets: true,
        event: true,
      },
    });
  }

  async delete(
    id: string,
  ): Promise<z.infer<typeof deleteTicketGroupResponseSchema>> {
    return await this.prisma.ticketGroup.delete({
      where: { id },
      include: {
        tickets: true,
        event: true,
      },
    });
  }
}
