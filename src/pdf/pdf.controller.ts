import { translate } from '@/i18n/translate';
import { ErrorDto } from '@/shared/errors/errorType';
import { ExistingRecord } from '@/shared/validation/checkExistingRecord';
import { Controller, Get, Header, Param } from '@nestjs/common';
import { ApiNotFoundResponse, ApiOkResponse } from '@nestjs/swagger';
import { GeneratePdfResponseDto } from './dto/generate-pdf.dto';
import { PdfService } from './pdf.service';
@Controller('pdf')
export class PdfController {
  constructor(private readonly pdfService: PdfService) {}

  @ApiOkResponse({
    description: translate('route.pdf.generate-pdf.success'),
    type: GeneratePdfResponseDto,
  })
  @ApiNotFoundResponse({
    description: translate('route.pdf.generate-pdf.not-found'),
    type: ErrorDto,
  })
  @Header('Content-Type', 'application/pdf')
  @Get('/generate-pdf/:id')
  async generatePdf(
    @Param('id', new ExistingRecord('ticket')) id: string,
  ): Promise<GeneratePdfResponseDto> {
    const pdf = await this.pdfService.generatePdfTicket(id);
    return pdf;
  }
}
