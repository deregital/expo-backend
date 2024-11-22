import { translate } from '@/i18n/translate';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { z } from 'zod';

export const imageSchema = z.object({
  id: z.string().uuid({
    message: translate('model.image.id.uuid'),
  }),
  url: z.string().url({
    message: translate('model.image.url.url'),
  }),
});

export class ImageDto extends createZodDtoWithoutDate(imageSchema) {}
