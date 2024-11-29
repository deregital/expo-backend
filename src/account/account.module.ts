import { AccountController } from '@/account/account.controller';
import { AccountService } from '@/account/account.service';
import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [AccountController],
  providers: [AccountService, JwtService],
})
export class AccountModule {}
