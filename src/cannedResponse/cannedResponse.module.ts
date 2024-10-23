import { AccountService } from '@/account/account.service';
import { PrismaService } from '@/prisma/prisma.service';
import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CannedResponseController } from './cannedResponse.controller';
import { CannedResponseService } from './cannedResponse.service';

@Module({
  providers: [CannedResponseService, PrismaService, JwtService, AccountService],
  controllers: [CannedResponseController],
})
export class CannedResponseModule {}
