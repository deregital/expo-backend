import { EventService } from '@/event/event.service';
import { ProfileService } from '@/profile/profile.service';
import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { MiExpoController } from './mi-expo.controller';
import { MiExpoService } from './mi-expo.service';

@Module({
  controllers: [MiExpoController],
  providers: [MiExpoService, ProfileService, JwtService, EventService],
})
export class MiExpoModule {}
