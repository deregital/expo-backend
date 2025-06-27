import { PRISMA_SERVICE } from '@/prisma/constants';
import { PrismaService } from '@/prisma/prisma.service';
import { Inject, Injectable } from '@nestjs/common';
import z from 'zod';
import { TagType } from '~/types';
import { findAllRoleResponseSchema } from './dto/find-all.dto';

@Injectable()
export class RoleService {
  constructor(@Inject(PRISMA_SERVICE) private prisma: PrismaService) {}

  async findAll(): Promise<z.infer<typeof findAllRoleResponseSchema>> {
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

  async existsRole(name: string): Promise<boolean> {
    return !!(await this.prisma.tag.findFirst({
      where: {
        name,
        type: TagType.PARTICIPANT_ROLE,
      },
    }));
  }
}
