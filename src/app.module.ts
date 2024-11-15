import { AccountModule } from '@/account/account.module';
import { AppController } from '@/app.controller';
import { AppService } from '@/app.service';
import { AuthModule } from '@/auth/auth.module';
import { CannedResponseModule } from '@/canned-response/canned-response.module';
import { CommentModule } from '@/comment/comment.module';
import { ZodValidationPipe } from '@/filters/zod.pipe';
import { PrismaModule } from '@/prisma/prisma.module';
import { ExistingRecord } from '@/shared/validation/checkExistingRecord';
import { TagGroupModule } from '@/tag-group/tag-group.module';
import { TagModule } from '@/tag/tag.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_PIPE, ModuleRef } from '@nestjs/core';
import { EventFolderModule } from './event-folder/event-folder.module';
import { EventModule } from './event/event.module';
import { ImageModule } from './image/image.module';
import { LocationModule } from './location/location.module';
import { ProfileModule } from './profile/profile.module';

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
