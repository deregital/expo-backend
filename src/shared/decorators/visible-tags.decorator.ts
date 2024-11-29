import { AccountService } from '@/account/account.service';
import { PrismaService } from '@/prisma/prisma.service';
import { getAccountFromReq } from '@/shared/decorators/get-account-from-req';
import { createParamDecoratorWithInjections } from '@/shared/decorators/param-decorator-with-injections';
import { TagService } from '@/tag/tag.service';
import { ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import { Role, Tag } from '~/types';

export type VisibleTagsType = Tag['id'][];

export const VisibleTags = createParamDecoratorWithInjections(
  async (
    data: unknown,
    context: ExecutionContext,
    { accountService, tagService, prismaService },
  ) => {
    const request = context.switchToHttp().getRequest<Request>();
    const account = await getAccountFromReq(request, prismaService);

    let visibleTags: VisibleTagsType = [];

    try {
      if (account.role === Role.ADMIN) {
        visibleTags = (await tagService.findAll()).tags.map((tag) => tag.id);
      } else {
        visibleTags = (await accountService.getTags(account.id)).map(
          (tag) => tag.id,
        );
      }

      return visibleTags;
    } catch (error) {
      throw error;
    }
  },
  {
    prismaService: PrismaService,
    accountService: AccountService,
    tagService: TagService,
  },
);
