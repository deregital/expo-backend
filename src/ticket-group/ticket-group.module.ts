import { AccountService } from '@/account/account.service';
import { EventService } from '@/event/event.service';
import { ProfileService } from '@/profile/profile.service';
import { TicketGroupController } from '@/ticket-group/ticket-group.controller';
import { TicketGroupService } from '@/ticket-group/ticket-group.service';
import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [TicketGroupController],
  providers: [
    TicketGroupService,
    JwtService,
    AccountService,
    ProfileService,
    EventService,
  ],
})
export class TicketGroupModule {}
