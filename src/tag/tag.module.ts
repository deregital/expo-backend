import { AccountService } from '@/account/account.service';
import { PrismaService } from '@/prisma/prisma.service';
import { TagController } from '@/tag/tag.controller';
import { TagService } from '@/tag/tag.service';
import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [TagController],
  providers: [TagService, PrismaService, JwtService, AccountService],
})
export class TagModule {}
