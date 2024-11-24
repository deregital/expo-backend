import { AccountService } from '@/account/account.service';
import { EventFolderService } from '@/event-folder/event-folder.service';
import { TagGroupService } from '@/tag-group/tag-group.service';
import { TagService } from '@/tag/tag.service';
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
  ],
  controllers: [EventController],
})
export class EventModule {}
