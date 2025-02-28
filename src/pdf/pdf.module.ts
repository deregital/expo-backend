import { AccountService } from '@/account/account.service';
import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PdfController } from './pdf.controller';
import { PdfService } from './pdf.service';

@Module({
  controllers: [PdfController],
  providers: [PdfService, JwtService, AccountService],
})
export class PdfModule {}
