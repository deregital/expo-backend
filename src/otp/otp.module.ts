import { AccountService } from '@/account/account.service';
import { WhatsappService } from '@/message/whatsapp.service';
import { ProfileService } from '@/profile/profile.service';
import { Module } from '@nestjs/common';
import { OtpController } from './otp.controller';
import { OtpService } from './otp.service';

@Module({
  controllers: [OtpController],
  providers: [OtpService, WhatsappService, ProfileService, AccountService],
})
export class OtpModule {}
