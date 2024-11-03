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
import { normalize } from '@/shared/validation/string';
import { TagGroupService } from '@/tag-group/tag-group.service';
import { TagService } from '@/tag/tag.service';
import {
  Body,
  ConflictException,
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseArrayPipe,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import {
  ApiConflictResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
} from '@nestjs/swagger';
import levenshtein from 'string-comparison';
import z from 'zod';
import { Profile, Role } from '~/types';

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

    const phoneNumber = this.phoneNumberWithoutSpaces(profile.phoneNumber);
    const secondaryPhoneNumber =
      this.phoneNumberWithoutSpaces(profile.secondaryPhoneNumber || '') || null;

    const existingProfile = await this.profileService.alreadyExistingProfile({
      phoneNumber,
      secondaryPhoneNumber,
      dni: profile.dni,
    });

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

    if (checkForSimilarity) {
      const similarityProfiles: SimilarityProfile[] = [];
      const allTags = (await this.tagService.findAll()).tags.map(
        (tag) => tag.id,
      );
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
          normalize(profile.fullName),
        );

        if (similarityPhoneNumber >= 0.75 || similarityFullName >= 0.75) {
          similarityProfiles.push({
            similarityPhoneNumberPercentage: similarityPhoneNumber,
            similarityFullNamePercentage: similarityFullName,
            profile: {
              ...profileCompare,
            },
          });
        }
      });
      if (similarityProfiles.length > 0) {
        return {
          response: {
            type: 'similar',
            similarProfiles: similarityProfiles,
          },
        };
      }
    }

    const profileCreated = await this.profileService.create(
      profile,
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
  ): Promise<z.infer<typeof findByIdProfileResponseSchema>> {
    return await this.profileService.findById(id, visibleTags);
  }

  private phoneNumberWithoutSpaces(
    phoneNumber: Profile['phoneNumber'],
  ): Profile['phoneNumber'] {
    return phoneNumber.replace(/\s+/g, '');
  }
}
