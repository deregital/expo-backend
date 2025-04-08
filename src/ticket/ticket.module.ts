import { AccountService } from '@/account/account.service';
import { EventService } from '@/event/event.service';
import { MailService } from '@/mail/mail.service';
import { ProfileService } from '@/profile/profile.service';
import { TagService } from '@/tag/tag.service';
import { TicketGroupService } from '@/ticket-group/ticket-group.service';
import { TicketController } from '@/ticket/ticket.controller';
import { TicketService } from '@/ticket/ticket.service';
import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [TicketController],
  providers: [
    TicketService,
    JwtService,
    AccountService,
    EventService,
    ProfileService,
    MailService,
    TagService,
    TicketGroupService,
  ],
})
export class TicketModule {}
