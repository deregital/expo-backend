import { EventTicketService } from '@/event-ticket/event-ticket.service';
import { translate } from '@/i18n/translate';
import { PRISMA_SERVICE } from '@/prisma/constants';
import { PrismaService } from '@/prisma/prisma.service';
import { TicketService } from '@/ticket/ticket.service';
import {
  ConflictException,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { createHmac } from 'crypto';
import { MercadoPagoConfig, Payment, Preference } from 'mercadopago';
import z from 'zod';
import {
  CreatePreferenceDto,
  createPreferenceResponseSchema,
} from './dto/create-preference-mercadopago.dto';
import { WebhookDto } from './dto/webhook-mercadopago.dto';

@Injectable()
export class MercadoPagoService {
  constructor(
    @Inject(PRISMA_SERVICE) private prisma: PrismaService,
    private readonly ticketService: TicketService,
    private readonly eventTicketService: EventTicketService,
  ) {}

  private mercadoPago(): MercadoPagoConfig {
    const mercadopago = new MercadoPagoConfig({
      accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN!,
    });
    return mercadopago;
  }

  async createPreference(
    body: CreatePreferenceDto,
  ): Promise<z.infer<typeof createPreferenceResponseSchema>> {
    try {
      const eventTicket =
        await this.eventTicketService.findByTicketGroupIdAndType(
          body.ticket_group_id,
          body.ticket_type,
        );

      const eventTicketThisType = eventTicket?.event.eventTickets.find(
        (ticket) => ticket.type === body.ticket_type,
      );
      if (
        !eventTicketThisType ||
        !eventTicket ||
        eventTicketThisType.amount === null
      ) {
        throw new ConflictException(
          translate('route.mercadopago.create-preference.event-not-found'),
        );
      }
      const amountTicketsBought =
        await this.ticketService.findEmittedAmountByEventAndType(
          eventTicket.event.id,
          body.ticket_type,
        );

      if (
        amountTicketsBought + eventTicketThisType.amount >
        eventTicketThisType.amount
      ) {
        throw new ConflictException(
          translate('route.mercadopago.create-preference.conflict'),
        );
      }

      const mercadopago = this.mercadoPago();
      const preference = await new Preference(mercadopago).create({
        body: {
          items: [
            {
              id: body.ticket_group_id,
              title: translate('route.mercadopago.create-preference.title', {
                eventName: eventTicket.event.name,
                quantity: eventTicket.amountTickets.toLocaleString(),
              }),
              quantity: eventTicket.amountTickets,
              unit_price: eventTicket.event.eventTickets[0]?.price ?? 0,
            },
          ],
          external_reference: body.ticket_group_id,
          auto_return: 'all',
          back_urls: {
            success: `${process.env.EXPO_TICKETS_URL}/payment/${body.ticket_group_id}`,
            pending: `${process.env.EXPO_TICKETS_URL}/payment/error`,
            failure: `${process.env.EXPO_TICKETS_URL}/payment/error`,
          },
        },
      });
      if (!preference || !preference.id || !preference.init_point) {
        throw new ConflictException(
          translate('route.mercadopago.create-preference.error'),
        );
      }
      return {
        id: preference.id,
        init_point: preference.init_point,
      };
    } catch (error) {
      throw new ConflictException(
        translate('route.mercadopago.create-preference.error'),
      );
    }
  }

  private verifySignature(
    signature: string,
    request_id: string,
    data_id: string,
  ): boolean {
    const ts = signature.split(',')[0]?.split('=')[1];
    const v1 = signature.split(',')[1]?.split('=')[1];
    const manifest = `id:${data_id};request-id:${request_id};ts:${ts?.trim()};`;
    const secretKey = process.env.SECRET_KEY!;
    const signatureDecrypted = createHmac('sha256', secretKey)
      .update(manifest)
      .digest('hex');
    const isValid = signatureDecrypted === v1?.trim();

    return isValid;
  }

  async webhook(
    body: WebhookDto,
    signature: string,
    requestId: string,
  ): Promise<{ status: string; id: string | null }> {
    const data_id = body.data.id;
    const isValid = this.verifySignature(signature, requestId, data_id);
    if (!isValid) {
      throw new UnauthorizedException([
        translate('route.mercadopago.webhook.invalid-signature'),
      ]);
    }
    try {
      const mercadopago = this.mercadoPago();
      const payment = await new Payment(mercadopago).get({ id: data_id });
      if (!payment) {
        throw new ConflictException(
          translate('route.mercadopago.webhook.error'),
        );
      }

      return {
        status: payment.status ?? 'REJECTED',
        id: payment.external_reference ?? null,
      };
    } catch (error) {
      throw new ConflictException(translate('route.mercadopago.webhook.error'));
    }
  }
}
