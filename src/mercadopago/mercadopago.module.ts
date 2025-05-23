import { AccountService } from '@/account/account.service';
import { EventTicketService } from '@/event-ticket/event-ticket.service';
import { MailService } from '@/mail/mail.service';
import { ProfileService } from '@/profile/profile.service';
import { TicketGroupService } from '@/ticket-group/ticket-group.service';
import { TicketService } from '@/ticket/ticket.service';
import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { MercadoPagoController } from './mercadopago.controller';
import { MercadoPagoService } from './mercadopago.service';

@Module({
  controllers: [MercadoPagoController],
  providers: [
    MercadoPagoService,
    JwtService,
    AccountService,
    ProfileService,
    TicketGroupService,
    EventTicketService,
    TicketService,
    MailService,
  ],
})
export class MercadoPagoModule {}
