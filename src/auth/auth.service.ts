import { AccountService } from '@/account/account.service';
import { LoginDto } from '@/auth/dto/login.dto';
import { translate } from '@/i18n/translate';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
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
    private accountService: AccountService,
    private jwtService: JwtService,
  ) {}

  async login(dto: LoginDto): Promise<LoginPayload> {
    const user = await this.validateUser(dto);

    const backendTokens = await this.generateToken(user);
    return {
      user,
      backendTokens,
    };
  }

  async refreshToken(account: Account): Promise<{
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
  }> {
    const user = await this.accountService.findByUsername(account.username);
    if (!user) {
      throw new UnauthorizedException([translate('route.auth.invalid-token')]);
    }

    const backendTokens = await this.generateToken(user);

    return {
      ...backendTokens,
    };
  }

  private async generateToken(
    user: Account,
  ): Promise<LoginPayload['backendTokens']> {
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

  private async validateUser(dto: LoginDto): Promise<Account> {
    const user = await this.accountService.findByUsername(dto.username);

    if (user && (await compare(dto.password, user.password))) {
      return user;
    }

    throw new UnauthorizedException([
      translate('route.auth.invalid-credentials'),
    ]);
  }
}
