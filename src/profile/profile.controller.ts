import {
  Account,
  AccountWithoutPassword,
} from '@/auth/decorators/account.decorator';
import { Roles } from '@/auth/decorators/rol.decorator';
import { JwtGuard } from '@/auth/guards/jwt.guard';
import { RoleGuard } from '@/auth/guards/role.guard';
import { translate } from '@/i18n/translate';
import { ImageService } from '@/image/image.service';
import {
  CreateProfileDto,
  CreateProfileResponseDto,
  SimilarityProfile,
  createProfileResponseSchema,
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
import { GlobalFilterInterceptor } from '@/shared/decorators/global-filter.interceptor';
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
import { TicketGroupService } from '@/ticket-group/ticket-group.service';
import {
  Body,
  ConflictException,
  Controller,
  Delete,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  ParseArrayPipe,
  ParseFilePipeBuilder,
  Patch,
  Post,
  Query,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ApiConflictResponse,
  ApiConsumes,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiPreconditionFailedResponse,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
import levenshtein from 'string-comparison';
import z from 'zod';
import { Prisma, Profile, Role, Tag } from '~/types';
import {
  DeleteImageProfileResponseDto,
  deleteImageProfileResponseSchema,
} from './dto/delete-image-profile.dto';
import {
  FindReferralCodeExistsResponseDto,
  findReferralCodeExistsResponseSchema,
} from './dto/find-referral-code-exists.dto';
import {
  FindReferralCodeUsageResponseDto,
  findReferralCodeUsageResponseSchema,
} from './dto/find-referral-code-usage.dto';
import {
  UpdateImageProfileDto,
  UpdateImageProfileResponseDto,
} from './dto/update-image-profile.dto';

@UseInterceptors(GlobalFilterInterceptor)
@Roles(Role.ADMIN, Role.USER)
@UseGuards(JwtGuard, RoleGuard)
@Controller('profile')
export class ProfileController {
  constructor(
    private readonly profileService: ProfileService,
    private readonly tagService: TagService,
    private readonly tagGroupService: TagGroupService,
    private readonly imageService: ImageService,
    private readonly ticketGroupService: TicketGroupService,
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

  @ApiOkResponse({
    type: FindWithActiveChatResponseDto,
    description: translate('route.profile.find-all-with-active-chat.success'),
  })
  @Get('/all-with-active-chat')
  async findAllWithActiveChat(
    @VisibleTags() visibleTags: VisibleTagsType,
  ): Promise<z.infer<typeof findWithActiveChatResponseSchema>> {
    return await this.profileService.findAllWithActiveChat(visibleTags);
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
  ): Promise<z.infer<typeof findByDateRangeResponseSchema>> {
    const profiles = await this.profileService.findByDateRange(
      new Date(from),
      new Date(to),
      visibleTags,
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
  ): Promise<z.infer<typeof findByPhoneNumberResponseSchema>> {
    const profile = await this.profileService.findByPhoneNumber(
      phoneNumber,
      visibleTags,
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
  ): Promise<z.infer<typeof findTrashResponseSchema>> {
    const profiles = await this.profileService.findTrash(visibleTags);

    return {
      profiles,
    };
  }

  @Roles(Role.ADMIN)
  @UseGuards(JwtGuard, RoleGuard)
  @ApiOkResponse({
    type: FindReferralCodeUsageResponseDto,
    description: translate('route.profile.referral-code-usage.success'),
  })
  @Get('/referral-code-usage/:code')
  async findReferralCodeUsage(
    @Param('code') code: string,
  ): Promise<z.infer<typeof findReferralCodeUsageResponseSchema>> {
    const amount = await this.ticketGroupService.findCountByReferralCode(code);
    return {
      amount,
    };
  }

  @Roles(Role.TICKETS)
  @UseGuards(JwtGuard, RoleGuard)
  @ApiOkResponse({
    type: FindReferralCodeExistsResponseDto,
    description: translate('route.profile.referral-code-exists.success'),
  })
  @Get('/referral-code-exists/:code')
  async findReferralCodeExists(
    @Param('code') code: string,
  ): Promise<z.infer<typeof findReferralCodeExistsResponseSchema>> {
    const exists = await this.profileService.findReferralCode(code);

    return {
      exists,
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
          username: profile.username,
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
        );

        if (similarityProfiles.length === 0) {
          const profileCreated = await this.normalizeAndCreateProfile(
            profile,
            participantTag,
            account,
          );

          return {
            response: {
              type: 'created',
              id: profileCreated.id,
            },
          };
        } else {
          return {
            response: {
              type: 'similar',
              similarProfiles: similarityProfiles,
            },
          };
        }
      } catch (error) {
        throw error;
      }
    }

    const profileCreated = await this.normalizeAndCreateProfile(
      profile,
      participantTag,
      account,
    );

    return {
      response: {
        type: 'created',
        id: profileCreated.id,
      },
    };
  }

  @ApiOkResponse({
    description: translate('route.image.update.success'),
    type: UpdateImageProfileResponseDto,
  })
  @ApiInternalServerErrorResponse({
    description: translate('route.image.update.error'),
    type: ErrorDto,
  })
  @ApiUnprocessableEntityResponse({
    description: translate('route.image.update.unprocessable-entity'),
    type: ErrorDto,
  })
  @ApiConflictResponse({
    description: translate('route.image.update.conflict'),
    type: ErrorDto,
  })
  @UseInterceptors(FileInterceptor('image'))
  @ApiConsumes('multipart/form-data')
  @Patch('/update-image/:id')
  async updateImage(
    @Param('id', new ExistingRecord('profile')) id: string,
    @Body() body: UpdateImageProfileDto,
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({
          fileType: /(jpeg|png|webp)/, // Ver errores custom
        })
        .build({
          errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
        }),
    )
    file: Express.Multer.File,
  ): Promise<UpdateImageProfileResponseDto> {
    const currentPictureUrl =
      await this.profileService.getProfilePictureUrl(id);

    if (currentPictureUrl) {
      await this.imageService.deleteImage(currentPictureUrl);
    }

    const pictureUrl = await this.imageService.updateImage(
      `profile-${id}`,
      file,
    );

    if (!pictureUrl) {
      throw new ConflictException([translate('route.image.update.conflict')]);
    }

    await this.profileService.update(
      id,
      {
        profilePictureUrl: pictureUrl,
      },
      undefined,
    );

    return {
      message: translate('route.image.update.success'),
    };
  }

  @ApiOkResponse({
    description: translate('route.image.delete.success'),
    type: DeleteImageProfileResponseDto,
  })
  @ApiInternalServerErrorResponse({
    description: translate('route.image.delete.error'),
    type: ErrorDto,
  })
  @ApiNotFoundResponse({
    description: translate('route.image.delete.not-found'),
    type: ErrorDto,
  })
  @Delete('/delete-image/:id')
  async deleteImage(
    @Param('id', new ExistingRecord('profile')) id: string,
  ): Promise<z.infer<typeof deleteImageProfileResponseSchema>> {
    const currentPictureUrl =
      await this.profileService.getProfilePictureUrl(id);
    if (currentPictureUrl) {
      await this.imageService.deleteImage(currentPictureUrl);
    } else {
      throw new NotFoundException([translate('route.image.delete.not-found')]);
    }
    await this.profileService.deleteImage(id);
    return {
      message: translate('route.image.delete.success'),
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
  ): Promise<z.infer<typeof findByIdProfileResponseSchema>> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...profile } = await this.profileService.findById(
      id,
      visibleTags,
    );
    return profile;
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
  ): Promise<z.infer<typeof deleteProfileResponseSchema>> {
    return await this.profileService.delete(id);
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
          username: body.username ?? null,
        },
        {
          isUpdating: true,
          id,
        },
      );
    } catch (error) {
      throw error;
    }

    return await this.profileService.update(id, body, participantTag.id);
  }

  private phoneNumberWithoutSpaces(
    phoneNumber: Profile['phoneNumber'],
  ): Profile['phoneNumber'] {
    return phoneNumber.replace(/\s+/g, '').replace(/\+/g, '');
  }

  private async similarityCheck(
    profileFullName: Profile['fullName'],
    phoneNumber: Profile['phoneNumber'],
  ): Promise<SimilarityProfile[]> {
    const similarities: SimilarityProfile[] = [];
    const allTags = (await this.tagService.findAll()).tags.map((tag) => tag.id);
    const allProfiles = (await this.profileService.findAll(allTags)).profiles;

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
      username: Profile['username'];
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
      username: profile.username,
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
        secondaryPhoneNumber !== null &&
        secondaryPhoneNumber !== '' &&
        (secondaryPhoneNumber === existingProfile.phoneNumber ||
          secondaryPhoneNumber === existingProfile.secondaryPhoneNumber)
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
      } else if (profile.username === existingProfile.username) {
        throw new ConflictException([
          translate('route.profile.create.username-already-exists'),
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

  private async normalizeAndCreateProfile(
    profile: CreateProfileDto['profile'],
    participantTag: Tag,
    account: AccountWithoutPassword,
  ): Promise<Profile> {
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

    return profileCreated;
  }
}
