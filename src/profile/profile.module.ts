import { AccountService } from '@/account/account.service';
import { PrismaService } from '@/prisma/prisma.service';
import { TagGroupService } from '@/tag-group/tag-group.service';
import { TagService } from '@/tag/tag.service';
import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';

@Module({
  controllers: [ProfileController],
  providers: [
    ProfileService,
    PrismaService,
    TagService,
    JwtService,
    AccountService,
    TagGroupService,
  ],
})
export class ProfileModule {}
