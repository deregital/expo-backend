import { translate } from '@/i18n/translate';
import { Components } from '@/message/dto/template.dto';
import z from 'zod';
import {
  MessageState,
  type TemplateCategory,
  type TemplateStatus,
} from '~/types/prisma-schema';

const whatsappMessageSchema = z.object({
  id: z.string(),
  // from or to are exclusive
  from: z.string().optional(),
  to: z.string().optional(),
  timestamp: z.string(),
});

const textMessageSchema = whatsappMessageSchema.merge(
  z.object({
    text: z.object({
      body: z.string(),
    }),
  }),
);

const templateMessageSchema = whatsappMessageSchema.merge(
  z.object({
    templateName: z.string(),
  }),
);

export const jsonMessage = z.discriminatedUnion('type', [
  textMessageSchema.extend({ type: z.literal('text') }),
  templateMessageSchema.extend({ type: z.literal('template') }),
]);

export type JsonMessage = z.infer<typeof jsonMessage>;

export const messageSchema = z.object({
  id: z.string().uuid({
    message: translate('model.message.id.uuid'),
  }),
  wamId: z.string(),
  message: jsonMessage,
  state: z.nativeEnum(MessageState),

  created_at: z.date(),
  updated_at: z.date(),
});

export type MessageJson = {
  id: string;
  timestamp: string;
  to?: string;
  from?: string;
} & (
  | {
      type: 'text';
      text: {
        body: string;
      };
    }
  | {
      type: 'template';
      templateName: string;
    }
);

export type TemplateMessage = MessageJson & {
  type: 'template';
  templateName: string;
};

export type GetTemplateResponse = {
  data: {
    name: string;
    components: Components[];
    language: string;
    status: TemplateStatus;
    category: TemplateCategory;
    id: string;
  }[];
};
