import {
  LoginProducerDto,
  loginProducerResponseSchema,
} from '@/expo-tickets-producer-login/dto/[N]expo-tickets-producer-login.dto';
import { getEventTicketsLoginProducerResponseSchema } from '@/expo-tickets-producer-login/dto/[N]get-event-tickets.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';
import z from 'zod';
import { ExpoTicketsProducerLoginService } from './expo-tickets-producer-login.service';

@Controller('expo-tickets-producer-login')
export class ExpoTicketsProducerLoginController {
  constructor(
    private readonly expoTicketsProducerLoginService: ExpoTicketsProducerLoginService,
  ) {}

  @Post('login')
  async login(
    @Body() loginDto: LoginProducerDto,
  ): Promise<z.infer<typeof loginProducerResponseSchema>> {
    return await this.expoTicketsProducerLoginService.login(loginDto);
  }

  @Get('get-event-tickets')
  async getEventTickets(
    @Body() loginDto: LoginProducerDto,
  ): Promise<z.infer<typeof getEventTicketsLoginProducerResponseSchema>> {
    return await this.expoTicketsProducerLoginService.getEventTickets(loginDto);
  }
}
