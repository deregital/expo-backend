import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { ticketGroupSchema } from '@/ticket-group/dto/ticket-group.dto';

export const updateTicketGroupSchema = ticketGroupSchema
  .pick({
    status: true,
  })
  .partial();

export class UpdateTicketGroupDto extends createZodDtoWithoutDate(
  updateTicketGroupSchema,
) {}

export const updateTicketGroupResponseSchema = ticketGroupSchema;

export class UpdateTicketGroupResponseDto extends createZodDtoWithoutDate(
  updateTicketGroupResponseSchema,
) {}
