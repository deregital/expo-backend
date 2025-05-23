import { PRISMA_SERVICE } from '@/prisma/constants';
import { PrismaService } from '@/prisma/prisma.service';
import { Inject, Injectable } from '@nestjs/common';
import {
  Production,
  ProductionAffiliationRequest,
  Profile,
} from '~/types/prisma-schema';
@Injectable()
export class ProductionAffiliationRequestService {
  constructor(@Inject(PRISMA_SERVICE) private prisma: PrismaService) {}

  async create(
    dto: Pick<ProductionAffiliationRequest, 'productionId' | 'profileId'>,
  ): Promise<ProductionAffiliationRequest> {
    return await this.prisma.productionAffiliationRequest.create({
      data: dto,
    });
  }

  async findAll(): Promise<
    (ProductionAffiliationRequest & {
      production: Production;
      profile: Profile;
    })[]
  > {
    return await this.prisma.productionAffiliationRequest.findMany({
      include: {
        production: true,
        profile: true,
      },
    });
  }

  async findById(id: ProductionAffiliationRequest['id']): Promise<
    | (ProductionAffiliationRequest & {
        production: Production;
        profile: Profile;
      })
    | null
  > {
    return await this.prisma.productionAffiliationRequest.findUnique({
      where: {
        id,
      },
      include: {
        production: true,
        profile: true,
      },
    });
  }

  async findByProduction(
    productionId: ProductionAffiliationRequest['productionId'],
  ): Promise<
    (ProductionAffiliationRequest & {
      production: Production;
      profile: Profile;
    })[]
  > {
    return await this.prisma.productionAffiliationRequest.findMany({
      where: {
        productionId,
      },
      include: {
        production: true,
        profile: true,
      },
    });
  }

  async update(
    id: ProductionAffiliationRequest['id'],
    data: Pick<ProductionAffiliationRequest, 'status' | 'reviewedAt'>,
  ): Promise<
    ProductionAffiliationRequest & {
      production: Production;
      profile: Profile;
    }
  > {
    return await this.prisma.productionAffiliationRequest.update({
      where: {
        id,
      },
      data,
      include: {
        production: true,
        profile: true,
      },
    });
  }
}
