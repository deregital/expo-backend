import {
  Account,
  AccountWithoutPassword,
} from '@/auth/decorators/account.decorator';
import { Roles } from '@/auth/decorators/rol.decorator';
import { JwtGuard } from '@/auth/guards/jwt.guard';
import { RoleGuard } from '@/auth/guards/role.guard';
import { translate } from '@/i18n/translate';
import { ErrorDto } from '@/shared/errors/errorType';
import { ExistingRecord } from '@/shared/validation/checkExistingRecord';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import {
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
} from '@nestjs/swagger';
import z from 'zod';
import { Role } from '~/types';
import {
  CreateEventFolderDto,
  CreateEventFolderResponseDto,
  createEventFolderResponseSchema,
} from './dto/create-event-folder.dto';
import {
  DeleteEventFolderResponseDto,
  deleteEventFolderResponseSchema,
} from './dto/delete-event-folder.dto';
import {
  GetAllEventFolderResponseDto,
  getAllEventFolderResponseSchema,
} from './dto/get-all-event-folder.dto';
import {
  GetByIdEventFolderResponseDto,
  getByIdEventFolderResponseSchema,
} from './dto/get-by-id-event-folder.dto';
import {
  UpdateEventFolderDto,
  UpdateEventFolderResponseDto,
  updateEventFolderResponseSchema,
} from './dto/update-event-folder.dto';
import { EventFolderService } from './event-folder.service';

@Roles(Role.ADMIN, Role.USER)
@UseGuards(JwtGuard, RoleGuard)
@Controller('event-folder')
export class EventFolderController {
  constructor(private readonly eventFolderService: EventFolderService) {}

  @ApiCreatedResponse({
    description: translate('route.event-folder.create.success'),
    type: CreateEventFolderResponseDto,
  })
  @ApiConflictResponse({
    description: translate('route.event-folder.create.conflict'),
    type: ErrorDto,
  })
  @Post('/create')
  async createEventFolder(
    @Body() createEventFolderDto: CreateEventFolderDto,
    @Account() account: AccountWithoutPassword,
  ): Promise<z.infer<typeof createEventFolderResponseSchema>> {
    return await this.eventFolderService.createEventFolder(
      createEventFolderDto,
    );
  }

  @ApiOkResponse({
    description: translate('route.event-folder.get-all.success'),
    type: GetAllEventFolderResponseDto,
  })
  @Get('/all')
  async getAllEventFolders(): Promise<
    z.infer<typeof getAllEventFolderResponseSchema>
  > {
    return await this.eventFolderService.getAllEventFolders();
  }

  @ApiOkResponse({
    description: translate('route.event-folder.get-by-id.success'),
    type: GetByIdEventFolderResponseDto,
  })
  @ApiNotFoundResponse({
    description: translate('route.event-folder.get-by-id.not-found'),
    type: ErrorDto,
  })
  @Get('/:id')
  async getEventFolderById(
    @Param('id', new ExistingRecord('eventFolder')) id: string,
  ): Promise<z.infer<typeof getByIdEventFolderResponseSchema>> {
    return await this.eventFolderService.getEventFolderById(id);
  }

  @ApiNotFoundResponse({
    description: translate('route.event-folder.update.not-found'),
    type: ErrorDto,
  })
  @ApiOkResponse({
    description: translate('route.event-folder.update.success'),
    type: UpdateEventFolderResponseDto,
  })
  @Patch('/update/:id')
  async updateEventFolder(
    @Param('id', new ExistingRecord('eventFolder')) id: string,
    @Body() updateEventFolderDto: UpdateEventFolderDto,
  ): Promise<z.infer<typeof updateEventFolderResponseSchema>> {
    return await this.eventFolderService.updateEventFolder(
      id,
      updateEventFolderDto,
    );
  }

  @ApiNotFoundResponse({
    description: translate('route.event-folder.delete.not-found'),
    type: ErrorDto,
  })
  @ApiOkResponse({
    description: translate('route.event-folder.delete.success'),
    type: DeleteEventFolderResponseDto,
  })
  @Delete('/delete/:id')
  async deleteEventFolder(
    @Param('id', new ExistingRecord('eventFolder')) id: string,
  ): Promise<z.infer<typeof deleteEventFolderResponseSchema>> {
    return await this.eventFolderService.deleteEventFolder(id);
  }
}
