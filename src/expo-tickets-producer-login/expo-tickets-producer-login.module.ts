import { Module } from '@nestjs/common';
import { ExpoTicketsProducerLoginService } from './expo-tickets-producer-login.service';
import { ExpoTicketsProducerLoginController } from './expo-tickets-producer-login.controller';

@Module({
  controllers: [ExpoTicketsProducerLoginController],
  providers: [ExpoTicketsProducerLoginService],
})
export class ExpoTicketsProducerLoginModule {}
