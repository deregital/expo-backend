import { AccountService } from '@/account/account.service';
import { PrismaModule } from '@/prisma/prisma.module';
import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { MercadoPagoService } from './mercadopago.service';

@Module({
  imports: [PrismaModule],
  providers: [MercadoPagoService, JwtService, AccountService],
})
export class MercadoPagoModule {}
