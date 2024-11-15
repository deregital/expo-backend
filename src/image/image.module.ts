import { AccountService } from '@/account/account.service';
import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ImageController } from './image.controller';
import { ImageService } from './image.service';

@Module({
  controllers: [ImageController],
  providers: [ImageService, JwtService, AccountService],
})
export class ImageModule {}
