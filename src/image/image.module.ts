import { AccountService } from '@/account/account.service';
import { ProfileService } from '@/profile/profile.service';
import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ImageController } from './image.controller';
import { ImageService } from './image.service';

@Module({
  controllers: [ImageController],
  providers: [ImageService, JwtService, AccountService, ProfileService],
})
export class ImageModule {}
