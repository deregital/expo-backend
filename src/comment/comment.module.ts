import { AccountService } from '@/account/account.service';
import { ProfileService } from '@/profile/profile.service';
import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CommentController } from './comment.controller';
import { CommentService } from './comment.service';

@Module({
  providers: [CommentService, JwtService, AccountService, ProfileService],
  controllers: [CommentController],
})
export class CommentModule {}
