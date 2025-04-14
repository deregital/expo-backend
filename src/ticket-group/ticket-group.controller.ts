import {
  Body,
  ConflictException,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { Roles } from '@/auth/decorators/rol.decorator';
import { JwtGuard } from '@/auth/guards/jwt.guard';
import { RoleGuard } from '@/auth/guards/role.guard';
import { EventService } from '@/event/event.service';
import { translate } from '@/i18n/translate';
import { ErrorDto } from '@/shared/errors/errorType';
import { ExistingRecord } from '@/shared/validation/checkExistingRecord';
import {
  CreateTicketGroupDto,
  CreateTicketGroupResponseDto,
  createTicketGroupResponseSchema,
} from '@/ticket-group/dto/create-ticket-group.dto';
import {
  DeleteTicketGroupResponseDto,
  deleteTicketGroupResponseSchema,
} from '@/ticket-group/dto/delete-ticket-group.dto';
import {
  FindTicketsByEventDto,
  findTicketsByEventResponseSchema,
} from '@/ticket-group/dto/find-tickets-by-event.dto';
import {
  UpdateTicketGroupDto,
  UpdateTicketGroupResponseDto,
  updateTicketGroupResponseSchema,
} from '@/ticket-group/dto/update-ticket-group.dto';
import { TicketGroupService } from '@/ticket-group/ticket-group.service';
import { TicketService } from '@/ticket/ticket.service';
import { UseGuards } from '@nestjs/common';
import {
  ApiConflictResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
} from '@nestjs/swagger';
import z from 'zod';
import { Role, TicketType } from '~/types/prisma-schema';
import {
  findGroupResponseSchema,
  FindGroupTicketGroupDto,
} from './dto/find-group-ticket-group.dto';

@Roles(Role.ADMIN, Role.USER, Role.TICKETS)
@UseGuards(JwtGuard, RoleGuard)
@Controller('ticket-group')
export class TicketGroupController {
  constructor(
    private readonly ticketGroupService: TicketGroupService,
    private readonly eventService: EventService,
    private readonly ticketService: TicketService,
  ) {}

  @ApiOkResponse({
    description: translate('route.ticket-group.create.success'),
    type: CreateTicketGroupResponseDto,
  })
  @ApiNotFoundResponse({
    description: translate('route.ticket-group.create.event-not-found'),
    type: ErrorDto,
  })
  @ApiConflictResponse({
    description: translate('route.ticket-group.create.conflict'),
    type: ErrorDto,
  })
  @Post('/create')
  async create(
    @Body() createTicketGroupDto: CreateTicketGroupDto,
  ): Promise<z.infer<typeof createTicketGroupResponseSchema>> {
    const event = await this.eventService.findById(
      createTicketGroupDto.eventId,
    );
    if (!event) {
      throw new NotFoundException(
        translate('route.ticket-group.create.event-not-found'),
      );
    }
    const maxTicketsToEmit = event.eventTickets.find(
      (et) => et.type === TicketType.SPECTATOR,
    )?.amount;
    if (!maxTicketsToEmit) {
      throw new NotFoundException(
        translate('route.ticket.create-many.max-tickets-not-found'),
      );
    }
    const ticketsEmitted =
      (
        await this.ticketGroupService.findTicketsByEvent(
          createTicketGroupDto.eventId,
        )
      )._sum.amountTickets ?? 0;
    if (
      ticketsEmitted + createTicketGroupDto.amountTickets >
      maxTicketsToEmit
    ) {
      throw new ConflictException(
        translate('route.ticket.create-many.max-tickets-reached'),
      );
    }
    return this.ticketGroupService.create(createTicketGroupDto);
  }

  @ApiOkResponse({
    description: translate('route.ticket-group.find-tickets-by-event.success'),
    type: FindTicketsByEventDto,
  })
  @ApiNotFoundResponse({
    description: translate(
      'route.ticket-group.find-tickets-by-event.not-found',
    ),
    type: ErrorDto,
  })
  @Get('/find-tickets-by-event/:id')
  async findTicketsByEvent(
    @Param('id', new ExistingRecord('event')) id: string,
  ): Promise<z.infer<typeof findTicketsByEventResponseSchema>> {
    await this.ticketGroupService.deleteBookedTicketsGroup(id);
    const ticketsEmitted =
      (await this.ticketGroupService.findTicketsByEvent(id))._sum
        .amountTickets ?? 0;

    return { tickets: ticketsEmitted };
  }

  @ApiOkResponse({
    description: translate('route.ticket-group.find-group.success'),
    type: FindGroupTicketGroupDto,
  })
  @ApiNotFoundResponse({
    description: translate('route.ticket-group.find-group.not-found'),
    type: ErrorDto,
  })
  @ApiConflictResponse({
    description: translate('route.ticket-group.find-group.conflict'),
    type: ErrorDto,
  })
  @Get('/find-group/:id')
  async findGroup(
    @Param('id', new ExistingRecord('ticketGroup')) id: string,
  ): Promise<z.infer<typeof findGroupResponseSchema>> {
    return this.ticketGroupService.findGroup(id);
  }

  @ApiOkResponse({
    description: translate('route.ticket-group.update.success'),
    type: UpdateTicketGroupResponseDto,
  })
  @ApiNotFoundResponse({
    description: translate('route.ticket-group.update.not-found'),
    type: ErrorDto,
  })
  @Patch('/update/:id')
  async update(
    @Param('id', new ExistingRecord('ticketGroup')) id: string,
    @Body() updateTicketGroupDto: UpdateTicketGroupDto,
  ): Promise<z.infer<typeof updateTicketGroupResponseSchema>> {
    return this.ticketGroupService.update(id, updateTicketGroupDto);
  }

  @ApiOkResponse({
    description: translate('route.ticket-group.delete.success'),
    type: DeleteTicketGroupResponseDto,
  })
  @ApiNotFoundResponse({
    description: translate('route.ticket-group.delete.not-found'),
    type: ErrorDto,
  })
  @Delete('/delete/:id')
  async delete(
    @Param('id', new ExistingRecord('ticketGroup')) id: string,
  ): Promise<z.infer<typeof deleteTicketGroupResponseSchema>> {
    return this.ticketGroupService.delete(id);
  }
}
