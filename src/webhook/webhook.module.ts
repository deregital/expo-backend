import { AccountService } from '@/account/account.service';
import { MessageService } from '@/message/message.service';
import { WhatsappService } from '@/message/whatsapp.service';
import { ProfileService } from '@/profile/profile.service';
import { TagService } from '@/tag/tag.service';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import * as bodyParser from 'body-parser';
import { WebhookController } from './webhook.controller';
import { WebhookService } from './webhook.service';

@Module({
  controllers: [WebhookController],
  providers: [
    WebhookService,
    WhatsappService,
    TagService,
    ProfileService,
    MessageService,
    AccountService,
  ],
})
export class WebhookModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply(bodyParser.text({ type: 'application/json' }))
      .forRoutes(WebhookController); // Apply only to this controller
  }
}
