import { AccountService } from '@/account/account.service';
import { ProfileService } from '@/profile/profile.service';
import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CannedResponseController } from './canned-response.controller';
import { CannedResponseService } from './canned-response.service';

@Module({
  providers: [
    CannedResponseService,
    JwtService,
    AccountService,
    ProfileService,
  ],
  controllers: [CannedResponseController],
})
export class CannedResponseModule {}
