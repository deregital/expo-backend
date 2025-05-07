import { AccountService } from '@/account/account.service';
import { ProductionService } from '@/production/production.service';
import { ProfileService } from '@/profile/profile.service';
import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ProductionAffiliationRequestController } from './production-affiliation-request.controller';
import { ProductionAffiliationRequestService } from './production-affiliation-request.service';

@Module({
  controllers: [ProductionAffiliationRequestController],
  providers: [
    ProductionAffiliationRequestService,
    ProductionService,
    JwtService,
    ProfileService,
    AccountService,
  ],
})
export class ProductionAffiliationRequestModule {}
