import { locationSchema } from '@/location/dto/location.dto';
import { profileSchema } from '@/prisma/dtos.dto';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { tagGroupSchema } from '@/tag-group/dto/tag-group.dto';
import { tagSchema } from '@/tag/dto/tag.dto';
import z from 'zod';

export const findByIdProfileResponseSchema = profileSchema.merge(
  z.object({
    residenceLocation: locationSchema.nullable(),
    birthLocation: locationSchema.nullable(),
    tags: z.array(
      tagSchema.merge(
        z.object({
          group: tagGroupSchema.pick({
            id: true,
            color: true,
            isExclusive: true,
          }),
        }),
      ),
    ),
  }),
);

export class FindByIdProfileResponseDto extends createZodDtoWithoutDate(
  findByIdProfileResponseSchema,
) {}
