import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { RegisterDto, RegisterResponseDto } from 'src/auth/dto/register.dto';
import { CuentaService } from 'src/cuenta/cuenta.service';
import { LoginDto } from 'src/auth/dto/login.dto';
import { AuthService } from 'src/auth/auth.service';
import { RefreshJwtGuard } from 'src/auth/guards/refresh.guard';
import { Request as ExpReq } from 'express';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { LoginResponseDto } from 'src/auth/dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly cuentaService: CuentaService,
    private authService: AuthService,
  ) {}

  @Post('register')
  @ApiCreatedResponse({
    description: 'Cuenta creada',
    type: RegisterResponseDto,
  })
  async registerUser(@Body() body: RegisterDto) {
    return await this.cuentaService.create(body);
  }

  @ApiOkResponse({
    description: 'Cuenta creada',
    type: LoginResponseDto,
  })
  @Post('login')
  async loginUser(@Body() body: LoginDto) {
    return await this.authService.login(body);
  }

  @UseGuards(RefreshJwtGuard)
  @Post('refresh')
  async refreshToken(@Request() req: ExpReq) {
    return await this.authService.refreshToken((req as any)['user']);
  }
}
