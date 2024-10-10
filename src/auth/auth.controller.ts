import { RefreshResponseDto } from '@/auth/dto/refresh.dto';
import { withoutDates } from '@/shared/dto-modification/without-dates';
import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { Request as ExpReq } from 'express';
import { AuthService } from 'src/auth/auth.service';
import { LoginDto, LoginResponseDto } from 'src/auth/dto/login.dto';
import { RefreshJwtGuard } from 'src/auth/guards/refresh.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOkResponse({
    description: 'Cuenta creada',
    type: LoginResponseDto,
  })
  @Post('login')
  async loginUser(@Body() body: LoginDto): Promise<LoginResponseDto> {
    return withoutDates(await this.authService.login(body));
  }

  @ApiOkResponse({
    description: 'Token renovado',
    type: RefreshResponseDto,
  })
  @UseGuards(RefreshJwtGuard)
  @Post('refresh')
  async refreshToken(@Request() req: ExpReq): Promise<RefreshResponseDto> {
    return await this.authService.refreshToken((req as any)['user']);
  }
}
