import { translate } from '@/i18n/translate';
import { PRISMA_SERVICE } from '@/prisma/constants';
import { PrismaService } from '@/prisma/prisma.service';
import { encryptString, getDMSansFonts } from '@/shared/utils/utils';
import { TicketInputs, generateTicketTemplate } from '@/ticket/constants';
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
import { Font, GenerateProps } from '@pdfme/common';
import { generate } from '@pdfme/generator';
import { barcodes, image, line, text } from '@pdfme/schemas';
import { format } from 'date-fns/format';
import z from 'zod';
import { Event, Profile, Ticket, TicketType } from '~/types';
import {
  CreateManyTicketDto,
  createManyTicketResponseSchema,
  generateMultiplePdfTicketsSchema,
} from './dto/create-many-ticket.dto';

@Injectable()
export class TicketService {
  constructor(@Inject(PRISMA_SERVICE) private prisma: PrismaService) {}

  async create(
    dto: CreateTicketDto & { seat: Ticket['seat'] },
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

  async findAmountByEventAndType(
    eventId: string,
    type: TicketType,
  ): Promise<number> {
    const ticketsByEventAndType = await this.prisma.ticket.findMany({
      where: { eventId: eventId, type: type },
      include: { event: true, profile: true },
    });

    return ticketsByEventAndType.length;
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

  async generatePdfTicket(ticket: Ticket & { event: Event }): Promise<Blob> {
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

    const normalizedDni = Number.isNaN(Number(ticket.dni))
      ? ticket.dni
      : Number(ticket.dni).toLocaleString('es-ES');
    const seat = ticket.seat ? ticket.seat.toString() : '-';

    // Encriptar id del ticket para pasarlo de valor al barcode
    const template = generateTicketTemplate(
      ticket.type,
    ) as GenerateProps['template'];

    const inputs = [
      {
        eventName: ticket.event.name,
        eventDate: `${formattedDate} - ${formattedTime}`,
        eventLocation: ticket.event.location,
        fullName: ticket.fullName,
        dni: normalizedDni,
        seat,
        barcode: encryptString(ticket.id),
        footer: translate('route.pdf.generate-pdf.pdf.footer'),
        emissionDate: format(ticket.created_at, 'dd/MM/yyyy HH:mm'),
      } satisfies TicketInputs,
    ];

    const plugins = {
      text,
      line,
      image,
      barcodes: barcodes.code128,
    };

    const { fontBold, fontSemiBold, fontLight } = await getDMSansFonts();

    const font: Font = {
      'DMSans-Bold': {
        data: fontBold, // Provide the buffer instead of a string path
      },
      'DMSans-SemiBold': {
        data: fontSemiBold, // Provide the buffer instead of a string path
        fallback: true,
      },
      'DMSans-Light': {
        data: fontLight, // Provide the buffer instead of a string path
      },
    };

    const pdf = await generate({
      template,
      inputs,
      plugins,
      options: { font },
    });
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
      return { ticketId: ticket.id, pdf: await this.generatePdfTicket(ticket) };
    });

    // Esperar a que todos los PDFs se generen y filtrar los nulos
    const pdfs = await Promise.all(pdfPromises);
    return pdfs;
  }

  async getHighestSeatForEvent(eventId: string): Promise<number> {
    const highest = await this.prisma.ticket.findFirst({
      where: { eventId, seat: { not: null }, type: 'SPECTATOR' },
      select: { seat: true },
      orderBy: { seat: 'desc' },
    });

    return highest?.seat || 0;
  }
}
