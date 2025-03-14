import { AccountService } from '@/account/account.service';
import { ProfileService } from '@/profile/profile.service';
import { TagController } from '@/tag/tag.controller';
import { TagService } from '@/tag/tag.service';
import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [TagController],
  providers: [TagService, JwtService, AccountService, ProfileService],
})
export class TagModule {}
