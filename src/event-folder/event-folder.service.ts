import { getAllEventsResponseSchema } from '@/event/dto/get-all-event.dto';
import { PRISMA_SERVICE } from '@/prisma/constants';
import {
  CreateEventFolderDto,
  createEventFolderResponseSchema,
} from './dto/create-event-folder.dto';
import { deleteEventFolderResponseSchema } from './dto/delete-event-folder.dto';
import { getAllEventFolderResponseSchema } from './dto/get-all-event-folder.dto';
import { getByIdEventFolderResponseSchema } from './dto/get-by-id-event-folder.dto';
import {
  UpdateEventFolderDto,
  updateEventFolderResponseSchema,
} from './dto/update-event-folder.dto';

import { PrismaService } from '@/prisma/prisma.service';
import { Inject, Injectable } from '@nestjs/common';
import z from 'zod';

@Injectable()
export class EventFolderService {
  constructor(@Inject(PRISMA_SERVICE) private readonly prisma: PrismaService) {}

  async createEventFolder(
    dto: CreateEventFolderDto,
  ): Promise<z.infer<typeof createEventFolderResponseSchema>> {
    const eventFolder = await this.prisma.eventFolder.create({
      data: {
        name: dto.name,
        color: dto.color,
      },
    });
    return eventFolder;
  }

  async getAll(): Promise<z.infer<typeof getAllEventFolderResponseSchema>> {
    const folders = await this.prisma.eventFolder.findMany({
      include: {
        events: true,
      },
      orderBy: {
        updated_at: 'desc',
      },
    });

    return { folders };
  }

  async getAllNested(): Promise<
    z.infer<typeof getAllEventsResponseSchema.shape.folders>
  > {
    const folders = await this.prisma.eventFolder.findMany({
      include: {
        events: {
          include: {
            subEvents: true,
            supraEvent: true,
          },
        },
      },
      orderBy: {
        updated_at: 'desc',
      },
    });

    return folders;
  }

  async getById(
    id: string,
  ): Promise<z.infer<typeof getByIdEventFolderResponseSchema>> {
    const eventFolder = await this.prisma.eventFolder.findUnique({
      where: { id },
      include: {
        events: true,
      },
    });

    return eventFolder!;
  }

  async updateEventFolder(
    id: string,
    dto: UpdateEventFolderDto,
  ): Promise<z.infer<typeof updateEventFolderResponseSchema>> {
    const updatedEventFolder = await this.prisma.eventFolder.update({
      where: { id },
      data: {
        name: dto.name,
        color: dto.color,
      },
    });
    return updatedEventFolder;
  }

  async deleteEventFolder(
    id: string,
  ): Promise<z.infer<typeof deleteEventFolderResponseSchema>> {
    const deletedEventFolder = await this.prisma.eventFolder.delete({
      where: { id },
    });
    return deletedEventFolder;
  }
}
