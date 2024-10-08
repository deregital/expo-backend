import { DeleteTagResponseDto } from '@/tag/dto/delete-tag.dto';
import { FindOneTagResponseDto } from '@/tag/dto/find-one-tag.dto';
import { PrismaService } from '@/prisma/prisma.service';
import { CreateTagDto, CreateTagResponseDto } from '@/tag/dto/create-tag.dto';
import { FindAllTagResponseDto } from '@/tag/dto/find-all-tag.dto';
import { UpdateTagDto, UpdateTagResponseDto } from '@/tag/dto/update-tag.dto';
import { Injectable } from '@nestjs/common';
import { Tag } from '~/types/prisma-schema';
import { FindByGroupTagResponseDto } from '@/tag/dto/find-by-group-tag.dto';

@Injectable()
export class TagService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateTagDto): Promise<CreateTagResponseDto> {
    return await this.prisma.tag.create({
      data: {
        name: dto.name,
        group: {
          connect: {
            id: dto.groupId,
          },
        },
      },
    });
  }

  async findAll(): Promise<FindAllTagResponseDto> {
    return {
      tags: await this.prisma.tag.findMany({
        include: {
          group: true,
        },
      }),
    };
  }

  async findById(id: Tag['id']): Promise<FindOneTagResponseDto> {
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
    updateTagDto: UpdateTagDto,
  ): Promise<UpdateTagResponseDto> {
    return await this.prisma.tag.update({
      where: {
        id: id,
      },
      data: {
        name: updateTagDto.name,
        group: {
          connect: {
            id: updateTagDto.groupId,
          },
        },
      },
    });
  }

  async remove(id: string): Promise<DeleteTagResponseDto> {
    return await this.prisma.tag.delete({
      where: {
        id: id,
      },
    });
  }

  async findByGroup(groupId: string): Promise<FindByGroupTagResponseDto> {
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
}
