import { AccountService } from '@/account/account.service';
import { MessageController } from '@/message/message.controller';
import { MessageService } from '@/message/message.service';
import { WhatsappService } from '@/message/whatsapp.service';
import { ProfileService } from '@/profile/profile.service';
import { TagService } from '@/tag/tag.service';
import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [MessageController],
  providers: [
    JwtService,
    AccountService,
    ProfileService,
    TagService,
    WhatsappService,
    MessageService,
    ProfileService,
  ],
})
export class MessageModule {}
