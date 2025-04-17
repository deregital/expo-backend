import { translate } from '@/i18n/translate';
import { RESEND_ERROR_CODES_BY_KEY } from '@/mail/consts';
import { ResendService } from '@/resend/resend.service';
import {
  HttpException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { format } from 'date-fns/format';
import { Event, Ticket } from '~/types/prisma-schema';

@Injectable()
export class MailService {
  constructor(private readonly resendService: ResendService) {}

  async sendTicket(
    ticket: Omit<Ticket, 'profileId'> & { event: Event },
    pdf: Blob,
  ): Promise<string> {
    const { data, error } = await this.resendService.emails.send({
      from: 'Expo Tickets <expotickets@deregital.online>',
      to: ticket.mail,
      subject: translate('route.ticket.send-email.mail.subject', {
        eventName: ticket.event.name,
      }),
      text: translate('route.ticket.send-email.mail.text', {
        eventDate: format(new Date(ticket.event.date), 'dd/MM/yyyy'),
        eventLocation: ticket.event.location,
        eventTime: format(new Date(ticket.event.startingDate), 'HH:mm'),
      }),
      attachments: [
        {
          content: Buffer.from(await pdf.arrayBuffer()),
          filename: `ExpoTicket-${ticket.event.name}.pdf`,
          contentType: 'application/pdf',
        },
      ],
    });

    if (error) {
      const errorCode = RESEND_ERROR_CODES_BY_KEY[error.name];
      throw new HttpException(error.message, errorCode || 500);
    }

    if (!data) {
      throw new InternalServerErrorException(
        translate('route.ticket.send-email.error'),
      );
    }

    return data.id;
  }

  async sendMultipleTickets(
    tickets: (Omit<Ticket, 'profileId'> & { event: Event })[],
    pdfs: Blob[],
  ): Promise<string> {
    const event = tickets[0]!.event;
    const email = tickets[0]!.mail;

    const { data, error } = await this.resendService.emails.send({
      from: 'Expo Tickets <expotickets@deregital.online>',
      to: email,
      subject: translate('route.ticket.send-email.mail.subject', {
        eventName: event.name,
      }),
      text: translate('route.ticket.send-email.mail.text', {
        eventDate: format(new Date(event.date), 'dd/MM/yyyy'),
        eventLocation: event.location,
        eventTime: format(new Date(event.startingDate), 'HH:mm'),
      }),
      attachments: await Promise.all(
        pdfs.map(async (pdf, index) => ({
          content: Buffer.from(await pdf.arrayBuffer()),
          filename: `ExpoTicket-${event.name}-${index}.pdf`,
          contentType: 'application/pdf',
        })),
      ),
    });
    if (error) {
      const errorCode = RESEND_ERROR_CODES_BY_KEY[error.name];
      throw new HttpException(error.message, errorCode || 500);
    }
    if (!data) {
      throw new InternalServerErrorException(
        translate('route.ticket.send-email.error'),
      );
    }
    return data.id;
  }
}
