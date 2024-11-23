import { Roles } from '@/auth/decorators/rol.decorator';
import { JwtGuard } from '@/auth/guards/jwt.guard';
import { RoleGuard } from '@/auth/guards/role.guard';
import { translate } from '@/i18n/translate';
import {
  CreateTemplateDto,
  CreateTemplateResponseDto,
  createTemplateResponseSchema,
} from '@/message/dto/create-template.dto';
import { DeleteTemplateResponseDto } from '@/message/dto/delete-template.dto';
import {
  FindTemplateByIdResponseDto,
  findTemplateByIdResponseSchema,
} from '@/message/dto/find-template-by-id.dto';
import {
  FindTemplatesResponseDto,
  findTemplatesResponseSchema,
} from '@/message/dto/find-templates.dto';
import { TemplateMessage } from '@/message/dto/message-types';
import {
  SendMessageToPhoneDto,
  SendMessageToPhoneResponseDto,
} from '@/message/dto/send-message-to-phone.dto';

import {
  SendTemplateToTagsDto,
  SendTemplateToTagsResponseDto,
} from '@/message/dto/send-template-to-tags.dto';
import {
  UpdateTemplateDto,
  updateTemplateResponseSchema,
} from '@/message/dto/update-template-dto';
import { MessageService } from '@/message/message.service';
import { WhatsappService } from '@/message/whatsapp.service';
import { ProfileService } from '@/profile/profile.service';
import { ErrorDto } from '@/shared/errors/errorType';
import {
  Body,
  Controller,
  Delete,
  Get,
  InternalServerErrorException,
  NotFoundException,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
} from '@nestjs/swagger';
import z from 'zod';
import { Role } from '~/types';

@Roles(Role.ADMIN, Role.USER)
@UseGuards(JwtGuard, RoleGuard)
@Controller('message')
export class MessageController {
  constructor(
    private readonly whatsappService: WhatsappService,
    private readonly messageService: MessageService,
    private readonly profileService: ProfileService,
  ) {}

  @ApiCreatedResponse({
    type: CreateTemplateResponseDto,
    description: translate('route.message.create-template.success'),
  })
  @Post('/create-template')
  async createTemplate(
    @Body() createTemplateDto: CreateTemplateDto,
  ): Promise<z.infer<typeof createTemplateResponseSchema>> {
    const res = await this.whatsappService.createTemplate(createTemplateDto);

    return res;
  }

  @ApiOkResponse({
    type: FindTemplatesResponseDto,
    description: translate('route.message.find-templates.success'),
  })
  @Get('/templates')
  async findTemplates(): Promise<z.infer<typeof findTemplatesResponseSchema>> {
    return await this.whatsappService.findTemplates();
  }

  @ApiOkResponse({
    type: FindTemplateByIdResponseDto,
    description: translate('route.message.find-template-by-id.success'),
  })
  @Get('/template/:id')
  async findTemplateById(
    @Param('id') id: string,
  ): Promise<z.infer<typeof findTemplateByIdResponseSchema>> {
    return await this.whatsappService.findTemplateById(id);
  }

  @ApiOkResponse({
    type: UpdateTemplateDto,
    description: translate('route.message.update-template.success'),
  })
  @ApiNotFoundResponse({
    type: ErrorDto,
    description: translate('route.message.update-template.not-found'),
  })
  @Patch('/template/:metaId')
  async updateTemplate(
    @Param('metaId') metaId: string,
    @Body() updateTemplateDto: UpdateTemplateDto,
  ): Promise<z.infer<typeof updateTemplateResponseSchema>> {
    const { template } = await this.whatsappService.findTemplateById(metaId);

    if (!template) {
      throw new NotFoundException([
        translate('route.message.update-template.not-found'),
      ]);
    }

    return await this.whatsappService.updateTemplate(
      template.id,
      updateTemplateDto,
    );
  }

  @ApiOkResponse({
    type: DeleteTemplateResponseDto,
    description: translate('route.message.delete-template.success'),
  })
  @ApiNotFoundResponse({
    type: ErrorDto,
    description: translate('route.message.delete-template.not-found'),
  })
  @Delete('/template/:metaId')
  async deleteTemplate(
    @Param('metaId') metaId: string,
  ): Promise<DeleteTemplateResponseDto> {
    const { template } = await this.whatsappService.findTemplateById(metaId);

    if (!template) {
      throw new NotFoundException([
        translate('route.message.delete-template.not-found'),
      ]);
    }

    return await this.whatsappService.deleteTemplate(metaId);
  }

  @ApiInternalServerErrorResponse({
    type: ErrorDto,
    description: translate('route.message.send-message-to-phone.error'),
  })
  @ApiOkResponse({
    type: SendMessageToPhoneResponseDto,
    description: translate('route.message.send-message-to-phone.success'),
  })
  @Post('/send-message-to-phone')
  async sendMessageToPhone(
    @Body() sendMessageToPhoneDto: SendMessageToPhoneDto,
  ): Promise<SendMessageToPhoneResponseDto> {
    const { messageId } = await this.whatsappService.sendMessageToPhone(
      sendMessageToPhoneDto,
    );

    try {
      await this.messageService.createMessage({
        messageId,
        text: sendMessageToPhoneDto.message,
        phoneTo: sendMessageToPhoneDto.phone,
      });

      return { success: true };
    } catch (e) {
      console.error(e);
      throw new InternalServerErrorException([
        translate('route.message.send-message-to-phone.error'),
      ]);
    }
  }

  @ApiOkResponse({
    type: SendTemplateToTagsResponseDto,
    description: translate('route.message.send-template-to-tags.success'),
  })
  @Post('/send-template-to-tags')
  async sendTemplateToTags(
    @Body() sendTemplateToTagsDto: SendTemplateToTagsDto,
  ): Promise<SendTemplateToTagsResponseDto> {
    const phones = await this.profileService.findPhonesByTags(
      sendTemplateToTagsDto.tags,
    );

    const messagesToCreate: TemplateMessage[] = [];

    await Promise.all(
      phones.map(async (phone) => {
        const { messageId } = await this.whatsappService.sendTemplateToPhone({
          phone,
          templateName: sendTemplateToTagsDto.templateName,
        });

        messagesToCreate.push({
          id: messageId,
          templateName: sendTemplateToTagsDto.templateName,
          timestamp: new Date().getTime().toString(),
          type: 'template',
          to: phone,
        });
      }),
    );

    await this.messageService.createTemplateMessages(messagesToCreate);

    return { success: true };
  }
}
