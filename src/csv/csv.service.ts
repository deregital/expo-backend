import { translate } from '@/i18n/translate';
import { PRISMA_SERVICE } from '@/prisma/constants';
import { PrismaService } from '@/prisma/prisma.service';
import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import ExcelJS from 'exceljs';
import * as fastCsv from 'fast-csv';
import JSZip from 'jszip';
import { Readable } from 'stream';

@Injectable()
export class CsvService {
  constructor(@Inject(PRISMA_SERVICE) private prisma: PrismaService) {}

  async exportModelosToCsv(): Promise<Readable> {
    try {
      const profiles = await this.prisma.profile.findMany();
      const csvStream = fastCsv.format({ headers: true });
      const readableStream = new Readable().wrap(csvStream);

      profiles.forEach((row) => csvStream.write(row));
      csvStream.end();

      return readableStream;
    } catch (error) {
      throw new InternalServerErrorException([
        translate('route.csv.downloadModelos.error'),
      ]);
    }
  }

  async exportAllTables(): Promise<Buffer> {
    try {
      const today =
        new Date().toISOString().split('.')[0]!.replaceAll(':', '_') + 'Z';
      const zip = new JSZip();
      const workbook = new ExcelJS.Workbook();

      for (const table in this.prisma) {
        const dataTables = [];
        if (
          table.charAt(0) === '_' ||
          table.charAt(0) === '$' ||
          ['enums'].includes(table)
        ) {
          continue;
        }
        if (table === 'profile' || table === 'account') {
          dataTables.push(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            await (this.prisma as any)[table].findMany({
              include: {
                tags: true,
                comments: true,
              },
            }),
          );
          dataTables.push(table);
        } else {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          dataTables.push(await (this.prisma as any)[table].findMany());
          dataTables.push(table);
        }

        for (let i = 0; i < dataTables.length; i += 2) {
          let csvData = '';
          const worksheet = workbook.addWorksheet(dataTables[i + 1]);

          const csvStream = fastCsv.format({ headers: true });

          csvStream.on('data', (chunk: unknown) => {
            csvData += chunk;
          });
          worksheet.addRow(
            dataTables[i][0] ? Object.keys(dataTables[i][0]) : undefined,
          );
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          dataTables[i].forEach((row: any) => {
            row.tags = row.tags
              ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
                row.tags.map((etiqueta: any) => etiqueta.id).join('+')
              : undefined;
            row.comments = row.comments
              ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
                row.comments.map((comment: any) => comment.id).join('+')
              : undefined;
            csvStream.write(row);
            worksheet.addRow(Object.values(row));
          });

          csvStream.end();

          await new Promise<void>((resolve) => {
            csvStream.on('end', () => {
              resolve();
            });
          });

          zip.file(`${today}-${dataTables[i + 1]}.csv`, csvData);
        }
      }

      const excelBuffer = await workbook.xlsx.writeBuffer();
      zip.file(`${today}_Database.xlsx`, excelBuffer);
      const zipBlob = await zip.generateAsync({ type: 'blob' });
      const zipData = await zipBlob.arrayBuffer();
      return Buffer.from(zipData);
    } catch (error) {
      console.error('Error exporting to ZIP:', error);
      throw new InternalServerErrorException([
        translate('route.csv.downloadAllTables.error'),
      ]);
    }
  }
}
