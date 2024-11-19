import { translate } from '@/i18n/translate';
import { PRISMA_SERVICE } from '@/prisma/constants';
import { PrismaService, TableNames } from '@/prisma/prisma.service';
import {
  ArgumentMetadata,
  Injectable,
  NotFoundException,
  PipeTransform,
} from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { Prisma } from '~/types/prisma-schema';

type FindUniqueFunction = {
  findUnique: (where: Prisma.TagFindUniqueArgs) => Promise<{
    id: string;
  }>;
};

type GenericArgumentMetadata<T> = ArgumentMetadata & {
  data: T;
};

@Injectable()
export class ExistingRecord<Models extends TableNames>
  implements PipeTransform<Capitalize<Models>>
{
  private static moduleRef: ModuleRef;
  private prisma: PrismaService;
  private modelName: Uncapitalize<Models>;

  constructor(modelName: Uncapitalize<Models>) {
    this.modelName = modelName;
  }

  static registerModuleRef(moduleRef: ModuleRef): void {
    ExistingRecord.moduleRef = moduleRef;
  }

  private getPrismaService(): PrismaService {
    if (!this.prisma) {
      // Cache the PrismaService instance after the first retrieval
      this.prisma = ExistingRecord.moduleRef.get<PrismaService>(
        PRISMA_SERVICE,
        {
          strict: false,
        },
      );
    }
    return this.prisma;
  }

  async transform<T extends Capitalize<Models>>(
    value: string,
    metadata: GenericArgumentMetadata<T>,
  ): Promise<string> {
    if (!metadata.data) {
      throw new Error('Metadata data is required');
    }

    const prisma = this.getPrismaService();

    const record = await (
      prisma.getTable(this.modelName) as unknown as FindUniqueFunction
    ).findUnique({
      where: { id: value },
    });

    if (!record) {
      throw new NotFoundException([
        translate('prisma.not-found', {
          field: 'id',
          model: translate(`prisma.model.${this.modelName}`),
          value,
        }),
      ]);
    }

    return value;
  }
}
