import { translate } from '@/i18n/translate';
import { ErrorDto } from '@/shared/errors/errorType';
import { ExistingRecord } from '@/shared/validation/checkExistingRecord';
import { Controller, Get, Param } from '@nestjs/common';
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
  @Get('/generate-pdf/:id')
  async generatePdf(
    @Param('id', new ExistingRecord('ticket')) id: string,
  ): Promise<GeneratePdfResponseDto> {
    return this.pdfService.generatePdfTicket(id);
  }
}
