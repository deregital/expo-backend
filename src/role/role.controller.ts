import { translate } from '@/i18n/translate';
import { TagGroupService } from '@/tag-group/tag-group.service';
import { TagService } from '@/tag/tag.service';
import { Body, Controller, Get, GoneException, Post } from '@nestjs/common';
import z from 'zod';
import { Tag, TagType } from '~/types';
import { CreateRoleDto, createRoleResponseSchema } from './dto/create-role.dto';
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
  @Post('/')
  async create(
    @Body() createRoleDto: CreateRoleDto,
  ): Promise<z.infer<typeof createRoleResponseSchema>> {
    const existsGroup = await this.roleService.existsRoleGroup();

    //Validate, name cannotreapeat
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
