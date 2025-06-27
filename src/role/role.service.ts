import { PRISMA_SERVICE } from '@/prisma/constants';
import { PrismaService } from '@/prisma/prisma.service';
import { Inject, Injectable } from '@nestjs/common';
import { Tag, TagType } from '~/types';

@Injectable()
export class RoleService {
  constructor(@Inject(PRISMA_SERVICE) private prisma: PrismaService) {}

  async findAll(): Promise<Tag[] | null> {
    return await this.prisma.tag.findMany({
      where: {
        type: {
          equals: TagType.PROFILE,
        },
      },
    });
  }

  async existsRoleGroup(): Promise<boolean> {
    return !!(await this.prisma.tag.findFirst({
      where: {
        type: TagType.PARTICIPANT_ROLE,
      },
    }));
  }

  async findGroupId(): Promise<string | null> {
    const roleTag = await this.prisma.tag.findFirst({
      where: {
        type: TagType.PRODUCTION_ROLE,
      },
    });

    return roleTag?.groupId || null;
  }
}
