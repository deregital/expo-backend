import { AccountService } from '@/account/account.service';
import { PrismaService } from '@/prisma/prisma.service';
import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { EventFolderController } from './event-folder.controller';
import { EventFolderService } from './event-folder.service';

@Module({
  providers: [EventFolderService, PrismaService, JwtService, AccountService],
  controllers: [EventFolderController],
})
export class EventFolderModule {}
