import { Roles } from '@/auth/decorators/rol.decorator';
import { translate } from '@/i18n/translate';
import { ErrorDto } from '@/shared/errors/errorType';
import { ExistingRecord } from '@/shared/validation/checkExistingRecord';
import { TagGroupService } from '@/tag-group/tag-group.service';
import { TagService } from '@/tag/tag.service';
import {
  BadRequestException,
  Body,
  ConflictException,
  Controller,
  Delete,
  Get,
  GoneException,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
} from '@nestjs/swagger';
import z from 'zod';
import { Role, TagType } from '~/types';
import {
  AllocateParticipantRoleDto,
  AllocateParticipantRoleResponseDto,
  allocateParticipantRoleResponseSchema,
} from './dto/allocate-participant-role.dto';
import {
  AllocateProductionRoleResponseDto,
  allocateProductionRoleResponseSchema,
} from './dto/allocate-production-role.dto';
import {
  CreateRoleDto,
  CreateRoleResponseDto,
  createRoleResponseSchema,
} from './dto/create-role.dto';
import {
  DeallocateAllRoleResponseDto,
  deallocateAllRoleResponseSchema,
} from './dto/deallocate-all-role.dto';
import {
  DeleteRoleResponseDto,
  deleteRoleResponseSchema,
} from './dto/delete-role.dto';
import {
  FindAllRoleResponseDto,
  findAllRoleResponseSchema,
} from './dto/find-all-role.dto';
import {
  UpdateRoleDto,
  UpdateRoleResponseDto,
  updateRoleResponseSchema,
} from './dto/update-role.dto';
import { RoleService } from './role.service';

@Roles(Role.ADMIN)
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
  @Post('/create')
  async create(
    @Body() createRoleDto: CreateRoleDto,
  ): Promise<z.infer<typeof createRoleResponseSchema>> {
    const existsGroup = await this.roleService.existsRoleGroup();

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
        color: '#666666',
        isExclusive: false,
      });

      await this.tagService.create({
        name: translate('prisma.role.production'),
        groupId: newRoleGroup.id,
        type: TagType.PRODUCTION_ROLE,
      });
    }

    const groupId = await this.roleService.findGroupId();

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
    description: translate('route.role.allocate-participant.success'),
    type: AllocateParticipantRoleResponseDto,
  })
  @ApiConflictResponse({
    description: translate('route.role.allocate-participant.not-accepted'),
    type: ErrorDto,
  })
  @Roles(Role.MI_EXPO)
  @Post('/allocate-participant')
  async allocateParticipant(
    @Body() allocateParticipantRole: AllocateParticipantRoleDto,
  ): Promise<z.infer<typeof allocateParticipantRoleResponseSchema>> {
    const tagIds = await Promise.all(
      allocateParticipantRole.roleIds.map(async (roleId) => {
        const isRole = await this.roleService.existsRoleById(roleId);
        if (!isRole) {
          throw new ConflictException(
            translate('route.role.allocate-participant.not-accepted'),
          );
        }
        return roleId;
      }),
    );

    const profiles = await this.tagService.massiveAllocation({
      tagIds,
      profileIds: [allocateParticipantRole.profileId],
    });

    if (!profiles.profiles[0]) {
      throw new ConflictException(
        translate('route.role.allocate-participant.not-accepted'),
      );
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...profile } = { ...profiles.profiles[0] };

    return profile;
  }

  @ApiOkResponse({
    description: translate('route.role.allocate-production.success'),
    type: AllocateProductionRoleResponseDto,
  })
  @ApiNotFoundResponse({
    description: translate('route.role.allocate-production.not-found'),
    type: ErrorDto,
  })
  @Roles(Role.MI_EXPO)
  @Post('/allocate-production/:id')
  async allocateProduction(
    @Param('id', new ExistingRecord('profile')) profileId: string,
  ): Promise<z.infer<typeof allocateProductionRoleResponseSchema>> {
    const production = await this.roleService.findProductionRole();

    if (!production) {
      throw new NotFoundException(
        translate('route.role.allocate-production.not-found'),
      );
    }
    const profiles = await this.tagService.massiveAllocation({
      tagIds: [production.id],
      profileIds: [profileId],
    });

    if (!profiles.profiles[0]) {
      throw new ConflictException(
        translate('route.role.allocate-production.not-found'),
      );
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...profile } = { ...profiles.profiles[0] };

    return profile;
  }

  @ApiOkResponse({
    description: translate('route.role.deallocate-all.success'),
    type: DeallocateAllRoleResponseDto,
  })
  @ApiBadRequestResponse({
    description: translate('route.role.deallocate-all.no-roles'),
    type: ErrorDto,
  })
  @ApiConflictResponse({
    description: translate('route.role.deallocate-all.no-roles'),
    type: ErrorDto,
  })
  @Post('/deallocate-all/:id')
  async deallocateAll(
    @Param('id', new ExistingRecord('profile')) profileId: string,
  ): Promise<z.infer<typeof deallocateAllRoleResponseSchema>> {
    const roleIdsObject =
      await this.roleService.findAllRolesByProfileId(profileId);

    if (!roleIdsObject) {
      throw new BadRequestException(
        translate('route.role.deallocate-all.no-roles'),
      );
    }

    const rolesIds = roleIdsObject.map((role) => role.id);

    const profiles = await this.tagService.massiveDeallocation({
      tagIds: rolesIds,
      profileIds: [profileId],
    });

    if (!profiles.profiles[0]) {
      throw new ConflictException(
        translate('route.role.deallocate-all.not-accepted'),
      );
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...profile } = { ...profiles.profiles[0] };

    return profile;
  }

  @ApiOkResponse({
    description: translate('route.role.update.success'),
    type: UpdateRoleResponseDto,
  })
  @ApiBadRequestResponse({
    description: translate('route.role.update.already-exists'),
    type: ErrorDto,
  })
  @Patch('/:id')
  async update(
    @Param('id', new ExistingRecord('tag')) id: string,
    @Body() updateRoleDto: UpdateRoleDto,
  ): Promise<z.infer<typeof updateRoleResponseSchema>> {
    const existsRole = await this.roleService.existsRole(updateRoleDto.name);

    if (existsRole) {
      throw new BadRequestException(
        translate('route.role.create.already-exists', {
          roleName: updateRoleDto.name,
        }),
      );
    }

    return await this.roleService.update(id, updateRoleDto);
  }

  @ApiOkResponse({
    description: translate('route.role.delete.success'),
    type: DeleteRoleResponseDto,
  })
  @ApiConflictResponse({
    description: translate('route.role.delete.conflict-in-use'),
    type: ErrorDto,
  })
  @Delete('/:id')
  async delete(
    @Param('id', new ExistingRecord('tag')) id: string,
  ): Promise<z.infer<typeof deleteRoleResponseSchema>> {
    const isUsed = await this.roleService.isRoleInUse(id);

    if (isUsed) {
      throw new ConflictException(
        translate('route.role.delete.conflict-in-use'),
      );
    }

    return this.roleService.delete(id);
  }
}
