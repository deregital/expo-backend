import { eventSchema } from '@/event/dto/event.dto';
import { profileSchema } from '@/schema/profile.schema';
import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import z from 'zod';
import { ticketSchema } from './ticket.dto';

export const createManyTicketSchema = z.object({
  tickets: z.array(
    ticketSchema
      .pick({
        eventId: true,
        type: true,
        fullName: true,
        mail: true,
      })
      .extend({
        profileId: profileSchema.shape.id.optional(),
      }),
  ),
});

export class CreateManyTicketDto extends createZodDtoWithoutDate(
  createManyTicketSchema,
) {}

export const generateMultiplePdfTicketsSchema = z
  .object({
    ticketId: z.string(),
    pdf: z.instanceof(Blob),
  })
  .array();

export class GenerateMultiplePdfTicketsResponseDto extends createZodDtoWithoutDate(
  generateMultiplePdfTicketsSchema,
) {}

export class GenerateMultiplePdfTicketsDto extends createZodDtoWithoutDate(
  generateMultiplePdfTicketsSchema,
) {}

export const createManyTicketResponseSchema = ticketSchema
  .extend({
    event: eventSchema,
  })
  .array();

export class CreateManyTicketResponseDto extends createZodDtoWithoutDate(
  createManyTicketResponseSchema,
) {}

export const createManyTicketWithPdfsResponseSchema = z.object({
  tickets: createManyTicketResponseSchema,
  pdfs: z.array(
    z.object({
      ticketId: z.string(),
      pdfBase64: z.string(),
    }),
  ),
});

export class CreateManyTicketWithPdfsResponseDto extends createZodDtoWithoutDate(
  createManyTicketWithPdfsResponseSchema,
) {}
