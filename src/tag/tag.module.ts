import { Module } from '@nestjs/common';
import { TagService } from './tag.service';
import { TagController } from './tag.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { AccountService } from '@/account/account.service';

@Module({
  controllers: [TagController],
  providers: [TagService, PrismaService, JwtService, AccountService],
})
export class TagModule {}
