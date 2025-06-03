import { Roles } from '@/auth/decorators/rol.decorator';
import { JwtGuard } from '@/auth/guards/jwt.guard';
import { RoleGuard } from '@/auth/guards/role.guard';
import { translate } from '@/i18n/translate';
import { ErrorDto } from '@/shared/errors/errorType';
import { TagGroupService } from '@/tag-group/tag-group.service';
import { TagService } from '@/tag/tag.service';
import {
  Body,
  ConflictException,
  Controller,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiConflictResponse, ApiCreatedResponse } from '@nestjs/swagger';
import z from 'zod';
import { Role } from '~/types';
import {
  CreateDynamicFormDto,
  CreateDynamicFormResponseDto,
  createDynamicFormResponseSchema,
} from './dto/create-dynamic-form.dto';
import { DynamicFormService } from './dynamic-form.service';
@Roles(Role.ADMIN)
@UseGuards(JwtGuard, RoleGuard)
@Controller('dynamic-form')
export class DynamicFormController {
  constructor(
    private readonly dynamicFormService: DynamicFormService,
    private readonly tagGroupService: TagGroupService,
    private readonly tagService: TagService,
  ) {}

  @ApiCreatedResponse({
    description: translate('route.dynamic-form.create.success'),
    type: CreateDynamicFormResponseDto,
  })
  @ApiConflictResponse({
    description: translate('route.dynamic-form.create.conflict'),
    type: ErrorDto,
  })
  @Post('/create')
  async create(
    @Body() createDynamicFormDto: CreateDynamicFormDto,
  ): Promise<z.infer<typeof createDynamicFormResponseSchema>> {
    const exists = await this.dynamicFormService.findByName(
      createDynamicFormDto.name,
    );

    if (exists) {
      throw new ConflictException([
        translate('route.dynamic-form.create.conflict'),
      ]);
    }

    return await this.dynamicFormService.create(createDynamicFormDto);
  }
}
