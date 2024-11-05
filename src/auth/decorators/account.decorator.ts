import { PrismaService } from '@/prisma/prisma.service';
import { getAccountFromReq } from '@/shared/decorators/get-account-from-req';
import { createParamDecoratorWithInjections } from '@/shared/decorators/param-decorator-with-injections';
import { ExecutionContext } from '@nestjs/common';
import { type Request } from 'express';
import { type Account as AccountType } from '~/types/prisma-schema';

export type AccountWithoutPassword = Omit<AccountType, 'password'>;

export const Account = createParamDecoratorWithInjections(
  async (
    data: unknown,
    context: ExecutionContext,
    { prismaService: _prismaService },
  ) => {
    const request = context.switchToHttp().getRequest<Request>();
    try {
      const account = await getAccountFromReq(request);

      return account;
    } catch (error) {
      throw error;
    }
  },
  {
    prismaService: PrismaService,
  },
);
