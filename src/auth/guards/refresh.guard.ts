import { translate } from '@/i18n/translate';
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class RefreshJwtGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(req);

    if (!token) {
      throw new UnauthorizedException(translate('route.auth.no-token'));
    }

    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: process.env.JWT_REFRESH,
      });

      req['user'] = payload;
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

    if (type !== 'Refresh' || !token) {
      return undefined;
    }

    return token;
  }
}
