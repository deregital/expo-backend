import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { ZodPipe } from 'src/filters/zod.pipe';
import { CreateCuentaDto } from 'src/cuenta/dto/cuenta.dto';
import { z } from 'zod';
import { CuentaService } from 'src/cuenta/cuenta.service';
import { LoginDto } from 'src/auth/dto/auth.dto';
import { AuthService } from 'src/auth/auth.service';
import { RefreshJwtGuard } from 'src/auth/guards/refresh.guard';
import { Request as ExpReq } from 'express';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly cuentaService: CuentaService,
    private authService: AuthService,
  ) {}

  @Post('register')
  async registerUser(
    @Body(new ZodPipe(CreateCuentaDto)) body: z.infer<typeof CreateCuentaDto>,
  ) {
    return await this.cuentaService.create(body);
  }

  @Post('login')
  async loginUser(@Body(new ZodPipe(LoginDto)) body: z.infer<typeof LoginDto>) {
    return await this.authService.login(body);
  }

  @UseGuards(RefreshJwtGuard)
  @Post('refresh')
  async refreshToken(@Request() req: ExpReq) {
    return await this.authService.refreshToken((req as any)['user']);
  }
}
