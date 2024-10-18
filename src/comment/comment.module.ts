import { AccountService } from '@/account/account.service';
import { PrismaService } from '@/prisma/prisma.service';
import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CommentController } from './comment.controller';
import { CommentService } from './comment.service';

@Module({
  providers: [CommentService, PrismaService, JwtService, AccountService],
  controllers: [CommentController],
})
export class CommentModule {}
