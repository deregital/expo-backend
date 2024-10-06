import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { AccountService } from '@/account/account.service';
import { translate } from '@/i18n/translate';

@Injectable()
export class JwtGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly cuentaService: AccountService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(req);

    if (!token) {
      throw new UnauthorizedException(translate('route.auth.no-token'));
    }

    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: process.env.JWT_SECRET,
      });

      const user = await this.cuentaService.findByUsername(payload.username);

      if (!user) {
        throw new UnauthorizedException(translate('route.auth.user-not-found'));
      }
      req.user = user;
    } catch (error) {
      throw new UnauthorizedException(translate('route.auth.invalid-token'));
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
