import { translate } from '@/i18n/translate';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { z } from 'zod';

export const csvDownloadSchema = z.object({
  password: z
    .string({
      required_error: translate('model.csv.password.required'),
    })
    .min(1, translate('model.csv.password.empty')),
});

export class CsvDownloadDto extends createZodDtoWithoutDate(
  csvDownloadSchema,
) {}
