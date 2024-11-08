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
    .nullable()
    .refine(
      (value) => {
        if (value === null) return true;
        return validator.isMobilePhone(value);
      },
      {
        message: translate('model.profile.secondaryPhoneNumber.invalid'),
      },
    ),
  fullName: z.string().min(1, {
    message: translate('model.profile.fullName.required'),
  }),
  firstName: z
    .string()
    .min(1, {
      message: translate('model.profile.fullName.required'),
    })
    .nullable(),
  gender: z.string().nullable(),
  birthDate: z.string().pipe(z.coerce.date()).nullable(),
  profilePictureUrl: z
    .string()
    .url({
      message: translate('model.profile.profilePictureUrl.invalid'),
    })
    .nullable(),
  instagram: z.string().nullable(),
  mail: z.string().email().nullable(),
  dni: z.string().nullable(),
  alternativeNames: z.array(z.string()),

  birthLocationId: z.string().uuid().nullable(),
  residenceLocationId: z.string().uuid().nullable(),

  isInTrash: z.boolean(),
  movedToTrashDate: z.date().nullable(),

  created_at: z.date(),
  updated_at: z.date(),
});
