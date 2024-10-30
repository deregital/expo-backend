import { translate } from '@/i18n/translate';
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
import { Injectable, NotFoundException } from '@nestjs/common';
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

  async getAllEventFolders(): Promise<
    z.infer<typeof getAllEventFolderResponseSchema>
  > {
    const eventFolders = await this.prisma.eventFolder.findMany({
      include: {
        events: true,
      },
      orderBy: {
        updated_at: 'desc',
      },
    });

    return { eventFolders };
  }

  async getEventFolderById(
    id: string,
  ): Promise<z.infer<typeof getByIdEventFolderResponseSchema>> {
    const eventFolder = await this.prisma.eventFolder.findUnique({
      where: { id },
      include: {
        events: true,
      },
    });

    if (!eventFolder) {
      throw new NotFoundException([
        translate('route.event-folder.get-by-id.not-found'),
      ]);
    }

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
