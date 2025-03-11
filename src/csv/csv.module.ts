import { AccountService } from '@/account/account.service';
import { ProfileService } from '@/profile/profile.service';
import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CsvController } from './csv.controller';
import { CsvService } from './csv.service';

@Module({
  providers: [CsvService, JwtService, AccountService, ProfileService],
  controllers: [CsvController],
})
export class CsvModule {}
