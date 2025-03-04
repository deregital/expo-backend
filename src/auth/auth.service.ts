import { AccountService } from '@/account/account.service';
import { LoginDto } from '@/auth/dto/login.dto';
import { translate } from '@/i18n/translate';
import { ProfileService } from '@/profile/profile.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { type Account } from '~/types/prisma-schema';

export type BackendTokens = {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
};

type LoginAccountPayload = {
  user: Omit<Account, 'password'>;
  backendTokens: BackendTokens;
};

export const EXPIRE_TIME = 7 * 24 * 60 * 60 * 1000;

type Payload = {
  username: string;
  id: string;
  sub: {
    usernname: string;
  };
};

@Injectable()
export class AuthService {
  constructor(
    private accountService: AccountService,
    private profileService: ProfileService,
    private jwtService: JwtService,
  ) {}

  async loginAccount(dto: LoginDto): Promise<LoginAccountPayload> {
    const account = await this.validateAccount(dto);

    const backendTokens = await this.generateToken(account);
    return {
      user: account,
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

  private async generateToken(user: {
    username: string;
    password: string;
    id: string;
  }): Promise<LoginAccountPayload['backendTokens']> {
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

  private getPayload(user: {
    username: string;
    password: string;
    id: string;
  }): Payload {
    return {
      username: user.username ?? '',
      id: user.id,
      sub: {
        usernname: user.username ?? '',
      },
    };
  }

  private async validateAccount(dto: LoginDto): Promise<Account> {
    const account = await this.accountService.findByUsername(dto.username);

    if (account && (await compare(dto.password, account.password))) {
      return account;
    }

    throw new UnauthorizedException([
      translate('route.auth.invalid-credentials'),
    ]);
  }
}
