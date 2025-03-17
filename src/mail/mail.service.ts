import { translate } from '@/i18n/translate';
import { RESEND_ERROR_CODES_BY_KEY } from '@/mail/consts';
import {
  HttpException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { format } from 'date-fns/format';
import { Resend } from 'resend';
import { Event, Ticket } from '~/types/prisma-schema';

const resend = new Resend(process.env.RESEND_API_KEY);

@Injectable()
export class MailService {
  constructor() {}

  async sendTicket(
    ticket: Omit<Ticket, 'profileId'> & { event: Event },
    pdf: Blob,
  ): Promise<string> {
    const { data, error } = await resend.emails.send({
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
}
