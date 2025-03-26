import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TicketGroupController } from './ticket-group.controller';
import { TicketGroupService } from './ticket-group.service';

@Module({
  controllers: [TicketGroupController],
  providers: [TicketGroupService, JwtService],
})
export class TicketGroupModule {}
