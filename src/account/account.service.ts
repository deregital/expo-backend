import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { hash } from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  CreateAccountDto,
  CreateAccountResponseDto,
} from '@/account/dto/createAccount.dto';
import { GetGlobalFilterResponseDto } from '@/account/dto/getGlobalFilter.dto';
import { translate } from '@/i18n/translate';
import { Account, Tag } from '~/types/prisma-schema';

@Injectable()
export class AccountService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateAccountDto): Promise<CreateAccountResponseDto> {
    const user = await this.prisma.account.findUnique({
      where: {
        username: dto.username,
      },
    });

    if (user) {
      throw new ConflictException(translate('route.account.create.conflict'));
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

  async updateGlobalFilter(
    id: Account['id'],
    {
      active,
      tagsIds,
    }: {
      active: boolean;
      tagsIds: Array<Tag['id']>;
    },
  ): Promise<
    | (Account & {
        globalFilter: Array<Pick<Tag, 'id' | 'name' | 'type'>>;
      })
    | undefined
  > {
    try {
      return await this.prisma.account.update({
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
    } catch (e) {
      throw new ConflictException(
        translate('route.account.global-filter-patch.conflict'),
      );
    }
  }

  async getFiltroBase(id: Account['id']): Promise<GetGlobalFilterResponseDto> {
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
      throw new NotFoundException(
        translate('route.account.global-filter-get.not-found'),
      );
    }

    return {
      active: cuenta.isGlobalFilterActive,
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
}
