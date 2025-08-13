import {
  LoginProducerDto,
  LoginProducerResponseDto,
  loginProducerResponseSchema,
} from '@/expo-tickets-producer-login/dto/[N]expo-tickets-producer-login.dto';
import {
  GetEventTicketsLoginProducerResponseDto,
  getEventTicketsLoginProducerResponseSchema,
} from '@/expo-tickets-producer-login/dto/[N]get-event-tickets.dto';
import { ErrorDto } from '@/shared/errors/errorType';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiOkResponse, ApiUnauthorizedResponse } from '@nestjs/swagger';
import z from 'zod';
import { ExpoTicketsProducerLoginService } from './expo-tickets-producer-login.service';

@Controller('expo-tickets-producer-login')
export class ExpoTicketsProducerLoginController {
  constructor(
    private readonly expoTicketsProducerLoginService: ExpoTicketsProducerLoginService,
  ) {}

  @ApiOkResponse({
    type: LoginProducerResponseDto,
    description: 'Login exitoso',
  })
  @ApiUnauthorizedResponse({
    type: ErrorDto,
    description: 'Credenciales incorrectas',
  })
  @Post('login')
  async login(
    @Body() loginDto: LoginProducerDto,
  ): Promise<z.infer<typeof loginProducerResponseSchema>> {
    return await this.expoTicketsProducerLoginService.login(loginDto);
  }

  @ApiOkResponse({
    type: GetEventTicketsLoginProducerResponseDto,
    description: 'Tickets obtenidos exitosamente',
  })
  @ApiUnauthorizedResponse({
    type: ErrorDto,
    description: 'Credenciales incorrectas',
  })
  @Post('get-event-tickets')
  async getEventTickets(
    @Body() loginDto: LoginProducerDto,
  ): Promise<z.infer<typeof getEventTicketsLoginProducerResponseSchema>> {
    return await this.expoTicketsProducerLoginService.getEventTickets(loginDto);
  }
}
