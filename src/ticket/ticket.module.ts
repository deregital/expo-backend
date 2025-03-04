import { AccountService } from '@/account/account.service';
import { EventService } from '@/event/event.service';
import { TicketController } from '@/ticket/ticket.controller';
import { TicketService } from '@/ticket/ticket.service';
import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [TicketController],
  providers: [TicketService, JwtService, AccountService, EventService],
})
export class TicketModule {}
