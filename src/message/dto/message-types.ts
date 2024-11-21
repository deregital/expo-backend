import { Components } from '@/message/dto/template.dto';
import { TemplateCategory, TemplateStatus } from '~/types';

export type MessageJson = {
  id: string;
  timestamp: string;
  to?: string;
  from?: string;
  type: 'text' | 'template';
};

export type TextMessage = MessageJson & {
  type: 'text';
  text: {
    body: string;
  };
};

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
