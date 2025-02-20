import { Roles } from '@/auth/decorators/rol.decorator';
import { JwtGuard } from '@/auth/guards/jwt.guard';
import { RoleGuard } from '@/auth/guards/role.guard';
import { translate } from '@/i18n/translate';
import { ErrorDto } from '@/shared/errors/errorType';
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
import { Role } from '~/types/prisma-schema';
import {
  CreateTicketDto,
  CreateTicketResponseDto,
  createTicketResponseSchema,
} from './dto/create-ticket.dto';
import {
  DeleteTicketResponseDto,
  deleteTicketResponseSchema,
  FindAllTicketsResponseDto,
  findAllTicketsResponseSchema,
  FindByEventTicketResponseDto,
  findByEventTicketResponseSchema,
  FindByIdTicketResponseDto,
  findByIdTicketResponseSchema,
  FindByMailTicketResponseDto,
  findByMailTicketResponseSchema,
  UpdateTicketDto,
  UpdateTicketResponseDto,
  updateTicketResponseSchema,
} from './exports';
import { TicketService } from './ticket.service';

@Roles(Role.ADMIN, Role.USER)
@UseGuards(JwtGuard, RoleGuard)
@Controller('ticket')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @ApiCreatedResponse({
    description: translate('route.ticket.create.success'),
    type: CreateTicketResponseDto,
  })
  @Post('/create')
  async create(
    @Body() createTicketDto: CreateTicketDto,
  ): Promise<z.infer<typeof createTicketResponseSchema>> {
    return await this.ticketService.create(createTicketDto);
  }

  @ApiOkResponse({
    description: translate('route.ticket.find-all.success'),
    type: FindAllTicketsResponseDto,
  })
  @Get('/all')
  async findAll(): Promise<z.infer<typeof findAllTicketsResponseSchema>> {
    return await this.ticketService.findAll();
  }

  @ApiOkResponse({
    description: translate('route.ticket.find-by-id.success'),
    type: FindByIdTicketResponseDto,
  })
  @ApiNotFoundResponse({
    description: translate('route.ticket.find-by-id.not-found'),
    type: ErrorDto,
  })
  @Get('/:id')
  async findById(
    @Param('id') id: string,
  ): Promise<z.infer<typeof findByIdTicketResponseSchema>> {
    return await this.ticketService.findById(id);
  }

  @ApiOkResponse({
    description: translate('route.ticket.find-by-mail.success'),
    type: FindByMailTicketResponseDto,
  })
  @ApiNotFoundResponse({
    description: translate('route.ticket.find-by-mail.not-found'),
    type: ErrorDto,
  })
  @Get('/mail/:mail')
  async findByMail(
    @Param('mail') mail: string,
  ): Promise<z.infer<typeof findByMailTicketResponseSchema>> {
    return await this.ticketService.findByMail(mail);
  }

  @ApiOkResponse({
    description: translate('route.ticket.find-by-event.success'),
    type: FindByEventTicketResponseDto,
  })
  @ApiNotFoundResponse({
    description: translate('route.ticket.find-by-event.not-found'),
    type: ErrorDto,
  })
  @Get('/event/:eventId')
  async findByEvent(
    @Param('eventId') eventId: string,
  ): Promise<z.infer<typeof findByEventTicketResponseSchema>> {
    return await this.ticketService.findByEvent(eventId);
  }

  @ApiOkResponse({
    description: translate('route.ticket.update.success'),
    type: UpdateTicketResponseDto,
  })
  @ApiNotFoundResponse({
    description: translate('route.ticket.update.not-found'),
    type: ErrorDto,
  })
  @ApiConflictResponse({
    description: translate('route.ticket.update.conflict'),
    type: ErrorDto,
  })
  @Patch('/:id')
  async update(
    @Param('id') id: string,
    @Body() updateTicketDto: UpdateTicketDto,
  ): Promise<z.infer<typeof updateTicketResponseSchema>> {
    return await this.ticketService.update(id, updateTicketDto);
  }

  @ApiOkResponse({
    description: translate('route.ticket.delete.success'),
    type: DeleteTicketResponseDto,
  })
  @ApiNotFoundResponse({
    description: translate('route.ticket.delete.not-found'),
    type: ErrorDto,
  })
  @Delete('/:id')
  async delete(
    @Param('id') id: string,
  ): Promise<z.infer<typeof deleteTicketResponseSchema>> {
    return await this.ticketService.delete(id);
  }
}
