import { translate } from '@/i18n/translate';
import {
  FindTicketDto,
  FindTicketResponseDto,
  findTicketResponseSchema,
} from '@/pdf/dto/find-ticket.dto';
import { PdfService } from '@/pdf/pdf.service';
import { ErrorDto } from '@/shared/errors/errorType';
import { ExistingRecord } from '@/shared/validation/checkExistingRecord';
import {
  Body,
  Controller,
  Get,
  Header,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import {
  ApiConflictResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
} from '@nestjs/swagger';
import { Response } from 'express';
import z from 'zod';
@Controller('pdf')
export class PdfController {
  constructor(private readonly pdfService: PdfService) {}

  @ApiOkResponse({
    description: translate('route.pdf.generate-pdf.success'),
    type: 'arraybuffer',
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
  ) {
    const encryptedTicketId = await this.pdfService.encryptTicketId(id);
    const pdfBlob = await this.pdfService.generatePdfTicket(
      id,
      encryptedTicketId,
    );
    const buffer = Buffer.from(await pdfBlob.arrayBuffer());

    res.setHeader(
      'Content-Disposition',
      `attachment; filename="ticket-${id}.pdf"`,
    );
    res.send(buffer);
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
  @Post('/find-ticket')
  async findTicket(
    @Body() body: FindTicketDto,
  ): Promise<z.infer<typeof findTicketResponseSchema>> {
    return this.pdfService.findTicket(body.barcode_value);
  }
}
