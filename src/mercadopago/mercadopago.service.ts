import { Injectable, UnauthorizedException } from '@nestjs/common';
import { createHmac } from 'crypto';
import MercadoPagoConfig, { Payment, Preference } from 'mercadopago';
import { PreferenceResponse } from 'mercadopago/dist/clients/preference/commonTypes';
import { CreatePreferenceDto } from './dto/create-preference-mercadopago.dto';
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
  ): Promise<PreferenceResponse['init_point']> {
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
          success: `${process.env.FRONTEND_URL}/ticket-group/${body.ticket_group_id}`,
          pending: `${process.env.FRONTEND_URL}/ticket-group/${body.ticket_group_id}`,
          failure: `${process.env.FRONTEND_URL}/ticket-group/${body.ticket_group_id}`,
        },
      },
    });
    return preference.init_point;
  }

  private verifySignature(
    signature: string,
    request_id: string,
    data_id: string,
  ) {
    console.log('Verificando firma con datos:', {
      signature,
      request_id,
      data_id,
    });
    const ts = signature.split(',')[0]?.split('=')[1];
    const v1 = signature.split(',')[1]?.split('=')[1];
    const manifest = `id:${data_id};request-id:${request_id};ts:${ts?.trim()};`;
    const secretKey = process.env.SECRET_KEY!;
    const signatureDecrypted = createHmac('sha256', secretKey)
      .update(manifest)
      .digest('hex');
    const isValid = signatureDecrypted === v1?.trim();

    console.log('Resultado de verificación de firma:', isValid);
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
    const mercadopago = this.mercadoPago();
    const payment = await new Payment(mercadopago).get({ id: data_id });

    return {
      status: payment.status ?? 'REJECTED',
      id: payment.external_reference ?? '',
    };
  }
}
