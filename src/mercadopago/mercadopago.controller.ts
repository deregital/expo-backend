import { Roles } from '@/auth/decorators/rol.decorator';
import { JwtGuard } from '@/auth/guards/jwt.guard';
import { RoleGuard } from '@/auth/guards/role.guard';
import { translate } from '@/i18n/translate';
import { ErrorDto } from '@/shared/errors/errorType';
import { TicketGroupService } from '@/ticket-group/ticket-group.service';
import {
  Body,
  Controller,
  Headers,
  NotFoundException,
  Post,
  UseGuards,
} from '@nestjs/common';
import {
  ApiConflictResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
} from '@nestjs/swagger';
import z from 'zod';
import { Role } from '~/types';
import {
  CreatePreferenceDto,
  CreatePreferenceResponseDto,
  createPreferenceResponseSchema,
} from './dto/create-preference-mercadopago.dto';
import { WebhookDto, WebhookResponseDto } from './dto/webhook-mercadopago.dto';
import { MercadoPagoService } from './mercadopago.service';

@Roles(Role.ADMIN, Role.USER, Role.TICKETS)
@UseGuards(JwtGuard, RoleGuard)
@Controller('mercadopago')
export class MercadoPagoController {
  constructor(
    private readonly mercadoPagoService: MercadoPagoService,
    private readonly ticketGroupService: TicketGroupService,
  ) {}

  @ApiOkResponse({
    description: translate('route.mercadopago.create-preference.success'),
    type: WebhookResponseDto,
  })
  @ApiNotFoundResponse({
    description: translate(
      'route.mercadopago.create-preference.event-not-found',
    ),
    type: ErrorDto,
  })
  @ApiConflictResponse({
    description: translate('route.mercadopago.create-preference.conflict'),
    type: ErrorDto,
  })
  @Post('/create-preference')
  async createPreference(
    @Body() body: CreatePreferenceDto,
  ): Promise<z.infer<typeof createPreferenceResponseSchema>> {
    return this.mercadoPagoService.createPreference(body);
  }

  @ApiOkResponse({
    description: translate('route.mercadopago.webhook.success'),
    type: CreatePreferenceResponseDto,
  })
  @ApiConflictResponse({
    description: translate('route.mercadopago.webhook.error'),
    type: ErrorDto,
  })
  @Post('/webhook')
  async webhook(
    @Body() body: WebhookDto,
    @Headers('x-signature') signature?: string,
    @Headers('x-request-id') requestId?: string,
  ) {
    if (!signature || !requestId) {
      throw new NotFoundException(
        translate('route.mercadopago.webhook.signature-not-found'),
      );
    }
    const dataTicketGroup = await this.mercadoPagoService.webhook(
      body,
      signature,
      requestId,
    );
    await this.ticketGroupService.update(dataTicketGroup.id, {
      status: dataTicketGroup.status === 'approved' ? 'PAID' : 'BOOKED',
    });
    return dataTicketGroup;
  }
}
