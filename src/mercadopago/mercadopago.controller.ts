import { Roles } from '@/auth/decorators/rol.decorator';
import { JwtGuard } from '@/auth/guards/jwt.guard';
import { RoleGuard } from '@/auth/guards/role.guard';
import { translate } from '@/i18n/translate';
import { MailService } from '@/mail/mail.service';
import { ErrorDto } from '@/shared/errors/errorType';
import { TicketGroupService } from '@/ticket-group/ticket-group.service';
import { TicketService } from '@/ticket/ticket.service';
import {
  Body,
  Controller,
  Headers,
  HttpCode,
  NotFoundException,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import {
  ApiConflictResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
} from '@nestjs/swagger';
import { Response } from 'express';
import z from 'zod';
import { Role } from '~/types';
import {
  CreatePreferenceDto,
  CreatePreferenceResponseDto,
  createPreferenceResponseSchema,
} from './dto/create-preference-mercadopago.dto';
import { WebhookDto } from './dto/webhook-mercadopago.dto';
import { MercadoPagoService } from './mercadopago.service';

@Controller('mercadopago')
export class MercadoPagoController {
  constructor(
    private readonly mercadoPagoService: MercadoPagoService,
    private readonly ticketGroupService: TicketGroupService,
    private readonly ticketService: TicketService,
    private readonly mailService: MailService,
  ) {}

  @ApiOkResponse({
    description: translate('route.mercadopago.create-preference.success'),
    type: CreatePreferenceResponseDto,
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
  @UseGuards(JwtGuard, RoleGuard)
  @Roles(Role.ADMIN, Role.USER, Role.TICKETS, Role.MI_EXPO)
  @Post('/create-preference')
  async createPreference(
    @Body() body: CreatePreferenceDto,
  ): Promise<z.infer<typeof createPreferenceResponseSchema>> {
    return this.mercadoPagoService.createPreference(body);
  }

  @ApiOkResponse({
    description: translate('route.mercadopago.webhook.success'),
    type: Response,
  })
  @ApiConflictResponse({
    description: translate('route.mercadopago.webhook.error'),
    type: ErrorDto,
  })
  @HttpCode(200)
  @Post('/webhook')
  async webhook(
    @Body() body: WebhookDto,
    @Res() res: Response,
    @Headers('x-signature') signature?: string,
    @Headers('x-request-id') requestId?: string,
  ): Promise<void> {
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

    if (!dataTicketGroup.id) {
      throw new NotFoundException(translate('route.mercadopago.webhook.error'));
    }

    const ticketGroup = await this.ticketGroupService.findGroup(
      dataTicketGroup.id,
    );

    if (
      dataTicketGroup.status === 'approved' &&
      ticketGroup.status === 'BOOKED'
    ) {
      await this.ticketGroupService.update(dataTicketGroup.id, {
        status: dataTicketGroup.status === 'approved' ? 'PAID' : 'BOOKED',
      });
      const tickets = await this.ticketService.findByTicketGroupWithEvent(
        dataTicketGroup.id,
      );
      const pdfs = await this.ticketService.generateMultiplePdfTickets(tickets);
      await this.mailService.sendMultipleTickets(
        tickets,
        pdfs.map((pdf) => pdf.pdf),
      );
    }

    res.status(200).send();
  }
}
