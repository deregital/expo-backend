import {
  createParamDecorator,
  ExecutionContext,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AccountService } from '@/account/account.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { Account } from '~/types/prisma-schema';
import { translate } from '@/i18n/translate';

export type AccountWithoutPassword = Omit<Account, 'password'>;

export const User = createParamDecorator(
  async (data: unknown, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    const jwtService = new JwtService({ secret: process.env.JWT_SECRET });

    const prismaService = new PrismaService();
    const userService = new AccountService(prismaService);

    try {
      const token = request.headers.authorization?.split(' ')[1];
      if (!token) {
        throw new UnauthorizedException(translate('route.auth.no-token'));
      }

      const decoded = jwtService.decode(token);
      if (!decoded) {
        throw new UnauthorizedException(translate('route.auth.invalid-token'));
      }

      const user = await userService.findById(decoded.id);
      if (!user) {
        throw new NotFoundException(translate('route.auth.user-not-found'));
      }

      const { password, ...userWithoutPassword } = user;

      return userWithoutPassword;
    } catch (error) {
      throw new UnauthorizedException(translate('route.auth.invalid-token'));
    }
  },
);
