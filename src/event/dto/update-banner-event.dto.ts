import {
  updateImageResponseSchema,
  updateImageSchema,
} from '@/image/dto/update-image.dto';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';

export const updateBannerEventSchema = updateImageSchema.pick({
  image: true,
});

export class UpdateBannerEventDto extends createZodDtoWithoutDate(
  updateBannerEventSchema,
) {}

export const updateBannerEventResponseSchema = updateImageResponseSchema.pick({
  message: true,
});

export class UpdateBannerEventResponseDto extends createZodDtoWithoutDate(
  updateBannerEventResponseSchema,
) {}
