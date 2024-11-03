import { PrismaService } from '@/prisma/prisma.service';
import { findAllProfileResponseSchema } from '@/profile/dto/find-all-profile.dto';
import { findByIdProfileResponseSchema } from '@/profile/dto/find-by-id-profile.dto';
import { findByTagGroupsProfileResponseSchema } from '@/profile/dto/find-by-tag-groups-profile.dto';
import { findByTagsProfileResponseSchema } from '@/profile/dto/find-by-tags-profile.dto';
import { VisibleTagsType } from '@/shared/decorators/visible-tags.decorator';
import { Injectable } from '@nestjs/common';
import z from 'zod';
import { Tag, TagGroup } from '~/types';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(
    visibleTags: VisibleTagsType,
  ): Promise<z.infer<typeof findAllProfileResponseSchema>> {
    const profiles = await this.prisma.profile.findMany({
      where: {
        isInTrash: false,
        tags: {
          some: {
            id: { in: visibleTags },
          },
        },
      },
      include: {
        tags: {
          include: {
            group: {
              select: {
                color: true,
                isExclusive: true,
              },
            },
          },
        },
      },
    });

    return { profiles };
  }

  async findById(
    id: string,
    visibleTags: VisibleTagsType,
  ): Promise<z.infer<typeof findByIdProfileResponseSchema>> {
    const profile = await this.prisma.profile.findUnique({
      where: {
        id: id,
        tags: {
          some: {
            id: { in: visibleTags },
          },
        },
      },
      include: {
        tags: {
          include: {
            group: {
              select: {
                id: true,
                color: true,
                isExclusive: true,
              },
            },
          },
        },
        residenceLocation: true,
        birthLocation: true,
      },
    });

    return profile!;
  }

  async findByTags(
    tagsId: Tag['id'][],
    visibleTags: VisibleTagsType,
  ): Promise<z.infer<typeof findByTagsProfileResponseSchema>> {
    const profiles = await this.prisma.profile.findMany({
      where: {
        isInTrash: false,
        AND: [
          {
            tags: {
              some: {
                id: { in: tagsId },
              },
            },
          },
          {
            tags: {
              some: {
                id: { in: visibleTags },
              },
            },
          },
        ],
      },
      include: {
        tags: {
          include: {
            group: {
              select: {
                isExclusive: true,
              },
            },
          },
        },
      },
    });

    return { profiles };
  }

  async findByTagGroups(
    tagGroups: TagGroup['id'][],
    visibleTags: VisibleTagsType,
  ): Promise<z.infer<typeof findByTagGroupsProfileResponseSchema>> {
    const profiles = await this.prisma.profile.findMany({
      where: {
        isInTrash: false,
        tags: {
          some: {
            id: { in: visibleTags },
            group: {
              id: {
                in: tagGroups,
              },
            },
          },
        },
      },
      include: {
        tags: true,
      },
    });

    return { profiles };
  }
}
