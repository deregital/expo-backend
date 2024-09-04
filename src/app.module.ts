import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CuentaModule } from './cuenta/cuenta.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from 'src/auth/auth.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { APP_PIPE } from '@nestjs/core';
import { ZodValidationPipe } from 'src/filters/zod.pipe';

@Module({
  imports: [ConfigModule.forRoot(), AuthModule, CuentaModule],
  providers: [
    {
      provide: APP_PIPE,
      // mirar https://github.com/anatine/zod-plugins/blob/main/packages/zod-nestjs/src/lib/zod-validation-pipe.ts y ver si se pueden cambiar los valores de los errores
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
