import { AccountService } from '@/account/account.service';
import { AccountWithoutPassword } from '@/auth/decorators/account.decorator';
import { translate } from '@/i18n/translate';
import { PrismaService } from '@/prisma/prisma.service';
import { NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { type Request } from 'express';

export async function getAccountFromReq(
  request: Request,
): Promise<AccountWithoutPassword> {
  const jwtService = new JwtService({ secret: process.env.JWT_SECRET });

  const prismaService = new PrismaService();
  const userService = new AccountService(prismaService);

  try {
    const token = request.headers.authorization?.split(' ')[1];

    if (!token) {
      throw new UnauthorizedException([translate('route.auth.no-token')]);
    }

    const decoded = jwtService.decode(token);
    if (!decoded) {
      throw new UnauthorizedException([translate('route.auth.invalid-token')]);
    }

    const user = await userService.findById(decoded.id);
    if (!user) {
      throw new NotFoundException([translate('route.auth.user-not-found')]);
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...userWithoutPassword } = user;

    return userWithoutPassword;
  } catch (error) {
    throw new UnauthorizedException([translate('route.auth.invalid-token')]);
  }
}
