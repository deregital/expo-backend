import { AccountService } from '@/account/account.service';
import { AccountWithoutPassword } from '@/auth/decorators/account.decorator';
import { translate } from '@/i18n/translate';
import { ProfileWithoutPassword } from '@/mi-expo/decorators/profile.decorator';
import { PrismaService } from '@/prisma/prisma.service';
import { ProfileService } from '@/profile/profile.service';
import { UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { type Request } from 'express';
import { Role } from '~/types/prisma-schema';

export async function getProfileFromReq(
  request: Request,
  prismaService: PrismaService,
): Promise<ProfileWithoutPassword | AccountWithoutPassword> {
  const jwtService = new JwtService({ secret: process.env.JWT_SECRET });
  const profileService = new ProfileService(prismaService);
  const accountService = new AccountService(prismaService);

  const token = request.headers.authorization?.split(' ')[1];

  if (!token) {
    throw new UnauthorizedException([translate('route.auth.no-token')]);
  }

  const decoded = jwtService.decode(token);

  if (!decoded) {
    throw new UnauthorizedException([translate('route.auth.invalid-token')]);
  }

  if (decoded.role === Role.MI_EXPO) {
    const profile = await profileService.findById(decoded.id);
    if (!profile) {
      throw new UnauthorizedException([translate('route.auth.user-not-found')]);
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...profileWithoutPassword } = profile;
    return profileWithoutPassword;
  } else if (
    [Role.ADMIN, Role.USER, Role.FORM, Role.TICKETS].includes(decoded.role)
  ) {
    const account = await accountService.findByUsername(decoded.username);

    if (!account) {
      throw new UnauthorizedException([translate('route.auth.user-not-found')]);
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...accountWithoutPassword } = account;

    return accountWithoutPassword;
  }

  throw new UnauthorizedException([translate('route.auth.invalid-token')]);
}
