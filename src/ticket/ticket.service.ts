import { PRISMA_SERVICE } from '@/prisma/constants';
import { PrismaService } from '@/prisma/prisma.service';
import { Inject, Injectable } from '@nestjs/common';
import z from 'zod';
import {
  CreateTicketDto,
  createTicketResponseSchema,
} from './dto/create-ticket.dto';
import { findByIdTicketResponseSchema } from './dto/find-by-id-ticket.dto';
import {
  deleteTicketResponseSchema,
  findAllTicketsResponseSchema,
  findByEventTicketResponseSchema,
  findByMailTicketResponseSchema,
  UpdateTicketDto,
  updateTicketResponseSchema,
} from './exports';

@Injectable()
export class TicketService {
  constructor(@Inject(PRISMA_SERVICE) private prisma: PrismaService) {}

  async create(
    dto: CreateTicketDto,
  ): Promise<z.infer<typeof createTicketResponseSchema>> {
    return await this.prisma.ticket.create({
      data: dto,
    });
  }

  async findAll(): Promise<z.infer<typeof findAllTicketsResponseSchema>> {
    return {
      tickets: await this.prisma.ticket.findMany({
        include: {
          event: true,
        },
      }),
    };
  }

  async findById(
    id: string,
  ): Promise<z.infer<typeof findByIdTicketResponseSchema>> {
    const ticket = await this.prisma.ticket.findUnique({
      where: { id },
      include: { event: true },
    });
    if (!ticket) {
      throw new Error('Ticket no encontrado');
    }
    return { ticket };
  }

  async findByMail(
    mail: string,
  ): Promise<z.infer<typeof findByMailTicketResponseSchema>> {
    const ticketsByMail = await this.prisma.ticket.findMany({
      where: { mail },
      include: { event: true },
    });
    if (!ticketsByMail) {
      throw new Error('Ticket no encontrado');
    }
    return { tickets: ticketsByMail };
  }

  async findByEvent(
    eventId: string,
  ): Promise<z.infer<typeof findByEventTicketResponseSchema>> {
    const ticketsByEvent = await this.prisma.ticket.findMany({
      where: { eventId },
      include: { event: true },
    });
    if (!ticketsByEvent) {
      throw new Error('Ticket no encontrado');
    }
    return { tickets: ticketsByEvent };
  }

  async update(
    id: string,
    dto: UpdateTicketDto,
  ): Promise<z.infer<typeof updateTicketResponseSchema>> {
    const ticket = await this.prisma.ticket.update({
      where: { id },
      data: dto,
    });
    if (!ticket) {
      throw new Error('Ticket no encontrado');
    }
    return ticket;
  }

  async delete(
    id: string,
  ): Promise<z.infer<typeof deleteTicketResponseSchema>> {
    const ticket = await this.prisma.ticket.delete({
      where: { id },
    });
    if (!ticket) {
      throw new Error('Ticket no encontrado');
    }
    return ticket;
  }
}
