import {
  Account,
  AccountWithoutPassword,
} from '@/auth/decorators/account.decorator';
import { Roles } from '@/auth/decorators/rol.decorator';
import { JwtGuard } from '@/auth/guards/jwt.guard';
import { RoleGuard } from '@/auth/guards/role.guard';
import { translate } from '@/i18n/translate';
import {
  CreateProfileDto,
  CreateProfileResponseDto,
  createProfileResponseSchema,
  SimilarityProfile,
} from '@/profile/dto/create-profile.dto';
import {
  DeleteProfileResponseDto,
  deleteProfileResponseSchema,
} from '@/profile/dto/delete-profile.dto';
import {
  FindAllProfileResponseDto,
  findAllProfileResponseSchema,
} from '@/profile/dto/find-all-profile.dto';
import {
  FindByDateRangeResponseDto,
  findByDateRangeResponseSchema,
} from '@/profile/dto/find-by-date-range-profile.dto';
import {
  FindByIdProfileResponseDto,
  findByIdProfileResponseSchema,
} from '@/profile/dto/find-by-id-profile.dto';
import {
  FindByPhoneNumberResponseDto,
  findByPhoneNumberResponseSchema,
} from '@/profile/dto/find-by-phone-number.dto';
import {
  FindByTagGroupsProfileResponseDto,
  findByTagGroupsProfileResponseSchema,
} from '@/profile/dto/find-by-tag-groups-profile.dto';
import {
  FindByTagsProfileResponseDto,
  findByTagsProfileResponseSchema,
} from '@/profile/dto/find-by-tags-profile.dto';
import {
  FindTrashResponseDto,
  findTrashResponseSchema,
} from '@/profile/dto/find-trash.dto';
import {
  FindWithActiveChatResponseDto,
  findWithActiveChatResponseSchema,
} from '@/profile/dto/find-with-active-chat.dto';
import {
  UpdateProfileDto,
  updateProfileResponseSchema,
} from '@/profile/dto/update-profile.dto';
import { ProfileService } from '@/profile/profile.service';
import {
  VisibleTags,
  VisibleTagsType,
} from '@/shared/decorators/visible-tags.decorator';
import { ErrorDto } from '@/shared/errors/errorType';
import { ExistingRecord } from '@/shared/validation/checkExistingRecord';
import { ParseDateIsoPipe } from '@/shared/validation/parse-date-iso.pipe';
import { normalize } from '@/shared/validation/string';
import { TagGroupService } from '@/tag-group/tag-group.service';
import { TagService } from '@/tag/tag.service';
import {
  Body,
  ConflictException,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseArrayPipe,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import {
  ApiConflictResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiPreconditionFailedResponse,
} from '@nestjs/swagger';
import levenshtein from 'string-comparison';
import z from 'zod';
import { Account as AccountType, Prisma, Profile, Role } from '~/types';

// CONSIDERACIONES:
// - No olvidarse de poner el decorador @Account() en los parametros de todos los metodos para poderle pasar el ID al service

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
    @Account() account: AccountWithoutPassword,
  ): Promise<z.infer<typeof findAllProfileResponseSchema>> {
    return await this.profileService.findAll(visibleTags, {
      accountId: account.id,
    });
  }

  // TODO: all-with-active-chat requires a prisma extension
  @ApiOkResponse({
    type: FindWithActiveChatResponseDto,
    description: translate('route.profile.find-all-with-active-chat.success'),
  })
  @Get('/all-with-active-chat')
  async findAllWithActiveChat(
    @VisibleTags() visibleTags: VisibleTagsType,
    @Account() account: AccountWithoutPassword,
  ): Promise<z.infer<typeof findWithActiveChatResponseSchema>> {
    return await this.profileService.findAllWithActiveChat(visibleTags, {
      accountId: account.id,
    });
  }

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
    @Account() account: AccountWithoutPassword,
  ): Promise<z.infer<typeof findByTagsProfileResponseSchema>> {
    const allTags = (await this.tagService.findAll()).tags;
    if (tagsId.some((tagId) => !allTags.some((tag) => tag.id === tagId))) {
      throw new NotFoundException(
        translate('route.profile.find-by-tag.tags-not-found'),
      );
    }

    return await this.profileService.findByTags(tagsId, visibleTags, {
      accountId: account.id,
    });
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
    @Account() account: AccountWithoutPassword,
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

    return await this.profileService.findByTagGroups(tagGroups, visibleTags, {
      accountId: account.id,
    });
  }

  @ApiOkResponse({
    type: FindByDateRangeResponseDto,
    description: translate('route.profile.find-by-date-range.success'),
  })
  @ApiPreconditionFailedResponse({
    description: translate('route.profile.find-by-date-range.invalid-date'),
    type: ErrorDto,
  })
  @Get('/find-by-date-range')
  async findByDateRange(
    @Query('from', ParseDateIsoPipe) from: string,
    @Query('to', ParseDateIsoPipe) to: string,
    @VisibleTags() visibleTags: VisibleTagsType,
    @Account() account: AccountWithoutPassword,
  ): Promise<z.infer<typeof findByDateRangeResponseSchema>> {
    const profiles = await this.profileService.findByDateRange(
      new Date(from),
      new Date(to),
      visibleTags,
      { accountId: account.id },
    );

    const grouped = this.groupedProfiles(profiles);

    return grouped;
  }

  @ApiNotFoundResponse({
    description: translate('route.profile.find-by-phone-number.not-found'),
    type: ErrorDto,
  })
  @ApiOkResponse({
    type: FindByPhoneNumberResponseDto,
    description: translate('route.profile.find-by-phone-number.success'),
  })
  @Get('/find-by-phone-number/:phoneNumber')
  async findByPhoneNumber(
    @Param('phoneNumber') phoneNumber: string,
    @VisibleTags() visibleTags: VisibleTagsType,
    @Account() account: AccountWithoutPassword,
  ): Promise<z.infer<typeof findByPhoneNumberResponseSchema>> {
    const profile = await this.profileService.findByPhoneNumber(
      phoneNumber,
      visibleTags,
      { accountId: account.id },
    );

    if (!profile) {
      throw new NotFoundException(
        translate('route.profile.find-by-phone-number.not-found'),
      );
    }

    return profile;
  }

  @ApiOkResponse({
    type: FindTrashResponseDto,
    description: translate('route.profile.find-trash.success'),
  })
  @Get('/find-trash')
  async findTrashCan(
    @VisibleTags() visibleTags: VisibleTagsType,
    @Account() account: AccountWithoutPassword,
  ): Promise<z.infer<typeof findTrashResponseSchema>> {
    const profiles = await this.profileService.findTrash(visibleTags, {
      accountId: account.id,
    });

    return {
      profiles,
    };
  }

  @Roles(Role.ADMIN, Role.FORM)
  @UseGuards(JwtGuard, RoleGuard)
  @ApiOkResponse({
    type: CreateProfileResponseDto,
    description: translate('route.profile.create.success'),
  })
  @ApiConflictResponse({
    description: translate('route.profile.create.conflict'),
    type: ErrorDto,
  })
  @ApiNotFoundResponse({
    description: translate('route.profile.create.participant-tag-not-found'),
    type: ErrorDto,
  })
  @Post('/create')
  async create(
    @Body() body: CreateProfileDto,
    @Account() account: AccountWithoutPassword,
  ): Promise<z.infer<typeof createProfileResponseSchema>> {
    const { checkForSimilarity, profile } = body;

    const participantTag = await this.tagService.findParticipantTag();

    if (!participantTag) {
      throw new NotFoundException(
        translate('route.profile.create.participant-tag-not-found'),
      );
    }

    try {
      await this.checkForSameProfile(
        {
          phoneNumber: profile.phoneNumber,
          secondaryPhoneNumber: profile.secondaryPhoneNumber,
          dni: profile.dni,
        },
        {
          isUpdating: false,
        },
      );
    } catch (error) {
      throw error;
    }

    if (checkForSimilarity) {
      try {
        const phoneNumber = this.phoneNumberWithoutSpaces(profile.phoneNumber);
        const similarityProfiles = await this.similarityCheck(
          profile.fullName,
          phoneNumber,
          account.id,
        );
        return {
          response: {
            type: 'similar',
            similarProfiles: similarityProfiles,
          },
        };
      } catch (error) {
        throw error;
      }
    }

    const profileNormalized = {
      ...profile,
      phoneNumber: this.phoneNumberWithoutSpaces(profile.phoneNumber),
      secondaryPhoneNumber: profile.secondaryPhoneNumber
        ? this.phoneNumberWithoutSpaces(profile.secondaryPhoneNumber)
        : null,
    };

    const profileCreated = await this.profileService.create(
      profileNormalized,
      participantTag.id,
      account.id,
    );

    return {
      response: {
        type: 'created',
        id: profileCreated.id,
      },
    };
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
    @Account() account: AccountWithoutPassword,
  ): Promise<z.infer<typeof findByIdProfileResponseSchema>> {
    return await this.profileService.findById(id, visibleTags, {
      accountId: account.id,
    });
  }

  @ApiNotFoundResponse({
    description: translate('route.profile.delete.not-found'),
    type: ErrorDto,
  })
  @ApiOkResponse({
    description: translate('route.profile.delete.success'),
    type: DeleteProfileResponseDto,
  })
  @Delete('/:id')
  async delete(
    @Param('id', new ExistingRecord('profile')) id: string,
    @Account() account: AccountWithoutPassword,
  ): Promise<z.infer<typeof deleteProfileResponseSchema>> {
    return await this.profileService.delete(id, {
      accountId: account.id,
    });
  }

  @ApiNotFoundResponse({
    type: ErrorDto,
    description: translate('route.profile.update.not-found'),
  })
  @ApiConflictResponse({
    type: ErrorDto,
    description: translate('route.profile.update.conflict'),
  })
  @ApiOkResponse({
    type: UpdateProfileDto,
    description: translate('route.profile.update.success'),
  })
  @Patch('/:id')
  async update(
    @Param('id', new ExistingRecord('profile')) id: string,
    @Body() body: UpdateProfileDto,
    @Account() account: AccountWithoutPassword,
  ): Promise<z.infer<typeof updateProfileResponseSchema>> {
    const participantTag = await this.tagService.findParticipantTag();
    const allTags = (await this.tagService.findAll()).tags.filter((tag) =>
      body.tags?.some((t) => t === tag.id),
    );

    if (!participantTag) {
      throw new NotFoundException(
        translate('route.profile.create.participant-tag-not-found'),
      );
    }

    allTags?.forEach((tag) => {
      if (tag.group.isExclusive) {
        const exclusivity = allTags?.filter(
          (t) => t.group.id === tag.group.id && t.id !== tag.id,
        );
        if (exclusivity && exclusivity.length > 0) {
          throw new ConflictException([
            translate('route.profile.update.exclusive-tags', {
              tag1: tag.name,
              tag2: exclusivity[0]!.name,
            }),
          ]);
        }
      }
    });

    try {
      await this.checkForSameProfile(
        {
          phoneNumber: body.phoneNumber || '',
          secondaryPhoneNumber: body.secondaryPhoneNumber || '',
          dni: body.dni || '',
        },
        {
          isUpdating: true,
          id,
        },
      );
    } catch (error) {
      throw error;
    }

    return await this.profileService.update(id, body, participantTag.id, {
      accountId: account.id,
    });
  }

  private phoneNumberWithoutSpaces(
    phoneNumber: Profile['phoneNumber'],
  ): Profile['phoneNumber'] {
    return phoneNumber.replace(/\s+/g, '').replace(/\+/g, '');
  }

  private async similarityCheck(
    profileFullName: Profile['fullName'],
    phoneNumber: Profile['phoneNumber'],
    accountId: AccountType['id'],
  ): Promise<SimilarityProfile[]> {
    const similarities: SimilarityProfile[] = [];
    const allTags = (await this.tagService.findAll()).tags.map((tag) => tag.id);
    const allProfiles = (
      await this.profileService.findAll(allTags, {
        accountId: accountId,
      })
    ).profiles;

    allProfiles.forEach(async (profileCompare) => {
      if (profileCompare.phoneNumber === phoneNumber) {
        throw new ConflictException([
          translate('route.profile.create.phone-number-already-exists'),
        ]);
      }
      const similarityPhoneNumber = levenshtein.levenshtein.similarity(
        profileCompare.phoneNumber,
        phoneNumber,
      );
      const similarityFullName = levenshtein.levenshtein.similarity(
        normalize(profileCompare.fullName),
        normalize(profileFullName),
      );

      if (similarityPhoneNumber >= 0.75 || similarityFullName >= 0.75) {
        similarities.push({
          similarityPhoneNumberPercentage: similarityPhoneNumber,
          similarityFullNamePercentage: similarityFullName,
          profile: {
            ...profileCompare,
          },
        });
      }
    });
    if (similarities.length > 0) {
      return similarities;
    } else {
      return [];
    }
  }

  private async checkForSameProfile(
    profile: {
      phoneNumber: Profile['phoneNumber'];
      secondaryPhoneNumber: Profile['secondaryPhoneNumber'];
      dni: Profile['dni'];
    },
    {
      isUpdating,
      id,
    }:
      | { isUpdating: true; id?: Profile['id'] }
      | {
          isUpdating: false;
          id?: never;
        } = {
      isUpdating: false,
    },
  ): Promise<void> {
    const phoneNumber = this.phoneNumberWithoutSpaces(profile.phoneNumber);
    const secondaryPhoneNumber =
      this.phoneNumberWithoutSpaces(profile.secondaryPhoneNumber || '') || null;

    const existingProfile = await this.profileService.alreadyExistingProfile({
      phoneNumber,
      secondaryPhoneNumber,
      dni: profile.dni,
    });

    if (isUpdating && existingProfile?.id === id) {
      return;
    }

    if (existingProfile) {
      if (
        phoneNumber === existingProfile.phoneNumber ||
        phoneNumber === existingProfile.secondaryPhoneNumber
      ) {
        throw new ConflictException([
          translate('route.profile.create.phone-number-already-exists'),
        ]);
      } else if (
        (secondaryPhoneNumber &&
          secondaryPhoneNumber === existingProfile.phoneNumber) ||
        secondaryPhoneNumber === existingProfile.secondaryPhoneNumber
      ) {
        throw new ConflictException([
          translate(
            'route.profile.create.secondary-phone-number-already-exists',
          ),
        ]);
      } else if (profile.dni === existingProfile.dni) {
        throw new ConflictException([
          translate('route.profile.create.dni-already-exists'),
        ]);
      }
    }
  }

  private groupedProfiles(
    profiles: Prisma.ProfileGetPayload<{
      include: {
        tags: {
          include: {
            group: {
              select: {
                id: true;
              };
            };
          };
        };
      };
    }>[],
  ): Record<string, typeof profiles> {
    return profiles.reduce(
      (acc, profile) => {
        const date = profile.created_at.toISOString().split('T')[0]!;
        if (!acc[date]) {
          acc[date] = [];
        }
        acc[date]!.push(profile);
        return acc;
      },
      {} as Record<string, typeof profiles>,
    );
  }
}
