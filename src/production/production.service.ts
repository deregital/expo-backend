import { PRISMA_SERVICE } from '@/prisma/constants';
import { PrismaService } from '@/prisma/prisma.service';
import {
  CreateProductionDto,
  createProductionResponseSchema,
} from '@/production/dto/create-production.dto';
import { Inject, Injectable } from '@nestjs/common';
import z from 'zod';

@Injectable()
export class ProductionService {
  constructor(@Inject(PRISMA_SERVICE) private prisma: PrismaService) {}

  async createProduction(
    production: CreateProductionDto,
  ): Promise<z.infer<typeof createProductionResponseSchema>> {
    return await this.prisma.production.create({
      data: production,
      select: {
        created_at: true,
        id: true,
        name: true,
      },
    });
  }
}
