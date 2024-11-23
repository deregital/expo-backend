import { Roles } from '@/auth/decorators/rol.decorator';
import { JwtGuard } from '@/auth/guards/jwt.guard';
import { RoleGuard } from '@/auth/guards/role.guard';
import { translate } from '@/i18n/translate';
import {
  CreateTemplateDto,
  CreateTemplateResponseDto,
  createTemplateResponseSchema,
} from '@/message/dto/create-template.dto';
import {
  FindTemplateByIdResponseDto,
  findTemplateByIdResponseSchema,
} from '@/message/dto/find-template-by-id.dto';
import {
  FindTemplatesResponseDto,
  findTemplatesResponseSchema,
} from '@/message/dto/find-templates.dto';
import {
  UpdateTemplateDto,
  updateTemplateResponseSchema,
} from '@/message/dto/update-template-dto';
import { WhatsappService } from '@/message/whatsapp.service';
import { ErrorDto } from '@/shared/errors/errorType';
import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
} from '@nestjs/swagger';
import z from 'zod';
import { Role } from '~/types';

@Roles(Role.ADMIN, Role.USER)
@UseGuards(JwtGuard, RoleGuard)
@Controller('message')
export class MessageController {
  constructor(private readonly whatsappService: WhatsappService) {}

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
}
