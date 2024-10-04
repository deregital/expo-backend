import { PrismaService } from '@/prisma/prisma.service';
import {
  ArgumentMetadata,
  Injectable,
  NotFoundException,
  PipeTransform,
} from '@nestjs/common';
import { Prisma, PrismaClient } from '~/types/prisma-schema';

export type PrismaModels = {
  [M in Prisma.ModelName]: Exclude<
    Awaited<ReturnType<PrismaClient[Uncapitalize<M>]['findUnique']>>,
    null
  >;
};

type FindUniqueFunction = {
  findUnique: (where: Prisma.TagFindUniqueArgs) => Promise<{
    id: string;
  }>;
};

type GenericArgumentMetadata<T> = ArgumentMetadata & {
  data: T;
};

@Injectable()
export class ExistingRecord
  implements PipeTransform<Capitalize<Prisma.ModelName>>
{
  constructor(
    private readonly modelName: Uncapitalize<Prisma.ModelName>,
    private readonly prisma: PrismaService = new PrismaService(),
  ) {}

  async transform<T extends Capitalize<Prisma.ModelName>>(
    value: string,
    metadata: GenericArgumentMetadata<T>,
  ): Promise<string> {
    if (!metadata.data) {
      throw new Error('Metadata data is required');
    }

    const record = await (
      this.prisma[this.modelName] as unknown as FindUniqueFunction
    ).findUnique({
      where: {
        id: value,
      },
    });

    if (!record) {
      throw new NotFoundException('Record not found');
    }

    return value;
  }
}
