import { translate } from '@/i18n/translate';
import { PrismaService } from '@/prisma/prisma.service';
import {
  ArgumentMetadata,
  Injectable,
  NotFoundException,
  PipeTransform,
} from '@nestjs/common';
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
export class ExistingRecord<Models extends Exclude<Prisma.ModelName, 'Enums'>>
  implements PipeTransform<Capitalize<Models>>
{
  constructor(
    private readonly modelName: Uncapitalize<Models>,
    private readonly prisma: PrismaService = new PrismaService(),
  ) {}

  async transform<T extends Capitalize<Models>>(
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
      throw new NotFoundException(
        translate('prisma.not-found', {
          field: 'id',
          model: translate(`prisma.model.${this.modelName}`),
          value,
        }),
      );
    }

    return value;
  }
}
