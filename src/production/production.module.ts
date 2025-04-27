import { AccountService } from '@/account/account.service';
import { ProfileService } from '@/profile/profile.service';
import { TagService } from '@/tag/tag.service';
import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ProductionController } from './production.controller';
import { ProductionService } from './production.service';

@Module({
  controllers: [ProductionController],
  providers: [
    ProductionService,
    JwtService,
    ProfileService,
    AccountService,
    TagService,
  ],
})
export class ProductionModule {}
