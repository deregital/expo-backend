import { CreateCannedResponseDto } from './dto/create-cannedResponse.dto';
import { deleteCannedResponseResponseSchema } from './dto/delete-cannedResponse.dto';
import { UpdateCannedResponseDto } from './dto/update-cannedResponse.dto';

import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import z from 'zod';
import { Account, CannedResponse, getAllCannedResponseSchema } from '~/types';

@Injectable()
export class CannedResponseService {
  constructor(private readonly prisma: PrismaService) {}

  async createCannedResponse(
    dto: CreateCannedResponseDto,
    accountId: Account['id'],
  ): Promise<CannedResponse> {
    return await this.prisma.cannedResponse.create({
      data: {
        name: dto.name,
        content: dto.content,
      },
    });
  }

  async getAllCannedResponses(): Promise<
    z.infer<typeof getAllCannedResponseSchema>
  > {
    const cannedResponses = await this.prisma.cannedResponse.findMany({
      orderBy: {
        created_at: 'desc',
      },
    });

    return { cannedResponses };
  }

  async updateCannedResponse(
    id: string,
    dto: UpdateCannedResponseDto,
  ): Promise<CannedResponse> {
    return await this.prisma.cannedResponse.update({
      where: { id },
      data: {
        name: dto.name,
        content: dto.content,
      },
    });
  }

  async deleteCannedResponse(
    id: string,
  ): Promise<z.infer<typeof deleteCannedResponseResponseSchema>> {
    const deletedResponse = await this.prisma.cannedResponse.delete({
      where: { id },
    });
    return {
      id: deletedResponse.id,
      name: deletedResponse.name,
      content: deletedResponse.content,
      created_at: deletedResponse.created_at,
      updated_at: deletedResponse.updated_at,
    };
  }
}
