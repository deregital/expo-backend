import { Roles } from '@/auth/decorators/rol.decorator';
import { JwtGuard } from '@/auth/guards/jwt.guard';
import { RoleGuard } from '@/auth/guards/role.guard';
import { EventService } from '@/event/event.service';
import { translate } from '@/i18n/translate';
import { ErrorDto } from '@/shared/errors/errorType';
import { decryptString } from '@/shared/utils/utils';
import { ExistingRecord } from '@/shared/validation/checkExistingRecord';
import {
  CreateTicketDto,
  CreateTicketResponseDto,
  createTicketResponseSchema,
} from '@/ticket/dto/create-ticket.dto';
import {
  DeleteTicketResponseDto,
  deleteTicketResponseSchema,
} from '@/ticket/dto/delete-ticket.dto';
import {
  FindAllTicketsResponseDto,
  findAllTicketsResponseSchema,
} from '@/ticket/dto/find-all-tickets.dto';
import {
  FindByEventTicketResponseDto,
  findByEventTicketResponseSchema,
} from '@/ticket/dto/find-by-event-ticket.dto';
import {
  FindByIdTicketResponseDto,
  findByIdTicketResponseSchema,
} from '@/ticket/dto/find-by-id-ticket.dto';
import {
  FindByMailTicketResponseDto,
  findByMailTicketResponseSchema,
} from '@/ticket/dto/find-by-mail-ticket.dto';
import {
  FindByProfileIdTicketResponseDto,
  findByProfileIdTicketResponseSchema,
} from '@/ticket/dto/find-by-profile-id-ticket.dto';
import {
  FindTicketResponseDto,
  findTicketResponseSchema,
} from '@/ticket/dto/find-ticket.dto';
import {
  UpdateTicketDto,
  UpdateTicketResponseDto,
  updateTicketResponseSchema,
} from '@/ticket/dto/update-ticket.dto';
import { TicketService } from '@/ticket/ticket.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  NotFoundException,
  Param,
  Patch,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import {
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
} from '@nestjs/swagger';
import { Response } from 'express';
import z from 'zod';
import { Role } from '~/types/prisma-schema';

@Roles(Role.ADMIN, Role.USER)
@UseGuards(JwtGuard, RoleGuard)
@Controller('ticket')
export class TicketController {
  constructor(
    private readonly ticketService: TicketService,
    private readonly eventService: EventService,
  ) {}

  @Roles(Role.ADMIN, Role.MI_EXPO)
  @ApiNotFoundResponse({
    description: translate('route.ticket.create.event-not-found'),
    type: ErrorDto,
  })
  @ApiCreatedResponse({
    description: translate('route.ticket.create.success'),
    type: CreateTicketResponseDto,
  })
  @Post('/create')
  async create(
    @Body() createTicketDto: CreateTicketDto,
  ): Promise<z.infer<typeof createTicketResponseSchema>> {
    const event = await this.eventService.findById(createTicketDto.eventId);
    if (!event) {
      throw new NotFoundException(
        translate('route.ticket.create.event-not-found'),
      );
    }
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
  @Get('/find-by-id/:id')
  async findById(
    @Param('id', new ExistingRecord('ticket')) id: string,
  ): Promise<z.infer<typeof findByIdTicketResponseSchema>> {
    return await this.ticketService.findById(id);
  }

  @ApiOkResponse({
    description: translate('route.ticket.find-by-mail.success'),
    type: FindByMailTicketResponseDto,
  })
  @Get('/find-by-mail/:mail')
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
  @Get('/find-by-event/:eventId')
  async findByEvent(
    @Param('eventId', new ExistingRecord('event')) eventId: string,
  ): Promise<z.infer<typeof findByEventTicketResponseSchema>> {
    return await this.ticketService.findByEvent(eventId);
  }

  @Roles(Role.ADMIN, Role.USER, Role.MI_EXPO)
  @ApiOkResponse({
    description: translate('route.ticket.find-by-id.success'),
    type: FindByProfileIdTicketResponseDto,
  })
  @ApiNotFoundResponse({
    description: translate('route.ticket.find-by-id.not-found'),
    type: ErrorDto,
  })
  @Get('/find-by-profile-id/:profileId')
  async findByProfileId(
    @Param('profileId', new ExistingRecord('profile')) profileId: string,
  ): Promise<z.infer<typeof findByProfileIdTicketResponseSchema>> {
    return await this.ticketService.findByProfileId(profileId);
  }

  @ApiOkResponse({
    description: translate('route.ticket.update.success'),
    type: UpdateTicketResponseDto,
  })
  @ApiNotFoundResponse({
    description: translate('route.ticket.update.not-found'),
    type: ErrorDto,
  })
  @Patch('/update/:id')
  async update(
    @Param('id', new ExistingRecord('ticket')) id: string,
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
  @Delete('/delete/:id')
  async delete(
    @Param('id', new ExistingRecord('ticket')) id: string,
  ): Promise<z.infer<typeof deleteTicketResponseSchema>> {
    return await this.ticketService.delete(id);
  }

  @ApiOkResponse({
    description: translate('route.pdf.generate-pdf.success'),
    type: Buffer,
  })
  @ApiNotFoundResponse({
    description: translate('route.pdf.generate-pdf.not-found'),
    type: ErrorDto,
  })
  @Header('Content-Type', 'application/pdf')
  @Get('/generate-pdf/:id')
  async generatePdf(
    @Param('id', new ExistingRecord('ticket')) id: string,
    @Res() res: Response,
  ): Promise<void> {
    const pdfBlob = await this.ticketService.generatePdfTicket(id);
    const buffer = Buffer.from(await pdfBlob.arrayBuffer());

    res.setHeader(
      'Content-Disposition',
      `attachment; filename="ticket-${id}.pdf"`,
    );
    res.send(buffer);
    return;
  }

  @ApiOkResponse({
    description: translate('route.pdf.find-ticket.success'),
    type: FindTicketResponseDto,
  })
  @ApiNotFoundResponse({
    description: translate('route.pdf.find-ticket.not-found'),
    type: ErrorDto,
  })
  @ApiConflictResponse({
    description: translate('route.pdf.find-ticket.invalid-barcode'),
    type: ErrorDto,
  })
  @ApiInternalServerErrorResponse({
    description: translate('route.pdf.find-ticket.error'),
    type: ErrorDto,
  })
  @Get('/find-ticket/:id(*)')
  async findTicket(
    @Param('id') id: string,
  ): Promise<z.infer<typeof findTicketResponseSchema>> {
    const decryptedTicketId = decryptString(id);
    return this.ticketService.findTicket(decryptedTicketId);
  }
}
