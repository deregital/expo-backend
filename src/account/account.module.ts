import { AccountController } from '@/account/account.controller';
import { AccountService } from '@/account/account.service';
import { PrismaService } from '@/prisma/prisma.service';
import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [AccountController],
  providers: [AccountService, PrismaService, JwtService],
})
export class AccountModule {}
