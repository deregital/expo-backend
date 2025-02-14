import { translate } from '@/i18n/translate';
import parsePhoneNumber, {
  type PhoneNumber,
  isValidPhoneNumber,
} from 'libphonenumber-js';
import z from 'zod';

function formatArgNumber(phoneNumber: PhoneNumber, value: string): string {
  const prefixes9 = ['11', '15'];
  const prefix = prefixes9.includes(
    phoneNumber?.nationalNumber?.slice(0, 2) ?? '',
  )
    ? '9'
    : '';
  if (phoneNumber?.country === 'AR') {
    return `${phoneNumber.countryCallingCode}${prefix}${phoneNumber.nationalNumber}`;
  }
  return value;
}

export const profileSchema = z.object({
  id: z.string().uuid({
    message: translate('model.profile.id.uuid'),
  }),
  shortId: z.number(),

  firstTimeMiExpo: z.boolean(),

  username: z.string().nullable(),
  password: z.string().nullable(), // ver constrains

  phoneNumber: z
    .string()
    .min(1, {
      message: translate('model.profile.phoneNumber.required'),
    })
    .refine((value) => isValidPhoneNumber(value, 'AR'), {
      message: translate('model.profile.phoneNumber.invalid'),
    })

    .transform((value, ctx) => {
      if (!value) return value;
      const phoneNumber = parsePhoneNumber(value, {
        defaultCountry: 'AR',
      });
      if (!phoneNumber) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: translate('model.profile.phoneNumber.invalid'),
        });
        return value;
      }
      return formatArgNumber(phoneNumber, value);
    }),
  isPhoneVerified: z.boolean(),

  secondaryPhoneNumber: z
    .string()
    .nullable()
    .refine(
      (value) => {
        if (value === null) return true;
        return isValidPhoneNumber(value, 'AR');
      },
      {
        message: translate('model.profile.secondaryPhoneNumber.invalid'),
      },
    )
    .transform((value, ctx) => {
      if (!value) return value;
      const phoneNumber = parsePhoneNumber(value, {
        defaultCountry: 'AR',
      });
      if (!phoneNumber) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: translate('model.profile.phoneNumber.invalid'),
        });
        return value;
      }
      return formatArgNumber(phoneNumber, value);
    }),
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
  mail: z
    .string()
    .email({
      message: translate('model.profile.mail.invalid'),
    })
    .nullable(),
  dni: z.string().nullable(),
  alternativeNames: z.array(z.string()),

  birthLocationId: z.string().uuid().nullable(),
  residenceLocationId: z.string().uuid().nullable(),

  isInTrash: z.boolean(),
  movedToTrashDate: z.coerce.date().nullable(),

  created_at: z.date(),
  updated_at: z.date(),
});
