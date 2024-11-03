import { PrismaService } from '@/prisma/prisma.service';
import { findAllProfileResponseSchema } from '@/profile/dto/find-all-profile.dto';
import { VisibleTagsType } from '@/shared/decorators/visible-tags.decorator';
import { Injectable } from '@nestjs/common';
import z from 'zod';

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
}
