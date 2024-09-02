import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from 'src/auth/dto/auth.dto';
import { CuentaService } from 'src/cuenta/cuenta.service';
import { z } from 'zod';
import { JwtService } from '@nestjs/jwt';
import { Cuenta } from '@prisma/client';

type LoginPayload = {
  user: Omit<Cuenta, 'password'>;
  backendTokens: {
    accessToken: string;
    refreshToken: string;
  };
};

@Injectable()
export class AuthService {
  constructor(
    private cuentaService: CuentaService,
    private jwtService: JwtService,
  ) {}

  async login(dto: z.infer<typeof LoginDto>): Promise<LoginPayload> {
    console.log(dto);
    const user = await this.validateUser(dto);

    const payload = {
      username: user.nombreUsuario,
      sub: {
        usernname: user.nombreUsuario,
      },
    };

    return {
      user,
      backendTokens: {
        accessToken: await this.jwtService.signAsync(payload, {
          expiresIn: '20s',
          secret: process.env.JWT_SECRET,
        }),
        refreshToken: await this.jwtService.signAsync(payload, {
          expiresIn: '7d',
          secret: process.env.JWT_REFRESH,
        }),
      },
    };
  }

  private async validateUser(dto: z.infer<typeof LoginDto>): Promise<Cuenta> {
    const user = await this.cuentaService.findByUsername(dto.username);

    if (
      user &&
      // (await compare(dto.password, user.contrasena)) TODO: CUANDO LO TENGAMOS CON HASH
      dto.password === user.contrasena
    ) {
      return user;
    }

    throw new UnauthorizedException('Credenciales inválidas');
  }

  async refreshToken(pay: any): Promise<{
    accessToken: string;
    refreshToken: string;
  }> {
    const payload = {
      username: pay.username,
      sub: pay.sub,
    };

    return {
      accessToken: await this.jwtService.signAsync(payload, {
        expiresIn: '1h',
        secret: process.env.JWT_SECRET,
      }),
      refreshToken: await this.jwtService.signAsync(payload, {
        expiresIn: '7d',
        secret: process.env.JWT_REFRESH,
      }),
    };
  }
}
