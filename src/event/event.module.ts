import { AccountService } from '@/account/account.service';
import { PrismaService } from '@/prisma/prisma.service';
import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { EventController } from './event.controller';
import { EventService } from './event.service';

@Module({
  providers: [EventService, PrismaService, JwtService, AccountService],
  controllers: [EventController],
})
export class EventModule {}
