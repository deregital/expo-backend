import { translate } from '@/i18n/translate';
import { ErrorDto } from '@/shared/errors/errorType';
import { ExistingRecord } from '@/shared/validation/checkExistingRecord';
import { TagGroupService } from '@/tag-group/tag-group.service';
import { TagService } from '@/tag/tag.service';
import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  GoneException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOkResponse,
} from '@nestjs/swagger';
import z from 'zod';
import { TagType } from '~/types';
import {
  CreateRoleDto,
  CreateRoleResponseDto,
  createRoleResponseSchema,
} from './dto/create-role.dto';
import {
  DeleteRoleResponseDto,
  deleteRoleResponseSchema,
} from './dto/delete-role.dto';
import {
  FindAllRoleResponseDto,
  findAllRoleResponseSchema,
} from './dto/find-all.dto';
import {
  UpdateRoleDto,
  UpdateRoleResponseDto,
  updateRoleResponseSchema,
} from './dto/update-role.dto';
import { RoleService } from './role.service';

@Controller('role')
export class RoleController {
  constructor(
    private readonly tagService: TagService,
    private readonly tagGroupService: TagGroupService,
    private readonly roleService: RoleService,
  ) {}

  @ApiOkResponse({
    description: translate('route.role.all.success'),
    type: FindAllRoleResponseDto,
  })
  @Get('/all')
  async findAll(): Promise<z.infer<typeof findAllRoleResponseSchema>> {
    return this.roleService.findAll();
  }

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
        translate('route.role.create.already-exists', {
          roleName: createRoleDto.name,
        }),
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

  @ApiOkResponse({
    description: translate('route.role.update.success'),
    type: UpdateRoleResponseDto,
  })
  @Patch('/:id')
  async update(
    @Param('id', new ExistingRecord('tag')) id: string,
    @Body() updateRoleDto: UpdateRoleDto,
  ): Promise<z.infer<typeof updateRoleResponseSchema>> {
    return await this.roleService.update(id, updateRoleDto);
  }

  @ApiOkResponse({
    description: translate('route.role.delete.success'),
    type: DeleteRoleResponseDto,
  })
  @Delete('/:id')
  async delete(
    @Param('id', new ExistingRecord('tag')) id: string,
  ): Promise<z.infer<typeof deleteRoleResponseSchema>> {
    return this.roleService.delete(id);
  }
}
