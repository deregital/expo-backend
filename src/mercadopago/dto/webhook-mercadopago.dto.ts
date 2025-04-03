import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import z from 'zod';

export const webhookSchema = z.object({
  data: z.object({
    id: z.string(),
  }),
  action: z.string(),
  api_version: z.string(),
  date_created: z.string(),
  id: z.string(),
  live_mode: z.boolean(),
  type: z.string(),
  user_id: z.number(),
});

export class WebhookDto extends createZodDtoWithoutDate(webhookSchema) {}
