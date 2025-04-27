import { AccountModule } from '@/account/account.module';
import { AppController } from '@/app.controller';
import { AppService } from '@/app.service';
import { AuthModule } from '@/auth/auth.module';
import { CannedResponseModule } from '@/canned-response/canned-response.module';
import { CommentModule } from '@/comment/comment.module';
import { CsvModule } from '@/csv/csv.module';
import { EventFolderModule } from '@/event-folder/event-folder.module';
import { EventModule } from '@/event/event.module';
import { ZodValidationPipe } from '@/filters/zod.pipe';
import { ImageModule } from '@/image/image.module';
import { LocationModule } from '@/location/location.module';
import { MercadoPagoModule } from '@/mercadopago/mercadopago.module';
import { MessageModule } from '@/message/message.module';
import { MiExpoModule } from '@/mi-expo/mi-expo.module';
import { OtpModule } from '@/otp/otp.module';
import { PrismaModule } from '@/prisma/prisma.module';
import { ProfileModule } from '@/profile/profile.module';
import { ResendModule } from '@/resend/resend.module';
import { ExistingRecord } from '@/shared/validation/checkExistingRecord';
import { TagGroupModule } from '@/tag-group/tag-group.module';
import { TagModule } from '@/tag/tag.module';
import { TicketGroupModule } from '@/ticket-group/ticket-group.module';
import { TicketModule } from '@/ticket/ticket.module';
import { WebhookModule } from '@/webhook/webhook.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_PIPE, ModuleRef } from '@nestjs/core';
import { ProductionModule } from './production/production.module';
import { ProductionAffiliationRequestModule } from './production-affiliation-request/production-affiliation-request.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    TagModule,
    AccountModule,
    TagGroupModule,
    CommentModule,
    LocationModule,
    CannedResponseModule,
    EventFolderModule,
    EventModule,
    ProfileModule,
    PrismaModule,
    ImageModule,
    CsvModule,
    MessageModule,
    TicketModule,
    TicketGroupModule,
    WebhookModule,
    OtpModule,
    MiExpoModule,
    ResendModule.forRoot({
      apiKey: process.env.RESEND_API_KEY ?? 're_JUST_FOR_ACTION',
    }),
    MercadoPagoModule,
    ProductionModule,
    ProductionAffiliationRequestModule,
  ],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },
    AppService,
  ],
  controllers: [AppController],
})
export class AppModule {
  constructor(private readonly moduleRef: ModuleRef) {
    ExistingRecord.registerModuleRef(moduleRef);
  }
}
