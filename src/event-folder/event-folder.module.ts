import { AccountService } from '@/account/account.service';
import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { EventFolderController } from './event-folder.controller';
import { EventFolderService } from './event-folder.service';

@Module({
  providers: [EventFolderService, JwtService, AccountService],
  controllers: [EventFolderController],
})
export class EventFolderModule {}
