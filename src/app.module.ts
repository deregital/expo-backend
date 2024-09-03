import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CuentaModule } from './cuenta/cuenta.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from 'src/auth/auth.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [ConfigModule.forRoot(), AuthModule, CuentaModule],
  providers: [PrismaService, AppService],
  controllers: [AppController],
})
export class AppModule {
  // Code here
}
