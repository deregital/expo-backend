import { TicketGroupService } from '@/ticket-group/ticket-group.service';
import { Body, Controller, Headers, Post } from '@nestjs/common';
import { CreatePreferenceDto } from './dto/create-preference-mercadopago.dto';
import { WebhookDto } from './dto/webhook-mercadopago.dto';
import { MercadoPagoService } from './mercadopago.service';

@Controller('mercadopago')
export class MercadoPagoController {
  constructor(
    private readonly mercadoPagoService: MercadoPagoService,
    private readonly ticketGroupService: TicketGroupService,
  ) {}

  @Post('create-preference')
  async createPreference(@Body() body: CreatePreferenceDto) {
    return this.mercadoPagoService.createPreference(body);
  }

  @Post('webhook')
  async webhook(
    @Body() body: WebhookDto,
    @Headers('x-signature') signature?: string,
    @Headers('x-request-id') requestId?: string,
  ) {
    if (!signature || !requestId) {
      // Lanzar error para no poner ! en las variables
    }
    const dataTicketGroup = await this.mercadoPagoService.webhook(
      body,
      signature!,
      requestId!,
    );
    await this.ticketGroupService.update(dataTicketGroup.id, {
      status: dataTicketGroup.status === 'approved' ? 'PAID' : 'BOOKED',
    });
    return dataTicketGroup;
  }
}
