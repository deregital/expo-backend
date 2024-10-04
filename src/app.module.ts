import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountModule } from './account/account.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from 'src/auth/auth.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { APP_PIPE } from '@nestjs/core';
import { ZodValidationPipe } from 'src/filters/zod.pipe';
import { TagModule } from './tag/tag.module';
import { TagGroupModule } from './tag-group/tag-group.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    TagModule,
    AccountModule,
    TagGroupModule,
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
