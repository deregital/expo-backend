import { AccountService } from '@/account/account.service';
import { translate } from '@/i18n/translate';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { LoginDto } from 'src/auth/dto/login.dto';
import { type Account } from '~/types/prisma-schema';

type LoginPayload = {
  user: Omit<Account, 'password'>;
  backendTokens: {
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
  };
};

const EXPIRE_TIME = 7 * 24 * 60 * 60 * 1000;

type Payload = {
  username: string;
  id: string;
  role: string;
  sub: {
    usernname: string;
  };
};

@Injectable()
export class AuthService {
  constructor(
    private cuentaService: AccountService,
    private jwtService: JwtService,
  ) {}

  private getPayload(user: Account): Payload {
    return {
      username: user.username,
      id: user.id,
      role: user.role,
      sub: {
        usernname: user.username,
      },
    };
  }

  async login(dto: LoginDto): Promise<LoginPayload> {
    const user = await this.validateUser(dto);

    const payload = this.getPayload(user);
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
        expiresIn: new Date().setTime(new Date().getTime() + EXPIRE_TIME),
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

    throw new UnauthorizedException(
      translate('route.auth.invalid-credentials'),
    );
  }

  async refreshToken(account: Account): Promise<{
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
  }> {
    const user = await this.cuentaService.findByUsername(account.username);
    if (!user) {
      throw new UnauthorizedException(translate('route.auth.invalid-token'));
    }
    const payload = this.getPayload(user);

    return {
      accessToken: await this.jwtService.signAsync(payload, {
        expiresIn: '1h',
        secret: process.env.JWT_SECRET,
      }),
      refreshToken: await this.jwtService.signAsync(payload, {
        expiresIn: '7d',
        secret: process.env.JWT_REFRESH,
      }),
      expiresIn: new Date().setTime(new Date().getTime() + EXPIRE_TIME),
    };
  }
}
