import { commentSchema } from '@/comment/dto/comment.dto';
import { locationSchema } from '@/location/dto/location.dto';
import { profileSchema } from '@/profile/schema/profile.schema';
import { tagSchema } from '@/tag/dto/tag.dto';
import z from 'zod';

export const createProfileSchema = z.object({
  profile: profileSchema
    .pick({
      alternativeNames: true,
      birthDate: true,
      dni: true,
      fullName: true,
      gender: true,
      instagram: true,
      mail: true,
      phoneNumber: true,
      profilePictureUrl: true,
      secondaryPhoneNumber: true,
      password: true,
      username: true,
    })
    .merge(
      z.object({
        comments: z
          .array(
            commentSchema.pick({
              content: true,
              isSolvable: true,
            }),
          )
          .optional(),
        residence: locationSchema
          .pick({
            city: true,
            country: true,
            latitude: true,
            longitude: true,
            state: true,
          })
          .optional(),
        birth: locationSchema
          .pick({
            city: true,
            country: true,
            latitude: true,
            longitude: true,
            state: true,
          })
          .optional(),
        tags: z.array(tagSchema.shape.id).optional(),
      }),
    ),
  checkForSimilarity: z.boolean().optional(),
});

const similarProfileSchema = z.object({
  profile: profileSchema.pick({
    fullName: true,
    phoneNumber: true,
    id: true,
  }),
  similarityPhoneNumberPercentage: z.number(),
  similarityFullNamePercentage: z.number(),
});

const similarityProfileSchema = z.object({
  similarProfiles: z.array(similarProfileSchema),
});

const createdProfileSchema = z.object({
  id: profileSchema.shape.id,
});

const createProfileResponseSchemaBase = z.discriminatedUnion('type', [
  similarityProfileSchema.extend({
    type: z.literal('similar'),
  }),
  createdProfileSchema.extend({
    type: z.literal('created'),
  }),
]);

export const createProfileResponseSchema = z.object({
  response: createProfileResponseSchemaBase,
});

export type SimilarityProfile = z.infer<typeof similarProfileSchema>;
