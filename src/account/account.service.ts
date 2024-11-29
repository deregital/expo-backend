import {
  CreateAccountDto,
  createAccountResponseSchema,
} from '@/account/dto/create-account.dto';
import { getGlobalFilterResponseSchema } from '@/account/dto/get-global-filter.dto';
import { updateGlobalFilterResponseSchema } from '@/account/dto/update-global-filter.dto';
import { translate } from '@/i18n/translate';
import { PRISMA_SERVICE } from '@/prisma/constants';
import { PrismaService } from '@/prisma/prisma.service';
import {
  ConflictException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { compare, hash } from 'bcrypt';
import z from 'zod';
import { Account, Tag } from '~/types/prisma-schema';

@Injectable()
export class AccountService {
  constructor(@Inject(PRISMA_SERVICE) private prisma: PrismaService) {}

  async create(
    dto: CreateAccountDto,
  ): Promise<z.infer<typeof createAccountResponseSchema>> {
    const user = await this.prisma.account.findUnique({
      where: {
        username: dto.username,
      },
    });

    if (user) {
      throw new ConflictException([
        translate('prisma.conflict', {
          field: 'username',
          model: translate('prisma.model.account'),
          value: dto.username,
        }),
      ]);
    }

    const newUser = await this.prisma.account.create({
      data: {
        role: dto.role,
        username: dto.username,
        password: await hash(dto.password, 10),
      },
      select: {
        username: true,
        role: true,
        fcmToken: true,
        id: true,
        isGlobalFilterActive: true,
      },
    });

    return {
      ...newUser,
      username: newUser.username,
      role: newUser.role,
    };
  }

  async findByUsername(username: Account['username']): Promise<Account | null> {
    return await this.prisma.account.findUnique({
      where: {
        username: username,
      },
    });
  }

  async findById(id: Account['id']): Promise<Account | null> {
    return await this.prisma.account.findUnique({
      where: {
        id,
      },
    });
  }

  async getTags(id: Account['id']): Promise<Tag[]> {
    const tags = await this.prisma.account.findUnique({
      where: {
        id,
      },
      select: {
        tags: true,
      },
    });
    return tags!.tags;
  }

  async updateGlobalFilter(
    id: Account['id'],
    {
      active,
      tagsIds,
    }: {
      active: boolean;
      tagsIds: Array<Tag['id']>;
    },
  ): Promise<z.infer<typeof updateGlobalFilterResponseSchema>> {
    const accountUpdated = await this.prisma.account.update({
      where: {
        id: id,
      },
      data: {
        isGlobalFilterActive: active,
        globalFilter: {
          set: tagsIds ? tagsIds.map((id) => ({ id })) : [],
        },
      },
      include: {
        globalFilter: true,
      },
    });
    return accountUpdated;
  }

  async getGlobalFilter(
    id: Account['id'],
  ): Promise<z.infer<typeof getGlobalFilterResponseSchema>> {
    const cuenta = await this.prisma.account.findUnique({
      where: {
        id: id,
      },
      select: {
        isGlobalFilterActive: true,
        globalFilter: {
          select: {
            id: true,
            name: true,
            type: true,
            group: {
              select: {
                id: true,
                isExclusive: true,
                color: true,
              },
            },
          },
        },
      },
    });

    if (!cuenta) {
      throw new NotFoundException([
        translate('route.account.global-filter-get.not-found'),
      ]);
    }

    return {
      isGlobalFilterActive: cuenta.isGlobalFilterActive,
      globalFilter: cuenta.globalFilter.map((tag) => ({
        id: tag.id,
        name: tag.name,
        type: tag.type,
        group: {
          id: tag.group.id,
          isExclusive: tag.group.isExclusive,
          color: tag.group.color,
        },
      })),
    };
  }

  async checkPassword(
    accountId: Account['id'],
    password: string,
  ): Promise<void> {
    const acc = await this.prisma.account.findUnique({
      where: {
        id: accountId,
      },
    });

    if (!acc) {
      throw new NotFoundException([
        translate('route.account.check-password.not-found'),
      ]);
    }

    const isPasswordValid = await this.comparePassword(acc, password);

    if (!isPasswordValid) {
      throw new ConflictException([
        translate('route.account.check-password.invalid-password'),
      ]);
    }
  }

  private async comparePassword(
    account: Account,
    password: string,
  ): Promise<boolean> {
    return await compare(password, account.password);
  }
}
