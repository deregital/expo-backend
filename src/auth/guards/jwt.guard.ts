import { AccountService } from '@/account/account.service';
import { translate } from '@/i18n/translate';
import { ProfileService } from '@/profile/profile.service';
import { TokenPayload } from '@/shared/auth/auth-utils';
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { Role } from '~/types';

@Injectable()
export class JwtGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly accountService: AccountService,
    private readonly profileService: ProfileService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(req);

    if (!token) {
      throw new UnauthorizedException([translate('route.auth.no-token')]);
    }

    try {
      const payload: TokenPayload = await this.jwtService.verifyAsync(token, {
        secret: process.env.JWT_SECRET,
      });

      if (payload.role === Role.MI_EXPO) {
        const profile = await this.profileService.findById(payload.id);
        if (!profile) {
          throw new UnauthorizedException([
            translate('route.auth.user-not-found'),
          ]);
        }
        req.user = profile;
      } else if ([Role.ADMIN, Role.USER, Role.FORM].includes(payload.role)) {
        const account = await this.accountService.findByUsername(
          payload.username,
        );

        if (!account) {
          throw new UnauthorizedException([
            translate('route.auth.user-not-found'),
          ]);
        }
        req.user = account;
      }
    } catch (error) {
      throw new UnauthorizedException([translate('route.auth.invalid-token')]);
    }

    return true;
  }

  private extractTokenFromHeader(req: Request): string | undefined {
    if (!req.headers.authorization) {
      return undefined;
    }

    const [type, token] = req.headers.authorization.split(' ') ?? [];

    if (type !== 'Bearer' || !token) {
      return undefined;
    }

    return token;
  }
}
