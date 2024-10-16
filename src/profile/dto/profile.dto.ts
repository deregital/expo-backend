import { translate } from '@/i18n/translate';
import validator from 'validator';
import z from 'zod';

export const profileSchema = z.object({
  id: z.string().uuid({
    message: translate('model.profile.id.uuid'),
  }),
  shortId: z.number(),

  phoneNumber: z
    .string()
    .min(1, {
      message: translate('model.profile.phoneNumber.required'),
    })
    .refine(validator.isMobilePhone, {
      message: translate('model.profile.phoneNumber.invalid'),
    }),
  secondaryPhoneNumber: z
    .string()
    .optional()
    .refine(validator.isMobilePhone, {
      message: translate('model.profile.secondaryPhoneNumber.invalid'),
    }),
  fullName: z.string().min(1, {
    message: translate('model.profile.fullName.required'),
  }),
  firstName: z.string().min(1, {
    message: translate('model.profile.fullName.required'),
  }),
  gender: z.string().optional(),
  birthDate: z.date().optional(),
  profilePictureUrl: z
    .string()
    .url({
      message: translate('model.profile.profilePictureUrl.invalid'),
    })
    .optional(),
  instagram: z.string().optional(),
  mail: z.string().email().optional(),
  dni: z.string().optional(),
  alternativeNames: z.array(z.string()).optional(),

  birthLongitude: z.number().min(-180).max(180).optional(),
  birthLatitude: z.number().min(-90).max(90).optional(),

  residenceLongitude: z.number().min(-180).max(180).optional(),
  residenceLatitude: z.number().min(-90).max(90).optional(),

  isInTrash: z.boolean(),
  movedToTrashDate: z.date().optional(),

  created_at: z.date(),
  updated_at: z.date(),
});
