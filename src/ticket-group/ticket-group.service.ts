import { PRISMA_SERVICE } from '@/prisma/constants';
import { PrismaService } from '@/prisma/prisma.service';
import {
  CreateTicketGroupDto,
  createTicketGroupResponseSchema,
} from '@/ticket-group/dto/create-ticket-group.dto';
import { deleteTicketGroupResponseSchema } from '@/ticket-group/dto/delete-ticket-group.dto';
import { findGroupResponseSchema } from '@/ticket-group/dto/find-group-ticket-group.dto';
import {
  UpdateTicketGroupDto,
  updateTicketGroupResponseSchema,
} from '@/ticket-group/dto/update-ticket-group.dto';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import z from 'zod';
import { TicketGroupStatus } from '~/types/prisma-schema';

@Injectable()
export class TicketGroupService {
  constructor(@Inject(PRISMA_SERVICE) private prisma: PrismaService) {}

  async create(
    createTicketGroupDto: CreateTicketGroupDto,
  ): Promise<z.infer<typeof createTicketGroupResponseSchema>> {
    return await this.prisma.ticketGroup.create({
      data: {
        ...createTicketGroupDto,
        status: TicketGroupStatus.BOOKED,
      },
      include: {
        tickets: true,
        event: true,
      },
    });
  }

  async findGroup(
    id: string,
  ): Promise<z.infer<typeof findGroupResponseSchema>> {
    const group = await this.prisma.ticketGroup.findUnique({
      where: { id },
    });

    if (!group) {
      throw new NotFoundException(`Ticket group with id ${id} not found`);
    }

    return group;
  }

  async update(
    id: string,
    updateTicketGroupDto: UpdateTicketGroupDto,
  ): Promise<z.infer<typeof updateTicketGroupResponseSchema>> {
    return await this.prisma.ticketGroup.update({
      where: { id },
      data: updateTicketGroupDto,
      include: {
        tickets: true,
        event: true,
      },
    });
  }

  async delete(
    id: string,
  ): Promise<z.infer<typeof deleteTicketGroupResponseSchema>> {
    return await this.prisma.ticketGroup.delete({
      where: { id },
      include: {
        tickets: true,
        event: true,
      },
    });
  }
}
