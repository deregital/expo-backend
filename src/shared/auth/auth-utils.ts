import { JwtService } from '@nestjs/jwt';
import { Account, Profile, Role } from '~/types/prisma-schema';

export const EXPIRE_TIME = 7 * 24 * 60 * 60 * 1000;

export type TokenPayload = {
  username: string;
  id: string;
  role: Role;
};

export type BackendTokens = {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
};

export type LoginAccountPayload = {
  user: Omit<Account, 'password'>;
  backendTokens: BackendTokens;
};

export type LoginProfilePayload = {
  user: Omit<Profile, 'password'>;
  backendTokens: BackendTokens;
};

export async function generateToken(
  user: {
    username: string;
    role: Role;
    id: string;
  },
  jwtService: JwtService,
): Promise<LoginAccountPayload['backendTokens']> {
  const payload = getPayload(user);

  return {
    accessToken: await jwtService.signAsync(payload, {
      expiresIn: '7d',
      secret: process.env.JWT_SECRET,
    }),
    refreshToken: await jwtService.signAsync(payload, {
      expiresIn: '7d',
      secret: process.env.JWT_REFRESH,
    }),
    expiresIn: new Date().setTime(new Date().getTime() + EXPIRE_TIME),
  };
}

export function getPayload(user: {
  username: string;
  role: Role;
  id: string;
}): TokenPayload {
  return {
    username: user.username ?? '',
    id: user.id,
    role: user.role,
  };
}
