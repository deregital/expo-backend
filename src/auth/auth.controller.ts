import { AuthService } from '@/auth/auth.service';
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
    description: 'Cuenta creada',
    type: LoginResponseDto,
  })
  @Post('login')
  async loginUser(
    @Body() body: LoginDto,
  ): Promise<z.infer<typeof loginResponseSchema>> {
    return await this.authService.login(body);
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
    return await this.authService.refreshToken((req as any)['user']);
  }
}
