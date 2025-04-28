import { translate } from '@/i18n/translate';
import { PRISMA_SERVICE } from '@/prisma/constants';
import { PrismaService } from '@/prisma/prisma.service';
import {
  CreateProductionDto,
  createProductionResponseSchema,
} from '@/production/dto/create-production.dto';
import {
  UpdateProductionDto,
  updateProductionResponseSchema,
} from '@/production/dto/update-production.dto';
import { ConflictException, Inject, Injectable } from '@nestjs/common';
import z from 'zod';
import {
  Event,
  Production,
  ProductionAffiliationRequest,
  Profile,
} from '~/types/prisma-schema';

@Injectable()
export class ProductionService {
  constructor(@Inject(PRISMA_SERVICE) private prisma: PrismaService) {}

  async createProduction(
    production: CreateProductionDto,
  ): Promise<z.infer<typeof createProductionResponseSchema>> {
    try {
      return await this.prisma.production.create({
        data: production,
        select: {
          created_at: true,
          id: true,
          name: true,
        },
      });
    } catch (error) {
      throw new ConflictException([
        translate('route.production.create.already-exists'),
      ]);
    }
  }

  async getAll(): Promise<
    (Production & {
      administrator: Profile | null;
    })[]
  > {
    return await this.prisma.production.findMany({
      include: {
        administrator: true,
      },
    });
  }

  async getById(id: string): Promise<
    | (CreateProductionDto & {
        administrator: Profile | null;
        affiliationRequests: ProductionAffiliationRequest[];
        events: Event[];
      })
    | null
  > {
    return await this.prisma.production.findUnique({
      where: { id },
      include: {
        administrator: true,
        affiliationRequests: true,
        events: true,
      },
    });
  }

  async deleteProduction(id: string): Promise<Production> {
    return await this.prisma.production.delete({
      where: { id },
    });
  }

  async updateProduction(
    id: Production['id'],
    production: UpdateProductionDto,
  ): Promise<z.infer<typeof updateProductionResponseSchema>> {
    return await this.prisma.production.update({
      where: { id },
      data: production,
    });
  }
}
