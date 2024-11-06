import { AccountService } from '@/account/account.service';
import { EventFolderService } from '@/event-folder/event-folder.service';
import { PrismaService } from '@/prisma/prisma.service';
import { TagGroupService } from '@/tag-group/tag-group.service';
import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { EventController } from './event.controller';
import { EventService } from './event.service';

@Module({
  providers: [
    EventService,
    PrismaService,
    JwtService,
    AccountService,
    TagGroupService,
    EventFolderService,
  ],
  controllers: [EventController],
})
export class EventModule {}
