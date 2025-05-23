import { AccountService } from '@/account/account.service';
import { ProfileService } from '@/profile/profile.service';
import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { EventFolderController } from './event-folder.controller';
import { EventFolderService } from './event-folder.service';

@Module({
  providers: [EventFolderService, JwtService, AccountService, ProfileService],
  controllers: [EventFolderController],
})
export class EventFolderModule {}
