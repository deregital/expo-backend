import { translate } from '@/i18n/translate';
import { ErrorDto } from '@/shared/errors/errorType';
import { TagGroupService } from '@/tag-group/tag-group.service';
import { TagService } from '@/tag/tag.service';
import {
  BadRequestException,
  Body,
  Controller,
  Get,
  GoneException,
  Post,
} from '@nestjs/common';
import { ApiBadRequestResponse, ApiCreatedResponse } from '@nestjs/swagger';
import z from 'zod';
import { Tag, TagType } from '~/types';
import {
  CreateRoleDto,
  CreateRoleResponseDto,
  createRoleResponseSchema,
} from './dto/create-role.dto';
import { RoleService } from './role.service';

@Controller('role')
export class RoleController {
  constructor(
    private readonly tagService: TagService,
    private readonly tagGroupService: TagGroupService,
    private readonly roleService: RoleService,
  ) {}

  @Get('/all')
  async findAll(): Promise<Tag[] | null> {
    return this.roleService.findAll();
  }
  // Promise<z.infer<typeof createTagResponseSchema>>
  @ApiCreatedResponse({
    description: translate('route.role.create.success'),
    type: CreateRoleResponseDto,
  })
  @ApiBadRequestResponse({
    description: translate('route.role.create.already-exists'),
    type: ErrorDto,
  })
  @Post('/')
  async create(
    @Body() createRoleDto: CreateRoleDto,
  ): Promise<z.infer<typeof createRoleResponseSchema>> {
    const existsGroup = await this.roleService.existsRoleGroup();

    //Validate, name cannotreapeat
    const existsRole = await this.roleService.existsRole(createRoleDto.name);

    if (existsRole) {
      throw new BadRequestException(
        translate('route.role.create.already-exists'),
      );
    }

    if (!existsGroup) {
      const newRoleGroup = await this.tagGroupService.create({
        name: 'Roles',
        color: '#11111',
        isExclusive: false,
      });

      await this.tagService.create({
        name: translate('prisma.role.production'),
        groupId: newRoleGroup.id,
        type: TagType.PRODUCTION_ROLE,
      });
    }

    const groupId = await this.roleService.findGroupId();

    console.log(groupId);
    if (!groupId) {
      throw new GoneException();
    }

    const newTag = await this.tagService.create({
      name: createRoleDto.name,
      groupId,
      type: TagType.PARTICIPANT_ROLE,
    });

    return newTag;
  }
}
