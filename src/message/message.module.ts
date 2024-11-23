import { AccountService } from '@/account/account.service';
import { MessageController } from '@/message/message.controller';
import { MessageService } from '@/message/message.service';
import { WhatsappService } from '@/message/whatsapp.service';
import { ProfileService } from '@/profile/profile.service';
import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [MessageController],
  providers: [
    JwtService,
    AccountService,
    ProfileService,
    WhatsappService,
    MessageService,
  ],
})
export class MessageModule {}
