import { translate } from '@/i18n/translate';
import z from 'zod';
import { TemplateCategory, TemplateStatus } from '~/types/prisma-schema';

const buttonsSchema = z.object({
  type: z.literal('BUTTONS'),
  buttons: z.array(
    z.object({
      text: z.string(),
      type: z.literal('QUICK_REPLY'),
    }),
  ),
});

const bodySchema = z.object({
  type: z.literal('BODY'),
  text: z.string(),
});

const componentSchema = z.discriminatedUnion('type', [
  bodySchema,
  buttonsSchema,
]);
export const templateSchema = z.object({
  name: z
    .string()
    .min(1, {
      message: translate('model.template.name.min'),
    })
    .max(512, {
      message: translate('model.template.name.max'),
    })
    .toLowerCase()
    .trim()
    .refine(
      (value) => {
        return /^[a-z_]*$/.test(value);
      },
      {
        message: translate('model.template.name.invalid'),
      },
    ),
  content: z
    .string()
    .max(768, {
      message: translate('model.template.content.max'),
    })
    .min(1, {
      message: translate('model.template.content.min'),
    }),
  buttons: z
    .array(
      z.string().max(20, {
        message: translate('model.template.buttons.max-length'),
      }),
    )
    .max(3, {
      message: translate('model.template.buttons.max'),
    }),
  id: z.string(),
  language: z.string(),
  components: z.array(componentSchema),
  allow_category_change: z.boolean(),
  category: z.nativeEnum(TemplateCategory),
  status: z.nativeEnum(TemplateStatus),
});

export type Buttons = z.infer<typeof buttonsSchema>;
export type TemplateType = z.infer<typeof templateSchema>;
export type Components = z.infer<typeof componentSchema>;
