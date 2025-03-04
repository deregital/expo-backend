import { PrismaService } from '@/prisma/prisma.service';
import { getProfileFromReq } from '@/shared/decorators/get-profile-from-req';
import { createParamDecoratorWithInjections } from '@/shared/decorators/param-decorator-with-injections';
import { ExecutionContext } from '@nestjs/common';
import { type Request } from 'express';
import { type Profile as ProfileType } from '~/types/prisma-schema';

export type ProfileWithoutPassword = Omit<ProfileType, 'password'>;

export const Profile = createParamDecoratorWithInjections(
  async (data: unknown, context: ExecutionContext, { prismaService }) => {
    const request = context.switchToHttp().getRequest<Request>();
    try {
      const profile = await getProfileFromReq(request, prismaService);

      return profile;
    } catch (error) {
      throw error;
    }
  },
  {
    prismaService: PrismaService,
  },
);
