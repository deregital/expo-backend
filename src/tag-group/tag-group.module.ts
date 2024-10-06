import { Module } from '@nestjs/common';
import { TagGroupService } from './tag-group.service';
import { TagGroupController } from './tag-group.controller';
import { PrismaService } from '@/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { AccountService } from '@/account/account.service';

@Module({
  controllers: [TagGroupController],
  providers: [TagGroupService, PrismaService, JwtService, AccountService],
})
export class TagGroupModule {}
