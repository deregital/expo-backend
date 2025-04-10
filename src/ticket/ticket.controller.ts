import { Roles } from '@/auth/decorators/rol.decorator';
import { JwtGuard } from '@/auth/guards/jwt.guard';
import { RoleGuard } from '@/auth/guards/role.guard';
import { EventService } from '@/event/event.service';
import { translate } from '@/i18n/translate';
import { MailService } from '@/mail/mail.service';
import {
  Profile,
  ProfileWithoutPassword,
} from '@/mi-expo/decorators/profile.decorator';
import { ErrorDto } from '@/shared/errors/errorType';
import { decryptString } from '@/shared/utils/utils';
import { ExistingRecord } from '@/shared/validation/checkExistingRecord';
import { TagService } from '@/tag/tag.service';
import { TicketGroupService } from '@/ticket-group/ticket-group.service';
import {
  CreateManyTicketDto,
  CreateManyTicketResponseDto,
  createManyTicketResponseSchema,
} from '@/ticket/dto/create-many-ticket.dto';
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
  ScanTicketDto,
  ScanTicketResponseDto,
  scanTicketResponseSchema,
} from '@/ticket/dto/scan-ticket.dto';
import {
  SendEmailResponseDto,
  sendEmailResponseSchema,
} from '@/ticket/dto/send-email.dto';
import {
  UpdateTicketDto,
  UpdateTicketResponseDto,
  updateTicketResponseSchema,
} from '@/ticket/dto/update-ticket.dto';
import { TicketService } from '@/ticket/ticket.service';
import {
  Body,
  ConflictException,
  Controller,
  Delete,
  Get,
  Header,
  NotFoundException,
  Param,
  Patch,
  Post,
  Res,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import {
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import type { Response } from 'express';
import z from 'zod';
import { Role, TicketType } from '~/types/prisma-schema';
import {
  GetPdfsByTicketGroupResponseDto,
  getPdfsByTicketGroupResponseSchema,
} from './dto/get-pdfs-by-group-ticket.dto';

@Roles(Role.ADMIN, Role.USER)
@UseGuards(JwtGuard, RoleGuard)
@Controller('ticket')
export class TicketController {
  constructor(
    private readonly ticketService: TicketService,
    private readonly eventService: EventService,
    private readonly mailService: MailService,
    private readonly tagService: TagService,
    private readonly ticketGroupService: TicketGroupService,
  ) {}

  @Roles(Role.ADMIN, Role.MI_EXPO)
  @ApiNotFoundResponse({
    description: translate('route.ticket.create.event-not-found'),
    type: ErrorDto,
  })
  @ApiConflictResponse({
    description: translate('route.ticket.create.max-tickets-reached'),
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
    const maxTicketsToEmit = event.eventTickets.find(
      (et) => et.type === createTicketDto.type,
    )?.amount;

    const ticketsEmitted =
      await this.ticketService.findEmittedAmountByEventAndType(
        createTicketDto.eventId,
        createTicketDto.type,
      );

    const hasMaxTickets =
      maxTicketsToEmit !== null && maxTicketsToEmit !== undefined;

    if (hasMaxTickets && ticketsEmitted >= maxTicketsToEmit) {
      throw new ConflictException(
        translate('route.ticket.create.max-tickets-reached'),
      );
    }

    const seat =
      createTicketDto.type === TicketType.SPECTATOR
        ? (await this.ticketService.getHighestSeatForEvent(
            createTicketDto.eventId,
          )) + 1
        : null;

    if (createTicketDto.type === TicketType.PARTICIPANT) {
      if (!createTicketDto.profileId) {
        // No debería pasar nunca, pero por si acaso
        throw new ConflictException([
          translate('route.ticket.create.profile-id-required'),
        ]);
      }
      this.tagService.massiveAllocation({
        profileIds: [createTicketDto.profileId],
        tagIds: [event.tagConfirmedId],
      });
    }

    return await this.ticketService.create({ ...createTicketDto, seat });
  }

  @Roles(Role.ADMIN, Role.MI_EXPO, Role.TICKETS)
  @ApiNotFoundResponse({
    description: translate('route.ticket.create-many.event-not-found'),
    type: ErrorDto,
  })
  @ApiConflictResponse({
    description: translate('route.ticket.create-many.error'),
    type: ErrorDto,
  })
  @ApiOkResponse({
    description: translate('route.ticket.create-many.success'),
    type: CreateManyTicketResponseDto,
  })
  @Post('/create-many')
  async createMany(
    @Body() createManyTicketDto: CreateManyTicketDto,
  ): Promise<z.infer<typeof createManyTicketResponseSchema>> {
    const eventId = createManyTicketDto.tickets[0]?.eventId;
    const type = createManyTicketDto.tickets[0]?.type;
    const ticketGroupId = createManyTicketDto.tickets[0]?.ticketGroupId;
    if (!ticketGroupId) {
      throw new NotFoundException(
        translate('route.ticket.create-many.ticket-group-not-found'),
      );
    }
    if (!eventId) {
      throw new NotFoundException(
        translate('route.ticket.create-many.event-not-found'),
      );
    }
    if (!type) {
      throw new NotFoundException(
        translate('route.ticket.create-many.type-not-found'),
      );
    }
    const eventTickets = (await this.eventService.findById(eventId))
      .eventTickets;
    const eventTicketThisType = eventTickets.find((et) => et.type === type);
    const { amount: maxTicketsToEmit, price: ticketPrice } =
      eventTicketThisType ?? {};

    if (!maxTicketsToEmit) {
      throw new NotFoundException(
        translate('route.ticket.create-many.max-tickets-not-found'),
      );
    }
    const ticketsEmitted =
      await this.ticketService.findEmittedAmountByEventAndType(eventId, type);
    if (
      ticketsEmitted + createManyTicketDto.tickets.length >
      maxTicketsToEmit
    ) {
      throw new ConflictException(
        translate('route.ticket.create-many.max-tickets-reached'),
      );
    }

    const seat =
      type === TicketType.SPECTATOR
        ? (await this.ticketService.getHighestSeatForEvent(eventId)) + 1
        : null;

    // Primero, crear los ticket
    const tickets = await this.ticketService.createMany({
      tickets: createManyTicketDto.tickets.map((ticket, index) => ({
        ...ticket,
        seat: seat ? seat + index : null,
      })),
    });

    // Si el precio es null (gratuito), cambiar el estado del ticketGroup a FREE
    const isTicketFree = ticketPrice === null;

    await this.ticketGroupService.update(ticketGroupId, {
      status: isTicketFree ? 'FREE' : undefined,
    });

    return tickets;
  }
  @Roles(Role.ADMIN, Role.MI_EXPO, Role.TICKETS)
  @ApiOkResponse({
    description: translate('route.ticket.get-pdfs-by-ticket-group.success'),
    type: GetPdfsByTicketGroupResponseDto,
  })
  @ApiNotFoundResponse({
    description: translate('route.ticket.get-pdfs-by-ticket-group.not-found'),
    type: ErrorDto,
  })
  @ApiConflictResponse({
    description: translate('route.ticket.get-pdfs-by-ticket-group.error'),
    type: ErrorDto,
  })
  @Get('get-pdfs-by-ticket-group/:ticketGroupId')
  async getPdfsByTicketGroup(
    @Param('ticketGroupId', new ExistingRecord('ticketGroup'))
    ticketGroupId: string,
  ): Promise<z.infer<typeof getPdfsByTicketGroupResponseSchema>> {
    const ticketGroup = await this.ticketGroupService.findGroup(ticketGroupId);
    if (!ticketGroup) {
      throw new NotFoundException([
        translate('route.ticket.get-pdfs-by-ticket-group.not-found'),
      ]);
    } else if (ticketGroup.status !== 'PAID' && ticketGroup.status !== 'FREE') {
      throw new ConflictException([
        translate('route.ticket.get-pdfs-by-ticket-group.error'),
      ]);
    }
    const tickets =
      await this.ticketService.findByTicketGroupWithEvent(ticketGroupId);
    const pdfs = await this.ticketService.generateMultiplePdfTickets(tickets);
    const response = {
      pdfs: await Promise.all(
        pdfs.map(async (item) => ({
          ticketId: item.ticketId,
          pdfBase64: Buffer.from(await item.pdf.arrayBuffer()).toString(
            'base64',
          ),
        })),
      ),
    };
    return response;
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
    const { ticket } = await this.ticketService.findById(id);
    if (ticket.type === TicketType.PARTICIPANT) {
      const profile = ticket.profile;
      if (!profile) {
        throw new NotFoundException([
          translate('route.ticket.delete.participant-not-found'),
        ]);
      }
      const event = await this.eventService.findById(ticket.eventId);
      await this.tagService.massiveDeallocation({
        profileIds: [profile.id],
        tagIds: [event.tagConfirmedId],
      });
    }

    return await this.ticketService.delete(id);
  }

  @Roles(Role.ADMIN, Role.USER, Role.MI_EXPO)
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
    const { ticket } = await this.ticketService.findById(id);
    if (!ticket) {
      throw new NotFoundException(
        translate('route.pdf.generate-pdf.not-found'),
      );
    }
    const pdfBlob = await this.ticketService.generatePdfTicket(ticket);
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
  @Get('/find-ticket/*id')
  async findTicket(
    @Param('id') id: string,
  ): Promise<z.infer<typeof findTicketResponseSchema>> {
    const decryptedTicketId = decryptString(id);
    return this.ticketService.findTicket(decryptedTicketId);
  }

  @Roles(Role.ADMIN, Role.USER)
  @ApiNotFoundResponse({
    description: translate('route.ticket.scan.not-found'),
    type: ErrorDto,
  })
  @ApiConflictResponse({
    description: translate('route.ticket.scan.already-scanned'),
    type: ErrorDto,
  })
  @ApiOkResponse({
    description: translate('route.ticket.scan.success'),
    type: ScanTicketResponseDto,
  })
  @Post('/scan')
  async scanTicket(
    @Body() scanTicketDto: ScanTicketDto,
  ): Promise<z.infer<typeof scanTicketResponseSchema>> {
    const decryptedTicketId = decryptString(scanTicketDto.ticketBarcode);
    const ticket = await this.ticketService.findTicket(decryptedTicketId);
    if (!ticket) {
      throw new NotFoundException([translate('route.ticket.scan.not-found')]);
    }
    if (ticket.scanned) {
      throw new ConflictException([
        translate('route.ticket.scan.already-scanned'),
      ]);
    }
    const event = await this.eventService.findById(ticket.eventId);
    if (!event) {
      throw new NotFoundException([
        translate('route.ticket.scan.event-not-found'),
      ]);
    }
    const scannedTicket = await this.ticketService.scanTicket(ticket.id);

    if (scannedTicket.type === TicketType.PARTICIPANT) {
      const profileId = scannedTicket.profileId;
      if (!profileId) {
        throw new NotFoundException([
          translate('route.ticket.scan.participant-not-found'),
        ]);
      }
      await this.tagService.massiveAllocation({
        profileIds: [profileId],
        tagIds: [event.tagAssistedId],
      });
    }

    return { success: true };
  }

  @Roles(Role.ADMIN, Role.MI_EXPO)
  @ApiNotFoundResponse({
    description: translate('route.ticket.send-email.not-found'),
    type: ErrorDto,
  })
  @ApiOkResponse({
    description: translate('route.ticket.send-email.success'),
    type: SendEmailResponseDto,
  })
  @ApiUnauthorizedResponse({
    description: translate('route.ticket.send-email.unauthorized'),
    type: ErrorDto,
  })
  @Post('/send-email/:id')
  async sendEmail(
    @Param('id', new ExistingRecord('ticket')) id: string,
    @Profile() profile: ProfileWithoutPassword,
  ): Promise<z.infer<typeof sendEmailResponseSchema>> {
    const { ticket } = await this.ticketService.findById(id);
    const event = await this.eventService.findById(ticket.eventId);

    if (profile && ticket.profile && profile.id !== ticket.profile.id) {
      throw new UnauthorizedException([
        translate('route.ticket.send-email.unauthorized'),
      ]);
    }

    const pdf = await this.ticketService.generatePdfTicket(ticket);
    const mailId = await this.mailService.sendTicket({ ...ticket, event }, pdf);

    return { mailId: mailId };
  }
}
