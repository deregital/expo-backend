import { Roles } from '@/auth/decorators/rol.decorator';
import { JwtGuard } from '@/auth/guards/jwt.guard';
import { RoleGuard } from '@/auth/guards/role.guard';
import { translate } from '@/i18n/translate';
import { ErrorDto } from '@/shared/errors/errorType';
import { ExistingRecord } from '@/shared/validation/checkExistingRecord';
import {
  CreateTagGroupDto,
  CreateTagGroupResponseDto,
  createTagGroupResponseSchema,
} from '@/tag-group/dto/create-tag-group.dto';
import {
  DeleteTagGroupResponseDto,
  deleteTagGroupResponseSchema,
} from '@/tag-group/dto/delete-tag-group.dto';
import {
  FindAllTagGroupResponseDto,
  findAllTagGroupResponseSchema,
} from '@/tag-group/dto/find-all-tag-group.dto';
import {
  FindAllWithTagsResponseDto,
  findAllWithTagsResponseSchema,
} from '@/tag-group/dto/find-all-with-tags.dto';
import {
  FindOneTagGroupResponseDto,
  findOneTagGroupResponseSchema,
} from '@/tag-group/dto/find-one-tag-group.dto';
import {
  UpdateTagGroupDto,
  UpdateTagGroupResponseDto,
  updateTagGroupResponseSchema,
} from '@/tag-group/dto/update-tag-group.dto';
import { TagGroupService } from '@/tag-group/tag-group.service';
import {
  Body,
  Controller,
  Delete,
  Get,
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
import { Role } from '~/types/prisma-schema';

@Roles(Role.ADMIN, Role.USER)
@UseGuards(JwtGuard, RoleGuard)
@Controller('tag-group')
export class TagGroupController {
  constructor(private readonly tagGroupService: TagGroupService) {}

  @ApiCreatedResponse({
    description: translate('route.tag-group.create.success'),
    type: CreateTagGroupResponseDto,
  })
  @Post('/create')
  async create(
    @Body() createTagGroupDto: CreateTagGroupDto,
  ): Promise<z.infer<typeof createTagGroupResponseSchema>> {
    return await this.tagGroupService.create(createTagGroupDto);
  }

  @ApiOkResponse({
    description: translate('route.tag-group.find-all.success'),
    type: FindAllTagGroupResponseDto,
  })
  @Get('/all')
  async findAll(): Promise<z.infer<typeof findAllTagGroupResponseSchema>> {
    return await this.tagGroupService.findAll();
  }

  @ApiOkResponse({
    description: translate('route.tag-group.find-all-with-tags.success'),
    type: FindAllWithTagsResponseDto,
  })
  @Get('/all-with-tags')
  async findAllWithTags(): Promise<
    z.infer<typeof findAllWithTagsResponseSchema>
  > {
    return await this.tagGroupService.findAllWithTags();
  }

  @ApiOkResponse({
    description: translate('route.tag-group.find-one.success'),
    type: FindOneTagGroupResponseDto,
  })
  @ApiNotFoundResponse({
    description: translate('route.tag-group.find-one.not-found'),
    type: ErrorDto,
  })
  @Get('/:id')
  async findById(
    @Param('id', new ExistingRecord('tagGroup')) id: string,
  ): Promise<z.infer<typeof findOneTagGroupResponseSchema>> {
    return await this.tagGroupService.findById(id);
  }

  @ApiOkResponse({
    description: translate('route.tag-group.update.success'),
    type: UpdateTagGroupResponseDto,
  })
  @ApiNotFoundResponse({
    description: translate('route.tag-group.update.not-found'),
    type: ErrorDto,
  })
  @Patch('/:id')
  async update(
    @Param('id', new ExistingRecord('tagGroup')) id: string,
    @Body() dto: UpdateTagGroupDto,
  ): Promise<z.infer<typeof updateTagGroupResponseSchema>> {
    return await this.tagGroupService.update(id, dto);
  }

  @ApiOkResponse({
    description: translate('route.tag-group.delete.success'),
    type: DeleteTagGroupResponseDto,
  })
  @ApiNotFoundResponse({
    description: translate('route.tag-group.delete.not-found'),
    type: ErrorDto,
  })
  @Delete('/:id')
  async delete(
    @Param('id', new ExistingRecord('tagGroup')) id: string,
  ): Promise<z.infer<typeof deleteTagGroupResponseSchema>> {
    return await this.tagGroupService.delete(id);
  }
}
