import { translate } from '@/i18n/translate';
import { PRISMA_SERVICE } from '@/prisma/constants';
import { PrismaService } from '@/prisma/prisma.service';
import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import * as fastCsv from 'fast-csv';
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

  // async exportAllTablesToZip(): Promise<Buffer> {
  //   try {
  //     const today = new Date().toISOString().replace(/[:.]/g, '-');
  //     const zip = new JSZip();
  //     const workbook = new ExcelJS.Workbook();

  //     for (const table in this.prisma) {
  //       if (table.charAt(0) === '_' || table.charAt(0) === '$') {
  //         continue;
  //       }
  //       // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //       const tableData = ((await this.prisma[table]) as any).findMany();

  //       let csvData = '';
  //       const worksheet = workbook.addWorksheet(table);

  //       if (tableData.length > 0) {
  //         worksheet.addRow(Object.keys(tableData[0]));
  //         tableData.forEach((row: Record<string, unknown>) => {
  //           csvStream.write(row);
  //           worksheet.addRow(Object.values(row));
  //         });

  //         const csvStream = fastCsv.format({ headers: true });
  //         csvStream.on('data', (chunk: Buffer) => {
  //           csvData += chunk.toString();
  //         });
  //         csvStream.end();

  //         await new Promise<void>((resolve) => {
  //           csvStream.on('end', resolve);
  //         });

  //         zip.file(`${today}-${table}.csv`, csvData);
  //       }
  //     }

  //     const excelBuffer = await workbook.xlsx.writeBuffer();
  //     zip.file(`${today}_Database.xlsx`, excelBuffer);

  //     const zipBlob = await zip.generateAsync({ type: 'nodebuffer' });
  //     return Buffer.from(zipBlob);
  //   } catch (error) {
  //     console.error('Error exporting to ZIP:', error);
  //     throw new HttpException(
  //       translate('route.csv.downloadAllTables.error'),
  //       HttpStatus.INTERNAL_SERVER_ERROR,
  //     );
  //   }
  // }
}
