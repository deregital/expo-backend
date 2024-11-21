import { AccountService } from '@/account/account.service';
import { MessageController } from '@/message/message.controller';
import { WhatsappService } from '@/message/whatsapp.service';
import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [MessageController],
  providers: [JwtService, AccountService, WhatsappService],
})
export class MessageModule {}
