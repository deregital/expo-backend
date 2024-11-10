import { PRISMA_SERVICE } from '@/prisma/constants';
import {
  CreateCannedResponseDto,
  createCannedResponseResponseSchema,
} from './dto/create-canned-response.dto';
import { deleteCannedResponseResponseSchema } from './dto/delete-canned-response.dto';
import { getAllCannedResponseResponseSchema } from './dto/get-all-canned-response.dto';
import {
  UpdateCannedResponseDto,
  updateCannedResponseResponseSchema,
} from './dto/update-canned-response.dto';

import { PrismaService } from '@/prisma/prisma.service';
import { Inject, Injectable } from '@nestjs/common';
import z from 'zod';

@Injectable()
export class CannedResponseService {
  constructor(@Inject(PRISMA_SERVICE) private readonly prisma: PrismaService) {}

  async createCannedResponse(
    dto: CreateCannedResponseDto,
  ): Promise<z.infer<typeof createCannedResponseResponseSchema>> {
    return await this.prisma.cannedResponse.create({
      data: {
        name: dto.name,
        content: dto.content,
      },
    });
  }

  async getAllCannedResponses(): Promise<
    z.infer<typeof getAllCannedResponseResponseSchema>
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
  ): Promise<z.infer<typeof updateCannedResponseResponseSchema>> {
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
    return deletedResponse;
  }
}
