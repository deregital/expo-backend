import { AccountService } from '@/account/account.service';
import { AuthService } from '@/auth/auth.service';
import { WhatsappService } from '@/message/whatsapp.service';
import { ProfileService } from '@/profile/profile.service';
import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { OtpController } from './otp.controller';
import { OtpService } from './otp.service';

@Module({
  controllers: [OtpController],
  providers: [
    OtpService,
    WhatsappService,
    AuthService,
    ProfileService,
    JwtService,
    AccountService,
  ],
})
export class OtpModule {}
