import { AccountModule } from '@/account/account.module';
import { AppController } from '@/app.controller';
import { AppService } from '@/app.service';
import { AuthModule } from '@/auth/auth.module';
import { CannedResponseModule } from '@/canned-response/canned-response.module';
import { CommentModule } from '@/comment/comment.module';
import { ZodValidationPipe } from '@/filters/zod.pipe';
import { PrismaService } from '@/prisma/prisma.service';
import { TagGroupModule } from '@/tag-group/tag-group.module';
import { TagModule } from '@/tag/tag.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_PIPE } from '@nestjs/core';
import { EventFolderModule } from './event-folder/event-folder.module';
import { LocationModule } from './location/location.module';

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
  ],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },
    PrismaService,
    AppService,
  ],
  controllers: [AppController],
})
export class AppModule {
  // Code here
}
