import { PrismaService } from '@/prisma/prisma.service';
import { CreateTagDto, CreateTagResponseDto } from '@/tag/dto/create-tag.dto';
import { deleteTagResponseSchema } from '@/tag/dto/delete-tag.dto';
import { findAllTagResponseSchema } from '@/tag/dto/find-all-tag.dto';
import { findByGroupTagResponseDto } from '@/tag/dto/find-by-group-tag.dto';
import { findOneTagResponseSchema } from '@/tag/dto/find-one-tag.dto';
import {
  UpdateTagDto,
  updateTagResponseSchema,
} from '@/tag/dto/update-tag.dto';
import { Injectable } from '@nestjs/common';
import z from 'zod';
import { Tag } from '~/types/prisma-schema';

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
    updateTagDto: UpdateTagDto,
  ): Promise<z.infer<typeof updateTagResponseSchema>> {
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

  async remove(id: string): Promise<z.infer<typeof deleteTagResponseSchema>> {
    return await this.prisma.tag.delete({
      where: {
        id: id,
      },
    });
  }

  async findByGroup(
    groupId: string,
  ): Promise<z.infer<typeof findByGroupTagResponseDto>> {
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
