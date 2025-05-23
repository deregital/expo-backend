import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { ticketGroupSchema } from '@/ticket-group/dto/ticket-group.dto';

export const deleteTicketGroupResponseSchema = ticketGroupSchema;

export class DeleteTicketGroupResponseDto extends createZodDtoWithoutDate(
  deleteTicketGroupResponseSchema,
) {}
