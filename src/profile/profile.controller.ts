import { Roles } from '@/auth/decorators/rol.decorator';
import { JwtGuard } from '@/auth/guards/jwt.guard';
import { RoleGuard } from '@/auth/guards/role.guard';
import { translate } from '@/i18n/translate';
import {
  FindAllProfileResponseDto,
  findAllProfileResponseSchema,
} from '@/profile/dto/find-all-profile.dto';
import {
  FindByIdProfileResponseDto,
  findByIdProfileResponseSchema,
} from '@/profile/dto/find-by-id-profile.dto';
import {
  FindByTagGroupsProfileResponseDto,
  findByTagGroupsProfileResponseSchema,
} from '@/profile/dto/find-by-tag-groups-profile.dto';
import {
  FindByTagsProfileResponseDto,
  findByTagsProfileResponseSchema,
} from '@/profile/dto/find-by-tags-profile.dto';
import { ProfileService } from '@/profile/profile.service';
import {
  VisibleTags,
  VisibleTagsType,
} from '@/shared/decorators/visible-tags.decorator';
import { ErrorDto } from '@/shared/errors/errorType';
import { ExistingRecord } from '@/shared/validation/checkExistingRecord';
import { TagGroupService } from '@/tag-group/tag-group.service';
import { TagService } from '@/tag/tag.service';
import {
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseArrayPipe,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiNotFoundResponse, ApiOkResponse } from '@nestjs/swagger';
import z from 'zod';
import { Role } from '~/types';

@Roles(Role.ADMIN, Role.USER)
@UseGuards(JwtGuard, RoleGuard)
@Controller('profile')
export class ProfileController {
  constructor(
    private readonly profileService: ProfileService,
    private readonly tagService: TagService,
    private readonly tagGroupService: TagGroupService,
  ) {}

  @ApiOkResponse({
    type: FindAllProfileResponseDto,
    description: translate('route.profile.find-all.success'),
  })
  @Get('/all')
  async findAll(
    @VisibleTags() visibleTags: VisibleTagsType,
  ): Promise<z.infer<typeof findAllProfileResponseSchema>> {
    return await this.profileService.findAll(visibleTags);
  }

  // TODO: all-with-in-chat requires a prisma extension
  @ApiNotFoundResponse({
    description: translate('route.profile.find-by-tag.not-found'),
    type: ErrorDto,
  })
  @ApiOkResponse({
    type: FindByTagsProfileResponseDto,
    description: translate('route.profile.find-by-tag.success'),
  })
  @Get('/find-by-tags')
  async findByTag(
    @Query('tags', new ParseArrayPipe({ items: String, separator: ',' }))
    tagsId: string[],
    @VisibleTags() visibleTags: VisibleTagsType,
  ): Promise<z.infer<typeof findByTagsProfileResponseSchema>> {
    const allTags = (await this.tagService.findAll()).tags;
    if (tagsId.some((tagId) => !allTags.some((tag) => tag.id === tagId))) {
      throw new NotFoundException(
        translate('route.profile.find-by-tag.tags-not-found'),
      );
    }

    return await this.profileService.findByTags(tagsId, visibleTags);
  }

  @ApiNotFoundResponse({
    description: translate('route.profile.find-by-tag-groups.not-found'),
    type: ErrorDto,
  })
  @ApiOkResponse({
    type: FindByTagGroupsProfileResponseDto,
    description: translate('route.profile.find-by-tag-groups.success'),
  })
  @Get('/find-by-tag-groups')
  async findByTagGroups(
    @Query('tagGroups', new ParseArrayPipe({ items: String, separator: ',' }))
    tagGroups: string[],
    @VisibleTags() visibleTags: VisibleTagsType,
  ): Promise<z.infer<typeof findByTagGroupsProfileResponseSchema>> {
    const allTagGroups = (await this.tagGroupService.findAll()).tagGroups;
    if (
      tagGroups.some(
        (tagGroupId) =>
          !allTagGroups.some((tagGroup) => tagGroup.id === tagGroupId),
      )
    ) {
      throw new NotFoundException(
        translate('route.profile.find-by-tag-groups.tag-groups-not-found'),
      );
    }

    return await this.profileService.findByTagGroups(tagGroups, visibleTags);
  }

  @ApiOkResponse({
    type: FindByIdProfileResponseDto,
    description: translate('route.profile.find-by-id.success'),
  })
  @ApiNotFoundResponse({
    description: translate('route.profile.find-by-id.not-found'),
    type: ErrorDto,
  })
  @Get('/:id')
  async findById(
    @Param('id', new ExistingRecord('profile')) id: string,
    @VisibleTags() visibleTags: VisibleTagsType,
  ): Promise<z.infer<typeof findByIdProfileResponseSchema>> {
    return await this.profileService.findById(id, visibleTags);
  }
}
