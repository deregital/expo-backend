import { translate } from '@/i18n/translate';
import { PRISMA_SERVICE } from '@/prisma/constants';
import { PrismaService } from '@/prisma/prisma.service';
import { TICKET_INPUTS, TICKET_TEMPLATE } from '@/ticket/constants';
import {
  ConflictException,
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { generate } from '@pdfme/generator';
import { barcodes, line, text } from '@pdfme/schemas';
import { Blob } from 'buffer';
import {
  createCipheriv,
  createDecipheriv,
  createHash,
  randomBytes,
} from 'crypto';
import z from 'zod';
import { findTicketResponseSchema } from './dto/find-ticket.dto';

@Injectable()
export class PdfService {
  constructor(@Inject(PRISMA_SERVICE) private readonly prisma: PrismaService) {}

  private getKeyFromSecret(secret: string) {
    // Convierte un string cualquiera en una clave de 32 bytes mediante hash SHA-256
    return createHash('sha256').update(secret).digest();
  }

  async generatePdfTicket(id: string, barcode_value: string): Promise<Blob> {
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
        ticket_barcode: barcode_value,
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

  async encryptTicketId(id: string): Promise<string> {
    const key = this.getKeyFromSecret(process.env.BARCODE_SECRET!);
    const iv = randomBytes(16); // 16 bytes para AES-256-CBC
    const cipher = createCipheriv('aes-256-cbc', key, iv);

    // Codifica en Base64 en lugar de hex
    let encrypted = cipher.update(id, 'utf8', 'base64');
    encrypted += cipher.final('base64');

    // IV también en Base64
    const ivBase64 = iv.toString('base64');

    // Retorna IV + texto cifrado (separados por :)
    return ivBase64 + ':' + encrypted;
  }

  async findTicket(
    barcode_value: string,
  ): Promise<z.infer<typeof findTicketResponseSchema>> {
    try {
      // Separamos la cadena en IV y texto cifrado, valiéndose de ':'
      const [ivBase64, cipherTextBase64] = barcode_value.split(':');
      if (!ivBase64 || !cipherTextBase64) {
        throw new ConflictException(
          translate('route.pdf.find-ticket.invalid-barcode'),
        );
      }
      // Construct key e IV
      const key = this.getKeyFromSecret(process.env.BARCODE_SECRET!);
      const iv = Buffer.from(ivBase64, 'base64');

      // Intentamos descifrar
      let ticketId: string;
      const decipher = createDecipheriv('aes-256-cbc', key, iv);
      ticketId = decipher.update(cipherTextBase64, 'base64', 'utf8');
      ticketId += decipher.final('utf8');

      // Buscamos el ticket en la base de datos
      const ticket = await this.prisma.ticket.findUnique({
        where: { id: ticketId },
      });

      if (!ticket) {
        // NotFoundException ya es un error manejable por NestJS
        throw new NotFoundException(
          translate('route.pdf.find-ticket.not-found'),
        );
      }

      return ticket;
    } catch (error) {
      throw new InternalServerErrorException(
        translate('route.pdf.find-ticket.error'),
      );
    }
  }
}
