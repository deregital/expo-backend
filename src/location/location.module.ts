import { AccountService } from '@/account/account.service';
import { LocationController } from '@/location/location.controller';
import { LocationService } from '@/location/location.service';
import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [LocationController],
  providers: [LocationService, JwtService, AccountService],
})
export class LocationModule {}
