import { PRISMA_SERVICE } from '@/prisma/constants';
import { PrismaService } from '@/prisma/prisma.service';
import {
  CreateTagGroupDto,
  createTagGroupResponseSchema,
} from '@/tag-group/dto/create-tag-group.dto';
import { deleteTagGroupResponseSchema } from '@/tag-group/dto/delete-tag-group.dto';
import { findAllTagGroupResponseSchema } from '@/tag-group/dto/find-all-tag-group.dto';
import { findAllWithTagsResponseSchema } from '@/tag-group/dto/find-all-with-tags.dto';
import { findOneTagGroupResponseSchema } from '@/tag-group/dto/find-one-tag-group.dto';
import { updateTagGroupResponseSchema } from '@/tag-group/dto/update-tag-group.dto';
import { Inject, Injectable } from '@nestjs/common';
import z from 'zod';

@Injectable()
export class TagGroupService {
  constructor(@Inject(PRISMA_SERVICE) private prisma: PrismaService) {}

  async create(
    dto: CreateTagGroupDto,
  ): Promise<z.infer<typeof createTagGroupResponseSchema>> {
    return await this.prisma.tagGroup.create({
      data: {
        name: dto.name,
        color: dto.color,
        isExclusive: dto.isExclusive,
      },
    });
  }

  async findAll(): Promise<z.infer<typeof findAllTagGroupResponseSchema>> {
    const tagGroups = await this.prisma.tagGroup.findMany({
      include: {
        tags: true,
      },
    });

    return { tagGroups };
  }

  async findById(
    id: string,
  ): Promise<z.infer<typeof findOneTagGroupResponseSchema>> {
    const tagGroup = await this.prisma.tagGroup.findUnique({
      where: {
        id,
      },
      include: {
        tags: true,
      },
    });
    return tagGroup!;
  }

  async update(
    id: string,
    dto: Partial<CreateTagGroupDto>,
  ): Promise<z.infer<typeof updateTagGroupResponseSchema>> {
    return await this.prisma.tagGroup.update({
      where: {
        id: id,
      },
      data: {
        name: dto.name,
        color: dto.color,
        isExclusive: dto.isExclusive,
      },
    });
  }

  async delete(
    id: string,
  ): Promise<z.infer<typeof deleteTagGroupResponseSchema>> {
    return await this.prisma.tagGroup.delete({
      where: {
        id,
      },
    });
  }

  async findAllWithTags(): Promise<
    z.infer<typeof findAllWithTagsResponseSchema>
  > {
    const groups = await this.prisma.tagGroup.findMany({
      select: {
        tags: {
          include: {
            _count: {
              select: {
                profiles: true,
              },
            },
          },
          orderBy: {
            name: 'asc',
          },
        },
        _count: {
          select: {
            tags: true,
          },
        },
        color: true,
        isExclusive: true,
        name: true,
        id: true,
      },
      orderBy: [
        {
          tags: {
            _count: 'desc',
          },
        },
        { created_at: 'desc' },
      ],
    });

    return {
      groups,
    };
  }
}
