import { PRISMA_SERVICE } from '@/prisma/constants';
import { PrismaService } from '@/prisma/prisma.service';
import { CreateProfileDto } from '@/profile/dto/create-profile.dto';
import { findAllProfileResponseSchema } from '@/profile/dto/find-all-profile.dto';
import { findByDateRangeSchema } from '@/profile/dto/find-by-date-range-profile.dto';
import { findByIdProfileResponseSchema } from '@/profile/dto/find-by-id-profile.dto';
import { findByTagGroupsProfileResponseSchema } from '@/profile/dto/find-by-tag-groups-profile.dto';
import { findByTagsProfileResponseSchema } from '@/profile/dto/find-by-tags-profile.dto';
import { findTrashResponseSchema } from '@/profile/dto/find-trash.dto';
import { findWithActiveChatResponseSchema } from '@/profile/dto/find-with-active-chat.dto';
import { UpdateProfileDto } from '@/profile/dto/update-profile.dto';
import { VisibleTagsType } from '@/shared/decorators/visible-tags.decorator';
import { Inject, Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';
import z from 'zod';
import {
  Account,
  Location,
  Production,
  Profile,
  Tag,
  TagGroup,
} from '~/types/prisma-schema';

@Injectable()
export class ProfileService {
  constructor(@Inject(PRISMA_SERVICE) private prisma: PrismaService) {}

  async findAll(
    visibleTags: VisibleTagsType,
  ): Promise<z.infer<typeof findAllProfileResponseSchema>> {
    const profiles = await this.prisma.profile.findMany({
      where: {
        isInTrash: false,
        tags: {
          some: {
            id: { in: visibleTags },
          },
        },
      },
      include: {
        tags: {
          include: {
            group: {
              select: {
                color: true,
                isExclusive: true,
              },
            },
          },
        },
      },
    });

    return { profiles };
  }

  async findById(
    id: string,
    visibleTags: VisibleTagsType | undefined = undefined,
  ): Promise<
    z.infer<typeof findByIdProfileResponseSchema> & {
      password: Profile['password'];
      productionsAdministrated: Production[];
    }
  > {
    const profile = await this.prisma.profile.findUnique({
      where: {
        id: id,
        tags: visibleTags
          ? {
              some: {
                id: { in: visibleTags },
              },
            }
          : undefined,
      },
      include: {
        tags: {
          include: {
            group: {
              select: {
                id: true,
                color: true,
                isExclusive: true,
              },
            },
          },
        },
        productionsAdministrated: true,
        residenceLocation: true,
        birthLocation: true,
      },
    });

    return profile!;
  }

  async findByTags(
    tagsId: Tag['id'][],
    visibleTags: VisibleTagsType,
  ): Promise<z.infer<typeof findByTagsProfileResponseSchema>> {
    const profiles = await this.prisma.profile.findMany({
      where: {
        isInTrash: false,
        AND: [
          {
            tags: {
              some: {
                id: { in: tagsId },
              },
            },
          },
          {
            tags: {
              some: {
                id: { in: visibleTags },
              },
            },
          },
        ],
      },
      include: {
        tags: {
          include: {
            group: {
              select: {
                isExclusive: true,
                color: true,
                name: true,
              },
            },
          },
        },
      },
    });

    return { profiles };
  }

  async findByTagGroups(
    tagGroups: TagGroup['id'][],
    visibleTags: VisibleTagsType,
  ): Promise<z.infer<typeof findByTagGroupsProfileResponseSchema>> {
    const profiles = await this.prisma.profile.findMany({
      where: {
        isInTrash: false,
        tags: {
          some: {
            id: { in: visibleTags },
            group: {
              id: {
                in: tagGroups,
              },
            },
          },
        },
      },
      include: {
        tags: true,
      },
    });

    return { profiles };
  }

  async findByUsername(username: Profile['username']): Promise<Profile | null> {
    const profile = await this.prisma.profile.findFirst({
      where: {
        username: username,
      },
    });

    return profile;
  }

  async create(
    dto: CreateProfileDto['profile'],
    participantTagId: Tag['id'],
    accountId: Account['id'],
  ): Promise<Profile> {
    const highestShortId = await this.getHighestShortId();

    const profileCreated = await this.prisma.profile.create({
      data: {
        shortId: highestShortId + 1,
        username: dto.username,
        password: dto.password ? await hash(dto.password, 10) : undefined,
        fullName: dto.fullName,
        firstName: dto.fullName.split(' ')[0],
        phoneNumber: dto.phoneNumber,
        secondaryPhoneNumber: dto.secondaryPhoneNumber ?? undefined,
        gender: dto.gender !== 'N/A' ? dto.gender : undefined,
        birthDate: dto.birthDate ? new Date(dto.birthDate) : undefined,
        profilePictureUrl: dto.profilePictureUrl ?? undefined,
        tags: {
          connect: [participantTagId, ...(dto.tags ?? [])].map((id) => ({
            id: id,
          })),
        },
        alternativeNames: dto.alternativeNames ?? undefined,
        dni: dto.dni ?? undefined,
        mail: dto.mail ?? undefined,
        instagram: dto.instagram ?? undefined,
        birthLocation: dto.birth
          ? {
              connectOrCreate: {
                where: {
                  latitude_longitude: {
                    latitude: dto.birth.latitude,
                    longitude: dto.birth.longitude,
                  },
                },
                create: dto.birth,
              },
            }
          : undefined,
        residenceLocation: dto.residence
          ? {
              connectOrCreate: {
                where: {
                  latitude_longitude: {
                    latitude: dto.residence.latitude,
                    longitude: dto.residence.longitude,
                  },
                },
                create: dto.residence,
              },
            }
          : undefined,
        comments: {
          createMany: {
            data: [...(dto.comments ?? [])].map((comment) => ({
              content: comment.content,
              isSolvable: comment.isSolvable,
              createdBy: accountId,
            })),
          },
        },
      },
    });

    return profileCreated;
  }

  async delete(id: Profile['id']): Promise<Profile> {
    const profileDeleted = await this.prisma.profile.delete({
      where: {
        id: id,
      },
    });

    return profileDeleted;
  }

  async update(
    id: Profile['id'],
    dto: UpdateProfileDto,
    participantTagId: Tag['id'] | undefined = undefined,
  ): Promise<Profile> {
    const profileUpdated = await this.prisma.profile.update({
      where: {
        id: id,
      },
      data: {
        username: dto.username,
        password: dto.password ? await hash(dto.password, 10) : undefined,
        fullName: dto.fullName,
        firstTimeMiExpo:
          dto.firstTimeMiExpo !== undefined ? dto.firstTimeMiExpo : undefined,
        firstName: dto.fullName?.split(' ')[0] ?? undefined,
        phoneNumber: dto.phoneNumber,
        secondaryPhoneNumber: dto.secondaryPhoneNumber,
        alternativeNames: dto.alternativeNames ?? undefined,
        dni: dto.dni,
        mail: dto.mail,
        gender: dto.gender,
        profilePictureUrl: dto.profilePictureUrl,
        instagram: dto.instagram,
        isInTrash: dto.isInTrash,
        movedToTrashDate:
          dto.movedToTrashDate === null
            ? null
            : dto.movedToTrashDate
              ? new Date(dto.movedToTrashDate)
              : undefined,
        birthDate: dto.birthDate ? new Date(dto.birthDate) : undefined,
        residenceLocation: dto.residence
          ? {
              connectOrCreate: {
                where: {
                  latitude_longitude: {
                    latitude: dto.residence.latitude,
                    longitude: dto.residence.longitude,
                  },
                },
                create: dto.residence,
              },
            }
          : undefined,
        birthLocation: dto.birth
          ? {
              connectOrCreate: {
                where: {
                  latitude_longitude: {
                    latitude: dto.birth.latitude,
                    longitude: dto.birth.longitude,
                  },
                },
                create: dto.birth,
              },
            }
          : undefined,
        tags: dto.tags
          ? {
              set: [participantTagId, ...(dto.tags ?? [])].map((tagId) => ({
                id: tagId,
              })),
            }
          : undefined,
      },
    });

    return profileUpdated;
  }

  async findByDateRange(
    from: Date,
    to: Date,
    visibleTags: VisibleTagsType,
  ): Promise<z.infer<typeof findByDateRangeSchema.shape.profiles>> {
    const profiles = await this.prisma.profile.findMany({
      where: {
        isInTrash: false,
        created_at: {
          gte: from,
          lte: to,
        },
        tags: {
          some: {
            id: { in: visibleTags },
          },
        },
      },
      orderBy: {
        created_at: 'asc',
      },
      include: {
        tags: {
          include: {
            group: {
              select: {
                id: true,
              },
            },
          },
        },
      },
    });

    return profiles;
  }

  async findByPhoneNumber(
    phoneNumber: Profile['phoneNumber'],
    visibleTags: VisibleTagsType | undefined = undefined,
  ): Promise<Profile | null> {
    const profile = await this.prisma.profile.findUnique({
      where: {
        phoneNumber: phoneNumber,
        isInTrash: false,
        tags: visibleTags
          ? {
              some: {
                id: { in: visibleTags },
              },
            }
          : undefined,
      },
    });

    return profile;
  }

  async findTrash(
    visibleTags: VisibleTagsType,
  ): Promise<z.infer<typeof findTrashResponseSchema.shape.profiles>> {
    const profiles = await this.prisma.profile.findMany({
      where: {
        isInTrash: true,
        tags: {
          some: {
            id: { in: visibleTags },
          },
        },
      },
      select: {
        id: true,
        fullName: true,
        profilePictureUrl: true,
        created_at: true,
        isInTrash: true,
        phoneNumber: true,
        movedToTrashDate: true,
      },
    });

    return profiles;
  }

  async findAllWithActiveChat(
    visibleTags: VisibleTagsType,
  ): Promise<z.infer<typeof findWithActiveChatResponseSchema>> {
    const profiles = (await this.prisma.extendWithChat().profile.findMany({
      where: {
        isInTrash: false,
        tags: {
          some: {
            id: { in: visibleTags },
          },
        },
      },
      include: {
        tags: true,
        messages: {
          select: {
            state: true,
            message: true,
            created_at: true,
          },
        },
      },
    })) as unknown as z.infer<
      typeof findWithActiveChatResponseSchema.shape.profiles
    >;

    return { profiles };
  }

  async findPhonesByTags(
    tagsId: Tag['id'][],
  ): Promise<Profile['phoneNumber'][]> {
    const phones = await this.prisma.profile.findMany({
      where: {
        isInTrash: false,
        tags: {
          some: {
            id: { in: tagsId },
          },
        },
      },
      select: {
        phoneNumber: true,
      },
    });

    return phones.map((p) => p.phoneNumber);
  }

  async alreadyExistingProfile({
    phoneNumber,
    secondaryPhoneNumber,
    dni,
    username,
  }: {
    phoneNumber: Profile['phoneNumber'];
    secondaryPhoneNumber: Profile['secondaryPhoneNumber'];
    dni: Profile['dni'];
    username: Profile['username'];
  }): Promise<Profile | null> {
    const existingProfile = await this.prisma.profile.findFirst({
      where: {
        OR: [
          { phoneNumber: phoneNumber },
          { phoneNumber: secondaryPhoneNumber ?? undefined },
          { secondaryPhoneNumber: secondaryPhoneNumber ?? undefined },
          { secondaryPhoneNumber: phoneNumber },
          { dni: dni ?? undefined },
          { username: username ?? undefined },
        ],
      },
    });

    return existingProfile;
  }

  async getProfilePictureUrl(id: Profile['id']): Promise<string | null> {
    const profile = await this.prisma.profile.findUnique({
      where: {
        id: id,
      },
    });

    return profile?.profilePictureUrl ?? null;
  }

  async getHighestShortId(): Promise<number> {
    const profileHighestShortId = await this.prisma.profile.findFirst({
      orderBy: {
        shortId: 'desc',
      },
    });
    const shortId = profileHighestShortId?.shortId ?? 0;
    return shortId;
  }

  async verifyPhoneNumber(phoneNumber: Profile['phoneNumber']): Promise<
    Profile & {
      residenceLocation: Pick<
        Location,
        'city' | 'state' | 'country' | 'latitude' | 'longitude'
      > | null;
      birthLocation: Pick<
        Location,
        'city' | 'state' | 'country' | 'latitude' | 'longitude'
      > | null;
    }
  > {
    const profile = await this.prisma.profile.update({
      where: {
        phoneNumber: phoneNumber,
      },
      data: {
        isPhoneVerified: true,
      },
      include: {
        residenceLocation: {
          select: {
            city: true,
            state: true,
            country: true,
            latitude: true,
            longitude: true,
          },
        },
        birthLocation: {
          select: {
            city: true,
            state: true,
            country: true,
            latitude: true,
            longitude: true,
          },
        },
      },
    });

    return profile;
  }
}
