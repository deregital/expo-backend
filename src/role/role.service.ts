import { PRISMA_SERVICE } from '@/prisma/constants';
import { PrismaService } from '@/prisma/prisma.service';
import { Inject, Injectable } from '@nestjs/common';
import z from 'zod';
import { Tag, TagType } from '~/types';
import { deleteRoleResponseSchema } from './dto/delete-role.dto';
import { findAllRoleResponseSchema } from './dto/find-all-role.dto';
import { UpdateRoleDto, updateRoleResponseSchema } from './dto/update-role.dto';

@Injectable()
export class RoleService {
  constructor(@Inject(PRISMA_SERVICE) private prisma: PrismaService) {}

  async findAll(): Promise<z.infer<typeof findAllRoleResponseSchema>> {
    return await this.prisma.tag.findMany({
      where: {
        type: {
          equals: TagType.PARTICIPANT_ROLE,
        },
      },
    });
  }

  async existsRoleGroup(): Promise<boolean> {
    return !!(await this.prisma.tag.findFirst({
      where: {
        type: TagType.PRODUCTION_ROLE,
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

  async findProductionRole(): Promise<Tag | null> {
    return await this.prisma.tag.findFirst({
      where: {
        type: TagType.PRODUCTION_ROLE,
      },
    });
  }

  async existsRole(name: string): Promise<boolean> {
    return !!(await this.prisma.tag.findFirst({
      where: {
        name,
        type: TagType.PARTICIPANT_ROLE,
      },
    }));
  }

  async existsRoleById(id: string): Promise<boolean> {
    return !!(await this.prisma.tag.findUnique({
      where: {
        id,
        type: TagType.PARTICIPANT_ROLE,
      },
    }));
  }

  async update(
    id: Tag['id'],
    updateRoleDto: UpdateRoleDto,
  ): Promise<z.infer<typeof updateRoleResponseSchema>> {
    return this.prisma.tag.update({
      data: {
        name: updateRoleDto.name,
      },
      where: {
        id,
      },
    });
  }

  async delete(id: string): Promise<z.infer<typeof deleteRoleResponseSchema>> {
    return await this.prisma.tag.delete({
      where: {
        id,
      },
    });
  }
}
