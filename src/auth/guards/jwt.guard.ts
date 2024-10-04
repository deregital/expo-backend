import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { AccountService } from '@/account/account.service';

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
      throw new UnauthorizedException('Token no encontrado');
    }

    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: process.env.JWT_SECRET,
      });

      const user = await this.cuentaService.findByUsername(payload.username);

      if (!user) {
        throw new UnauthorizedException('Usuario no encontrado');
      }
    } catch (error) {
      throw new UnauthorizedException('Token inválido');
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
