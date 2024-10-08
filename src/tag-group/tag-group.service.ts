import { FindAllWithTagsResponseDto } from '@/exports';
import { PrismaService } from '@/prisma/prisma.service';
import {
  CreateTagGroupDto,
  CreateTagGroupResponseDto,
} from '@/tag-group/dto/create-tag-group.dto';
import { DeleteTagGroupResponseDto } from '@/tag-group/dto/delete-tag-group.dto';
import { FindAllTagGroupResponseDto } from '@/tag-group/dto/find-all-tag-group.dto';
import { FindOneTagGroupResponseDto } from '@/tag-group/dto/find-one-tag-group.dto';
import { UpdateTagGroupResponseDto } from '@/tag-group/dto/update-tag-group.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TagGroupService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateTagGroupDto): Promise<CreateTagGroupResponseDto> {
    return await this.prisma.tagGroup.create({
      data: {
        name: dto.name,
        color: dto.color,
        isExclusive: dto.isExclusive,
      },
    });
  }

  async findAll(): Promise<FindAllTagGroupResponseDto> {
    const tagGroups = await this.prisma.tagGroup.findMany({
      include: {
        tags: true,
      },
    });

    return { tagGroups };
  }

  async findById(id: string): Promise<FindOneTagGroupResponseDto> {
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
    dto: CreateTagGroupDto,
  ): Promise<UpdateTagGroupResponseDto> {
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

  async delete(id: string): Promise<DeleteTagGroupResponseDto> {
    return await this.prisma.tagGroup.delete({
      where: {
        id,
      },
    });
  }

  async findAllWithTags(): Promise<FindAllWithTagsResponseDto> {
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
