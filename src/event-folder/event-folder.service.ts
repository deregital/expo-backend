import {
  CreateEventFolderDto,
  createEventFolderResponseSchema,
} from './dto/create-event-folder.dto';
import { deleteEventFolderResponseSchema } from './dto/delete-event-folder.dto';
import {
  UpdateEventFolderDto,
  updateEventFolderResponseSchema,
} from './dto/update-event-folder.dto';

import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import z from 'zod';

@Injectable()
export class EventFolderService {
  constructor(private readonly prisma: PrismaService) {}

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
