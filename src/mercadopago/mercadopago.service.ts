import { translate } from '@/i18n/translate';
import {
  ConflictException,
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
  constructor() {}

  private mercadoPago() {
    const mercadopago = new MercadoPagoConfig({
      accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN!,
    });
    return mercadopago;
  }
  async createPreference(
    body: CreatePreferenceDto,
  ): Promise<z.infer<typeof createPreferenceResponseSchema>> {
    try {
      const mercadopago = this.mercadoPago();
      const preference = await new Preference(mercadopago).create({
        body: {
          items: body.items.map((item) => ({
            id: item.id,
            title: item.title,
            quantity: item.quantity,
            unit_price: item.unit_price,
          })),
          external_reference: body.ticket_group_id,
          auto_return: 'all',
          back_urls: {
            success: `https://mercadopago.com.ar/`,
            pending: `https://mercadopago.com.ar/`,
            failure: `https://mercadopago.com.ar/`,
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
  ) {
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
  ): Promise<{ status: string; id: string }> {
    const data_id = body.data.id;
    const isValid = this.verifySignature(signature, requestId, data_id);
    if (!isValid) {
      throw new UnauthorizedException('Firma inválida');
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
        id: payment.external_reference ?? '',
      };
    } catch (error) {
      throw new ConflictException(translate('route.mercadopago.webhook.error'));
    }
  }
}
