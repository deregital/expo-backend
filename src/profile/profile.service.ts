import { PrismaService } from '@/prisma/prisma.service';
import { CreateProfileDto } from '@/profile/dto/create-profile.dto';
import { findAllProfileResponseSchema } from '@/profile/dto/find-all-profile.dto';
import { findByIdProfileResponseSchema } from '@/profile/dto/find-by-id-profile.dto';
import { findByTagGroupsProfileResponseSchema } from '@/profile/dto/find-by-tag-groups-profile.dto';
import { findByTagsProfileResponseSchema } from '@/profile/dto/find-by-tags-profile.dto';
import { VisibleTagsType } from '@/shared/decorators/visible-tags.decorator';
import { Injectable } from '@nestjs/common';
import z from 'zod';
import { Account, Profile, Tag, TagGroup } from '~/types';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {}

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
    visibleTags: VisibleTagsType,
  ): Promise<z.infer<typeof findByIdProfileResponseSchema>> {
    const profile = await this.prisma.profile.findUnique({
      where: {
        id: id,
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
                id: true,
                color: true,
                isExclusive: true,
              },
            },
          },
        },
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

  async create(
    dto: CreateProfileDto['profile'],
    participantTagId: Tag['id'],
    accountId: Account['id'],
  ): Promise<Profile> {
    const highestShortId = await this.getHighestShortId();

    const profileCreated = await this.prisma.profile.create({
      data: {
        shortId: highestShortId + 1,
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

  async alreadyExistingProfile({
    phoneNumber,
    secondaryPhoneNumber,
    dni,
  }: {
    phoneNumber: Profile['phoneNumber'];
    secondaryPhoneNumber: Profile['secondaryPhoneNumber'];
    dni: Profile['dni'];
  }): Promise<Profile | null> {
    const existingProfile = await this.prisma.profile.findFirst({
      where: {
        OR: [
          { phoneNumber: phoneNumber },
          { phoneNumber: secondaryPhoneNumber ?? undefined },
          { secondaryPhoneNumber: secondaryPhoneNumber ?? undefined },
          { secondaryPhoneNumber: phoneNumber },
          { dni: dni ?? undefined },
        ],
      },
    });

    return existingProfile;
  }

  private async getHighestShortId(): Promise<number> {
    const profileHighestShortId = await this.prisma.profile.findFirst({
      orderBy: {
        shortId: 'desc',
      },
    });
    const shortId = profileHighestShortId?.shortId ?? 0;
    return shortId;
  }
}
