import { AccountService } from '@/account/account.service';
import { PrismaService } from '@/prisma/prisma.service';
import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CannedResponseController } from './canned-response.controller';
import { CannedResponseService } from './canned-response.service';

@Module({
  providers: [CannedResponseService, PrismaService, JwtService, AccountService],
  controllers: [CannedResponseController],
})
export class CannedResponseModule {}
