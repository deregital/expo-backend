import { AccountController } from '@/account/account.controller';
import { AccountService } from '@/account/account.service';
import { ProfileService } from '@/profile/profile.service';
import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [AccountController],
  providers: [AccountService, JwtService, ProfileService],
})
export class AccountModule {}
