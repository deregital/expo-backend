import { AccountService } from '@/account/account.service';
import { LocationController } from '@/location/location.controller';
import { LocationService } from '@/location/location.service';
import { ProfileService } from '@/profile/profile.service';
import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [LocationController],
  providers: [LocationService, JwtService, AccountService, ProfileService],
})
export class LocationModule {}
