import { PRISMA_SERVICE } from '@/prisma/constants';
import { PrismaService } from '@/prisma/prisma.service';
import { Inject, Injectable } from '@nestjs/common';
import { BLANK_PDF, Template } from '@pdfme/common';
import { generate } from '@pdfme/generator';
import { line, text } from '@pdfme/schemas';

@Injectable()
export class PdfService {
  constructor(@Inject(PRISMA_SERVICE) private readonly prisma: PrismaService) {}

  async generatePdfTicket(id: string): Promise<Buffer> {
    const ticket = await this.prisma.ticket.findUnique({
      where: { id },
      include: {
        event: true,
      },
    });

    const template: Template = {
      basePdf: BLANK_PDF,
      schemas: [
        [
          {
            name: 'event_name',
            type: 'text',
            position: { x: 0, y: 0 },
            width: 40,
            height: 10,
          },
          {
            name: 'mail_ticket',
            type: 'text',
            position: { x: 200, y: 200 },
            width: 60,
            height: 40,
          },
          {
            name: 'fullName_ticket',
            type: 'text',
            position: { x: 100, y: 100 },
            width: 50,
            height: 50,
          },
        ],
      ],
    };

    const inputs = [
      {
        event_name: ticket!.event.name,
        mail_ticket: ticket!.mail,
        fullName_ticket: ticket!.fullName,
      },
    ];

    const plugins = {
      text,
      line,
    };

    const pdf = await generate({ template, inputs, plugins });
    return Buffer.from(pdf.buffer);
  }
}
