import { translate } from '@/i18n/translate';
import {
  CreateTemplateDto,
  createTemplateResponseSchema,
} from '@/message/dto/create-template.dto';
import { findTemplateByIdResponseSchema } from '@/message/dto/find-template-by-id.dto';
import {
  FindTemplatesResponseDto,
  findTemplatesResponseSchema,
} from '@/message/dto/find-templates.dto';
import { GetTemplateResponse } from '@/message/dto/message-types';
import { type Buttons, type TemplateType } from '@/message/dto/template.dto';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import z from 'zod';

@Injectable()
export class WhatsappService {
  constructor() {}

  async createTemplate(
    dto: CreateTemplateDto,
  ): Promise<z.infer<typeof createTemplateResponseSchema>> {
    const content: Pick<
      TemplateType,
      'allow_category_change' | 'components' | 'name' | 'category' | 'language'
    > = {
      name: dto.name,
      category: 'UTILITY',
      allow_category_change: true,
      language: 'ES_AR',
      components: [
        {
          type: 'BODY',
          text: dto.content,
        },
      ],
    };

    const buttonsJson: Buttons = {
      buttons: [],
      type: 'BUTTONS',
    };

    if (dto.buttons.length > 0) {
      dto.buttons.forEach((button) => {
        if (button !== '') {
          const each_button = {
            text: `${button}`,
            type: 'QUICK_REPLY',
          } satisfies Buttons['buttons'][number];
          buttonsJson.buttons.push(each_button);
        }
      });
    }
    if (buttonsJson.buttons.length > 0) {
      content.components.push(buttonsJson);
    }

    const res: FindTemplatesResponseDto['templates'][number] = await fetch(
      `https://graph.facebook.com/v21.0/${process.env.META_WHATSAPP_BUSINESS_ID}/message_templates`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.META_TOKEN}`,
        },
        body: JSON.stringify(content),
      },
    ).then((res) => res.json());

    if (res.id) {
      return {
        message: translate('route.message.create-template.success'),
      };
    } else {
      throw new InternalServerErrorException([
        translate('route.message.create-template.error'),
      ]);
    }
  }

  async findTemplates(): Promise<z.infer<typeof findTemplatesResponseSchema>> {
    const res: GetTemplateResponse = await fetch(
      `https://graph.facebook.com/v21.0/${process.env.META_WHATSAPP_BUSINESS_ID}/message_templates?fields=name,status`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${process.env.META_TOKEN}`,
        },
      },
    ).then((res) => res.json());
    return {
      templates: res.data,
    };
  }

  async findTemplateById(
    id: string,
  ): Promise<z.infer<typeof findTemplateByIdResponseSchema>> {
    const res = await fetch(
      `https://graph.facebook.com/v19.0/${process.env.META_WHATSAPP_BUSINESS_ID}/message_templates?name=${id}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${process.env.META_TOKEN}`,
        },
      },
    );

    const template = (
      (await res.json()) as {
        data: Array<z.infer<typeof findTemplateByIdResponseSchema>['template']>;
      }
    ).data[0];

    if (!template) {
      throw new InternalServerErrorException([
        translate('route.message.find-template-by-id.error'),
      ]);
    }

    return { template };
  }
}
