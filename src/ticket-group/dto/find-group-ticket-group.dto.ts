import { createZodDtoWithoutDate } from '@/shared/dto-modification/create-zod-dto-without-date';
import { ticketGroupSchema } from './ticket-group.dto';

export const findGroupResponseSchema = ticketGroupSchema;

export class FindGroupTicketGroupDto extends createZodDtoWithoutDate(
  findGroupResponseSchema,
) {}
