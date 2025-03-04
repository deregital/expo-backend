import { translate } from '@/i18n/translate';
import {
  CreateTemplateDto,
  createTemplateResponseSchema,
} from '@/message/dto/create-template.dto';
import { DeleteTemplateResponseDto } from '@/message/dto/delete-template.dto';
import { findTemplateByIdResponseSchema } from '@/message/dto/find-template-by-id.dto';
import {
  FindTemplatesResponseDto,
  findTemplatesResponseSchema,
} from '@/message/dto/find-templates.dto';
import { GetTemplateResponse } from '@/message/dto/message.dto';
import { SendMessageToPhoneDto } from '@/message/dto/send-message-to-phone.dto';
import {
  Components,
  type Buttons,
  type TemplateType,
} from '@/message/dto/template.dto';
import {
  UpdateTemplateDto,
  updateTemplateResponseSchema,
} from '@/message/dto/update-template.dto';
import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
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
      language: 'es_AR',
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
      `https://graph.facebook.com/v21.0/${process.env.META_WHATSAPP_BUSINESS_ID}/message_templates?name=${id}`,
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

  async updateTemplate(
    metaId: string,
    dto: UpdateTemplateDto,
  ): Promise<z.infer<typeof updateTemplateResponseSchema>> {
    const content: {
      components: Components[];
    } = {
      components: [
        {
          type: 'BODY',
          text: `${dto.content}`,
        },
      ],
    };

    const buttons_json: Buttons = {
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
          buttons_json.buttons.push(each_button);
        }
      });
    }
    if (buttons_json.buttons.length > 0) {
      content.components.push(buttons_json);
    }

    const res: {
      success: boolean;
    } = await fetch(`https://graph.facebook.com/v21.0/${metaId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.META_TOKEN}`,
      },
      body: JSON.stringify(content),
    }).then((res) => res.json());
    if (res.success === true) {
      return res;
    } else {
      throw new BadRequestException([
        translate('route.message.update-template.error'),
      ]);
    }
  }

  async deleteTemplate(metaId: string): Promise<DeleteTemplateResponseDto> {
    const res = await fetch(
      `https://graph.facebook.com/v21.0/${process.env.META_WHATSAPP_BUSINESS_ID}/message_templates?name=${metaId}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${process.env.META_TOKEN}`,
        },
      },
    ).then((res) => res.json());

    if (res.success === true) {
      return res;
    } else {
      throw new BadRequestException([
        translate('route.message.delete-template.error'),
      ]);
    }
  }

  async sendMessageToPhone({ phone, message }: SendMessageToPhoneDto): Promise<{
    messageId: string;
  }> {
    const res = await fetch(
      `https://graph.facebook.com/v21.0/${process.env.META_WHATSAPP_API_PHONE_NUMBER_ID}/messages`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.META_TOKEN}`,
        },
        body: JSON.stringify({
          messaging_product: 'whatsapp',
          to: `${phone}`,
          type: 'text',
          recipient_type: 'individual',
          text: {
            body: `${message}`,
          },
        }),
      },
    );

    if (!res.ok) {
      throw new InternalServerErrorException([
        translate('route.message.send-message-to-phone.error'),
      ]);
    }

    const resJson = await res.json();
    const messageId = (
      resJson as {
        messages: { id: string }[];
      }
    ).messages[0]?.id;

    if (!messageId) {
      throw new InternalServerErrorException([
        translate('route.message.send-message-to-phone.error'),
      ]);
    }

    return {
      messageId,
    };
  }

  async sendTemplateToPhone({
    templateName,
    phone,
    isOTP = false,
    OTP,
  }:
    | {
        templateName: string;
        phone: string;
        isOTP?: false; // Optional, defaults to false
        OTP?: never; // Cannot be provided if isOTP is false
      }
    | {
        templateName: string;
        phone: string;
        isOTP: true; // Required if OTP is provided
        OTP: string; // Required if isOTP is true
      }): Promise<{
    messageId: string;
  }> {
    const res = await fetch(
      `https://graph.facebook.com/v21.0/${process.env.META_WHATSAPP_API_PHONE_NUMBER_ID}/messages`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.META_TOKEN}`,
        },
        body: JSON.stringify({
          messaging_product: 'whatsapp',
          to: `${phone}`,
          type: 'template',
          template: {
            name: `${templateName}`,
            language: {
              code: 'es_AR',
            },
            ...(isOTP && {
              components: [
                {
                  type: 'body',
                  parameters: [{ type: 'text', text: OTP }],
                },
                {
                  type: 'button',
                  sub_type: 'url',
                  index: '0',
                  parameters: [
                    {
                      type: 'text',
                      text: OTP,
                    },
                  ],
                },
              ],
            }),
          },
        }),
      },
    );

    if (!res.ok) {
      throw new InternalServerErrorException([
        translate('route.message.send-message-to-phone.error'),
      ]);
    }

    const resJson: { messages: [{ id: string }] } = await res.json();

    return { messageId: resJson.messages[0].id };
  }

  async sendAutomaticResponse({
    phone,
    name,
  }: {
    phone: string;
    name: string;
  }): Promise<{
    messageId: string;
    text: string;
  }> {
    const message = translate('route.webhook.send-automatic-response', {
      name,
    });

    const { messageId } = await this.sendMessageToPhone({
      phone,
      message,
    });

    return {
      messageId,
      text: message,
    };
  }

  async sendOTP(phone: string, code: string): Promise<void> {
    const { messageId } = await this.sendTemplateToPhone({
      phone,
      templateName: 'otp_auth',
      isOTP: true,
      OTP: code,
    });

    if (!messageId) {
      throw new InternalServerErrorException([
        translate('route.otp.send.error'),
      ]);
    }
  }
}
