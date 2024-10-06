import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { LoginDto } from 'src/auth/dto/login.dto';
import { AuthService } from 'src/auth/auth.service';
import { RefreshJwtGuard } from 'src/auth/guards/refresh.guard';
import { Request as ExpReq } from 'express';
import { ApiOkResponse } from '@nestjs/swagger';
import { LoginResponseDto } from 'src/auth/dto/login.dto';
import { Roles } from '@/auth/decorators/rol.decorator';
import { Role } from '~/types/prisma-schema';
import { RoleGuard } from '@/auth/guards/role.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOkResponse({
    description: 'Cuenta creada',
    type: LoginResponseDto,
  })
  @Post('login')
  async loginUser(@Body() body: LoginDto): Promise<LoginResponseDto> {
    return await this.authService.login(body);
  }

  @Roles(Role.ADMIN, Role.USER)
  @UseGuards(RoleGuard, RefreshJwtGuard)
  @Post('refresh')
  async refreshToken(@Request() req: ExpReq): Promise<{
    accessToken: string;
    refreshToken: string;
  }> {
    return await this.authService.refreshToken((req as any)['user']);
  }
}
