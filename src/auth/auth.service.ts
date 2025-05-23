import { AccountService } from '@/account/account.service';
import { LoginDto } from '@/auth/dto/login.dto';
import { translate } from '@/i18n/translate';
import { LoginAccountPayload, generateToken } from '@/shared/auth/auth-utils';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { type Account } from '~/types/prisma-schema';
@Injectable()
export class AuthService {
  constructor(
    private accountService: AccountService,
    private jwtService: JwtService,
  ) {}

  async loginAccount(dto: LoginDto): Promise<LoginAccountPayload> {
    const account = await this.validateAccount(dto);

    const backendTokens = await generateToken(account, this.jwtService);
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
    const user = await this.accountService.findById(account.id);
    if (!user) {
      throw new UnauthorizedException([translate('route.auth.invalid-token')]);
    }

    const backendTokens = await generateToken(user, this.jwtService);

    return {
      ...backendTokens,
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
