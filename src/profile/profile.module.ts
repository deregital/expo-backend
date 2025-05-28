import { AccountService } from '@/account/account.service';
import { ImageService } from '@/image/image.service';
import { TagGroupService } from '@/tag-group/tag-group.service';
import { TagService } from '@/tag/tag.service';
import { TicketGroupService } from '@/ticket-group/ticket-group.service';
import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';

@Module({
  controllers: [ProfileController],
  providers: [
    ProfileService,
    TagService,
    JwtService,
    AccountService,
    TagGroupService,
    ImageService,
    TicketGroupService,
  ],
})
export class ProfileModule {}
