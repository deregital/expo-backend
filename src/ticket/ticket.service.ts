import { translate } from '@/i18n/translate';
import { PRISMA_SERVICE } from '@/prisma/constants';
import { PrismaService } from '@/prisma/prisma.service';
import { encryptString } from '@/shared/utils/utils';
import {
  CreateTicketDto,
  createTicketResponseSchema,
} from '@/ticket/dto/create-ticket.dto';
import { deleteTicketResponseSchema } from '@/ticket/dto/delete-ticket.dto';
import { findAllTicketsResponseSchema } from '@/ticket/dto/find-all-tickets.dto';
import { findByEventTicketResponseSchema } from '@/ticket/dto/find-by-event-ticket.dto';
import { findByIdTicketResponseSchema } from '@/ticket/dto/find-by-id-ticket.dto';
import { findByMailTicketResponseSchema } from '@/ticket/dto/find-by-mail-ticket.dto';
import { findByProfileIdTicketResponseSchema } from '@/ticket/dto/find-by-profile-id-ticket.dto';
import { findTicketResponseSchema } from '@/ticket/dto/find-ticket.dto';
import {
  UpdateTicketDto,
  updateTicketResponseSchema,
} from '@/ticket/dto/update-ticket.dto';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { generate } from '@pdfme/generator';
import { barcodes, line, text } from '@pdfme/schemas';
import z from 'zod';
import { Profile } from '~/types';
import { TICKET_INPUTS, TICKET_TEMPLATE } from './constants';
import {
  CreateManyTicketDto,
  createManyTicketResponseSchema,
  generateMultiplePdfTicketsSchema,
} from './dto/create-many-ticket.dto';

@Injectable()
export class TicketService {
  constructor(@Inject(PRISMA_SERVICE) private prisma: PrismaService) {}

  async create(
    dto: CreateTicketDto,
  ): Promise<z.infer<typeof createTicketResponseSchema>> {
    return await this.prisma.ticket.create({
      data: dto,
      include: {
        event: true,
      },
    });
  }

  async createMany(
    dto: CreateManyTicketDto,
  ): Promise<z.infer<typeof createManyTicketResponseSchema>> {
    const tickets = await this.prisma.ticket.createManyAndReturn({
      data: dto.tickets,
      include: {
        event: true,
      },
    });

    return tickets;
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
      include: { event: true, profile: true },
    });

    return { ticket: ticket! };
  }

  async findByMail(
    mail: string,
  ): Promise<z.infer<typeof findByMailTicketResponseSchema>> {
    const ticketsByMail = await this.prisma.ticket.findMany({
      where: { mail },
      include: { event: true, profile: true },
    });

    return { tickets: ticketsByMail };
  }

  async findByEvent(
    eventId: string,
  ): Promise<z.infer<typeof findByEventTicketResponseSchema>> {
    const ticketsByEvent = await this.prisma.ticket.findMany({
      where: { eventId },
      include: { event: true, profile: true },
    });

    return { tickets: ticketsByEvent };
  }

  async findByProfileId(
    profileId: Profile['id'],
  ): Promise<z.infer<typeof findByProfileIdTicketResponseSchema>> {
    const ticketsByProfile = await this.prisma.ticket.findMany({
      where: { profileId: profileId },
      include: { event: true },
    });

    return { tickets: ticketsByProfile };
  }

  async update(
    id: string,
    dto: UpdateTicketDto,
  ): Promise<z.infer<typeof updateTicketResponseSchema>> {
    const ticket = await this.prisma.ticket.update({
      where: { id },
      data: dto,
    });

    return ticket;
  }

  async delete(
    id: string,
  ): Promise<z.infer<typeof deleteTicketResponseSchema>> {
    const ticket = await this.prisma.ticket.delete({
      where: { id },
    });

    return ticket;
  }

  async generatePdfTicket(id: string): Promise<Blob> {
    const ticket = await this.prisma.ticket.findUnique({
      where: { id },
      include: {
        event: true,
      },
    });

    // Format date to a readable format
    const eventDate = new Date(ticket!.event.date);
    const formattedDate = eventDate.toLocaleDateString('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    if (!ticket) {
      throw new NotFoundException(
        translate('route.pdf.generate-pdf.not-found'),
      );
    }
    // Format time
    const formattedTime = eventDate.toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit',
    });

    // Encriptar id del ticket para pasarlo de valor al barcode
    const template = TICKET_TEMPLATE;

    const inputs = [
      {
        event_name: ticket.event.name,
        event_date: formattedDate,
        event_time: formattedTime,
        event_location: ticket.event.location,
        mail_ticket: ticket.mail,
        fullName_ticket: ticket.fullName,
        ticket_type: ticket.type,
        ticket_status: ticket.status,
        ticket_id: ticket.id,
        ...TICKET_INPUTS,
        ticket_barcode: encryptString(ticket.id),
      },
    ];

    const plugins = {
      text,
      line,
      barcodes: barcodes.code128,
    };

    const pdf = await generate({ template, inputs, plugins });
    const blob = new Blob([pdf.buffer], {
      type: 'application/pdf',
    });
    return blob;
  }

  async findTicket(
    id: string,
  ): Promise<z.infer<typeof findTicketResponseSchema>> {
    // Buscamos el ticket en la base de datos
    const ticket = await this.prisma.ticket.findUnique({
      where: { id: id },
    });
    if (!ticket) {
      // NotFoundException ya es un error manejable por NestJS
      throw new NotFoundException(translate('route.pdf.find-ticket.not-found'));
    }
    return ticket;
  }

  async generateMultiplePdfTickets(
    ticketIds: string[],
  ): Promise<z.infer<typeof generateMultiplePdfTicketsSchema>> {
    // Obtener todos los tickets con sus eventos en una sola consulta
    const tickets = await this.prisma.ticket.findMany({
      where: { id: { in: ticketIds } },
      include: {
        event: true,
      },
    });

    // Generar PDFs para todos los tickets
    const pdfPromises = tickets.map(async (ticket) => {
      // Reutilizar la lógica existente de formateo de fecha y generación de PDF
      const eventDate = new Date(ticket.event.date);
      const formattedDate = eventDate.toLocaleDateString('es-ES', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });

      const formattedTime = eventDate.toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit',
      });

      const template = TICKET_TEMPLATE;
      const inputs = [
        {
          event_name: ticket.event.name,
          event_date: formattedDate,
          event_time: formattedTime,
          event_location: ticket.event.location,
          mail_ticket: ticket.mail,
          fullName_ticket: ticket.fullName,
          ticket_type: ticket.type,
          ticket_status: ticket.status,
          ticket_id: ticket.id,
          ...TICKET_INPUTS,
          ticket_barcode: encryptString(ticket.id),
        },
      ];

      const plugins = {
        text,
        line,
        barcodes: barcodes.code128,
      };

      const pdf = await generate({ template, inputs, plugins });
      const blob = new Blob([pdf.buffer], {
        type: 'application/pdf',
      });

      return {
        ticketId: ticket.id,
        pdf: blob,
      };
    });

    // Esperar a que todos los PDFs se generen
    return Promise.all(pdfPromises);
  }
}
