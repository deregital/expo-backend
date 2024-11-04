import {
  CreateEventDto,
  createEventResponseSchema,
} from '@/event/dto/create-event.dto';
import { getAllEventsResponseSchema } from '@/event/dto/get-all-event.dto';
import { getByIdEventResponseSchema } from '@/event/dto/get-by-id-event.dto';
import {
  UpdateEventDto,
  updateEventResponseSchema,
} from '@/event/dto/update-event.dto';
import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { z } from 'zod';
import { Event } from '~/types';
import { deleteEventResponseSchema } from './dto/delete-event.dto';

@Injectable()
export class EventService {
  constructor(private prisma: PrismaService) {}

  async create(
    dto: CreateEventDto,
  ): Promise<z.infer<typeof createEventResponseSchema>> {
    return await this.prisma.event.create({
      data: {
        name: dto.name,
        date: dto.date,
        location: dto.location,
        folder: dto.folderId ? { connect: { id: dto.folderId } } : undefined,
        tagAssisted: { connect: { id: dto.tagAssistedId } },
        tagConfirmed: { connect: { id: dto.tagConfirmedId } },
        supraEvent: dto.supraEventId
          ? { connect: { id: dto.supraEventId } }
          : undefined,
      },
      include: {
        folder: true,
        tagAssisted: true,
        tagConfirmed: true,
      },
    });
  }

  async findAll(): Promise<z.infer<typeof getAllEventsResponseSchema>> {
    return await this.prisma.event.findMany({
      include: {
        folder: true,
        tagAssisted: true,
        tagConfirmed: true,
      },
    });
  }

  async findById(
    id: Event['id'],
  ): Promise<z.infer<typeof getByIdEventResponseSchema>> {
    const event = await this.prisma.event.findUnique({
      where: { id },
      include: {
        folder: true,
        tagAssisted: true,
        tagConfirmed: true,
      },
    });
    return event!;
  }

  async update(
    id: Event['id'],
    updateEventDto: UpdateEventDto,
  ): Promise<z.infer<typeof updateEventResponseSchema>> {
    return await this.prisma.event.update({
      where: { id },
      data: {
        name: updateEventDto.name,
        date: updateEventDto.date,
        location: updateEventDto.location,
        folder: updateEventDto.folderId
          ? { connect: { id: updateEventDto.folderId } }
          : { disconnect: true },
        tagAssisted: { connect: { id: updateEventDto.tagAssistedId } },
        tagConfirmed: { connect: { id: updateEventDto.tagConfirmedId } },
      },
      include: {
        folder: true,
        tagAssisted: true,
        tagConfirmed: true,
      },
    });
  }

  async remove(id: string): Promise<z.infer<typeof deleteEventResponseSchema>> {
    const deletedEvent = await this.prisma.event.delete({
      where: { id },
    });
    return deletedEvent;
  }
}
