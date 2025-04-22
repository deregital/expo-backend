import { AccountService } from '@/account/account.service';
import { ProfileService } from '@/profile/profile.service';
import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ImageService } from './image.service';

@Module({
  providers: [ImageService, JwtService, AccountService, ProfileService],
})
export class ImageModule {}
