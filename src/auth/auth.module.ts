import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AccountService } from '@/account/account.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [AuthController],
  providers: [AuthService, AccountService, PrismaService, JwtService],
})
export class AuthModule {}
