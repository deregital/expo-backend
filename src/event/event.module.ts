import { AccountService } from '@/account/account.service';
import { EventFolderService } from '@/event-folder/event-folder.service';
import { EventTicketService } from '@/event-ticket/event-ticket.service';
import { ImageService } from '@/image/image.service';
import { ProfileService } from '@/profile/profile.service';
import { TagGroupService } from '@/tag-group/tag-group.service';
import { TagService } from '@/tag/tag.service';
import { TicketGroupService } from '@/ticket-group/ticket-group.service';
import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { EventController } from './event.controller';
import { EventService } from './event.service';
@Module({
  providers: [
    EventService,
    JwtService,
    AccountService,
    TagGroupService,
    EventFolderService,
    TagService,
    EventTicketService,
    ProfileService,
    TicketGroupService,
    ImageService,
  ],
  controllers: [EventController],
})
export class EventModule {}
