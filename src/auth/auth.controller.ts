import { AuthService } from '@/auth/auth.service';
import {
  LoginMiExpoResponseDto,
  loginMiExpoResponseSchema,
} from '@/auth/dto/login-mi-expo.dto';
import {
  LoginDto,
  LoginResponseDto,
  loginResponseSchema,
} from '@/auth/dto/login.dto';
import {
  RefreshResponseDto,
  refreshResponseSchema,
} from '@/auth/dto/refresh.dto';
import { RefreshJwtGuard } from '@/auth/guards/refresh.guard';
import { translate } from '@/i18n/translate';
import { ErrorDto } from '@/shared/errors/errorType';
import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { ApiOkResponse, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { Request as ExpReq } from 'express';
import z from 'zod';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiUnauthorizedResponse({
    description: translate('route.auth.invalid-credentials'),
    type: ErrorDto,
  })
  @ApiOkResponse({
    description: 'Sesión iniciada',
    type: LoginResponseDto,
  })
  @Post('login')
  async loginAccount(
    @Body() body: LoginDto,
  ): Promise<z.infer<typeof loginResponseSchema>> {
    return await this.authService.loginAccount(body);
  }

  @ApiOkResponse({
    description: 'Token renovado',
    type: RefreshResponseDto,
  })
  @UseGuards(RefreshJwtGuard)
  @Post('refresh')
  async refreshToken(
    @Request() req: ExpReq,
  ): Promise<z.infer<typeof refreshResponseSchema>> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return await this.authService.refreshToken((req as any)['user']);
  }

  @ApiUnauthorizedResponse({
    description: translate('route.auth.invalid-credentials'),
    type: ErrorDto,
  })
  @ApiOkResponse({
    description: 'Sesión iniciada',
    type: LoginMiExpoResponseDto,
  })
  @Post('login-mi-expo')
  async loginProfile(
    @Body() body: LoginDto,
  ): Promise<z.infer<typeof loginMiExpoResponseSchema>> {
    return await this.authService.loginProfile(body);
  }
}
