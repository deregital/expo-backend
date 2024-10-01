import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from 'src/auth/dto/login.dto';
import { AccountService } from '@/account/account.service';
import { JwtService } from '@nestjs/jwt';
import { type Account } from '~/types/prisma-schema';
import { compare } from 'bcrypt';

type LoginPayload = {
  user: Omit<Account, 'password'>;
  backendTokens: {
    accessToken: string;
    refreshToken: string;
  };
};

@Injectable()
export class AuthService {
  constructor(
    private cuentaService: AccountService,
    private jwtService: JwtService,
  ) {}

  async login(dto: LoginDto): Promise<LoginPayload> {
    const user = await this.validateUser(dto);

    const payload = {
      username: user.username,
      id: user.id,
      role: user.role,
      sub: {
        usernname: user.username,
      },
    };

    return {
      user,
      backendTokens: {
        accessToken: await this.jwtService.signAsync(payload, {
          expiresIn: '1d',
          secret: process.env.JWT_SECRET,
        }),
        refreshToken: await this.jwtService.signAsync(payload, {
          expiresIn: '7d',
          secret: process.env.JWT_REFRESH,
        }),
      },
    };
  }

  private async validateUser(dto: LoginDto): Promise<Account> {
    const user = await this.cuentaService.findByUsername(dto.username);

    if (
      user &&
      (await compare(dto.password, user.password)) //TODO: CUANDO LO TENGAMOS CON HASH
      // dto.password === user.password
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
      id: pay.id,
      role: pay.role,
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
