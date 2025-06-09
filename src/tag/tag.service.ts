import { PRISMA_SERVICE } from '@/prisma/constants';
import { PrismaService } from '@/prisma/prisma.service';
import {
  CreateTagDto,
  createTagResponseSchema,
} from '@/tag/dto/create-tag.dto';
import { deleteTagResponseSchema } from '@/tag/dto/delete-tag.dto';
import { findAllTagResponseSchema } from '@/tag/dto/find-all-tag.dto';
import { findByGroupTagResponseSchema } from '@/tag/dto/find-by-group-tag.dto';
import { findOneTagResponseSchema } from '@/tag/dto/find-one-tag.dto';
import {
  MassiveAllocationDto,
  massiveAllocationResponseSchema,
} from '@/tag/dto/massive-allocation.dto';

import {
  MassiveDeallocationDto,
  massiveDeallocationResponseSchema,
} from '@/tag/dto/massive-deallocation.dto';
import {
  UpdateTagDto,
  updateTagResponseSchema,
} from '@/tag/dto/update-tag.dto';
import { Inject, Injectable } from '@nestjs/common';
import z from 'zod';
import { Profile, Tag, TagType } from '~/types';

@Injectable()
export class TagService {
  constructor(@Inject(PRISMA_SERVICE) private prisma: PrismaService) {}

  async create(
    dto: CreateTagDto,
  ): Promise<z.infer<typeof createTagResponseSchema>> {
    return await this.prisma.tag.create({
      data: {
        type: dto.type,
        name: dto.name,
        group: {
          connect: {
            id: dto.groupId,
          },
        },
      },
    });
  }

  async findAll(): Promise<z.infer<typeof findAllTagResponseSchema>> {
    return {
      tags: await this.prisma.tag.findMany({
        include: {
          group: true,
        },
      }),
    };
  }

  async findById(
    id: Tag['id'],
  ): Promise<z.infer<typeof findOneTagResponseSchema>> {
    const tag = await this.prisma.tag.findUnique({
      where: {
        id: id,
      },
      include: {
        group: true,
      },
    });
    return tag!;
  }

  async update(
    id: Tag['id'],
    updateTagDto: Partial<UpdateTagDto>,
  ): Promise<z.infer<typeof updateTagResponseSchema>> {
    return await this.prisma.tag.update({
      where: {
        id: id,
      },
      data: {
        name: updateTagDto.name,
        group: updateTagDto.groupId
          ? {
              connect: {
                id: updateTagDto.groupId,
              },
            }
          : undefined,
      },
    });
  }

  async remove(id: string): Promise<z.infer<typeof deleteTagResponseSchema>> {
    return await this.prisma.tag.delete({
      where: {
        id: id,
      },
    });
  }

  async findByGroup(
    groupId: string,
  ): Promise<z.infer<typeof findByGroupTagResponseSchema>> {
    return {
      tags: await this.prisma.tag.findMany({
        where: {
          groupId: groupId,
        },
        include: {
          group: true,
        },
      }),
    };
  }

  private async tagAllocation(
    profileId: Profile['id'],
    tagIds: Tag['id'][],
  ): Promise<Profile> {
    return await this.prisma.profile.update({
      where: {
        id: profileId,
      },
      data: {
        tags: {
          connect: tagIds.map((id) => ({
            id: id,
          })),
        },
      },
    });
  }

  private async tagDeallocation(
    profileId: Profile['id'],
    tagIds: Tag['id'][],
  ): Promise<Profile> {
    return await this.prisma.profile.update({
      where: {
        id: profileId,
      },
      data: {
        tags: {
          disconnect: tagIds.map((id) => ({
            id: id,
          })),
        },
      },
    });
  }

  async massiveAllocation(
    dto: MassiveAllocationDto,
  ): Promise<z.infer<typeof massiveAllocationResponseSchema>> {
    const profiles = await Promise.all(
      dto.profileIds.map((profileId) =>
        this.tagAllocation(profileId, dto.tagIds),
      ),
    );
    return {
      profiles: profiles,
    };
  }

  async massiveDeallocation(
    dto: MassiveDeallocationDto,
  ): Promise<z.infer<typeof massiveDeallocationResponseSchema>> {
    const profiles = await Promise.all(
      dto.profileIds.map((profileId) =>
        this.tagDeallocation(profileId, dto.tagIds),
      ),
    );
    return {
      profiles: profiles,
    };
  }

  async findParticipantTag(): Promise<Tag | null> {
    return await this.prisma.tag.findFirst({
      where: {
        type: TagType.PARTICIPANT,
      },
    });
  }

  async findNotInSystemTag(): Promise<Tag | null> {
    return await this.prisma.tag.findFirst({
      where: {
        type: TagType.NOT_IN_SYSTEM,
      },
    });
  }

  async delete(id: Tag['id']): Promise<Tag> {
    return await this.prisma.tag.delete({ where: { id } });
  }
}
