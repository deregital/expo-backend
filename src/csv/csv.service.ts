import { translate } from '@/i18n/translate';
import { PrismaService } from '@/prisma/prisma.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import ExcelJS from 'exceljs';
import * as fastCsv from 'fast-csv';
import JSZip from 'jszip';
import { Account, Profile } from '~/types/prisma-schema';

@Injectable()
export class CsvService {
  constructor(private prisma: PrismaService) {}

  private async validateUserPassword(
    password: string,
  ): Promise<Account | null> {
    const user = await this.prisma.account.findFirst({
      where: { password },
    });
    return user;
  }

  async exportModelosToCsv(password: string): Promise<string> {
    const user = await this.validateUserPassword(password);

    if (!user) {
      throw new HttpException(
        translate('route.csv.downloadModelos.unauthorized'),
        HttpStatus.UNAUTHORIZED,
      );
    }

    try {
      const modelos = await this.prisma.profile.findMany();
      let csvData = '';

      const csvStream = fastCsv.format({ headers: true });
      csvStream.on('data', (chunk: Buffer) => {
        csvData += chunk.toString();
      });

      modelos.forEach((row: Profile) => {
        csvStream.write(row);
      });
      csvStream.end();

      await new Promise<void>((resolve) => {
        csvStream.on('end', () => {
          resolve();
        });
      });

      return csvData;
    } catch (error) {
      console.error('Error exporting models to CSV:', error);
      throw new HttpException(
        translate('route.csv.downloadModelos.error'),
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async exportAllTablesToZip(password: string): Promise<Buffer> {
    const user = await this.validateUserPassword(password);

    if (!user) {
      throw new HttpException(
        translate('route.csv.downloadAllTables.unauthorized'),
        HttpStatus.UNAUTHORIZED,
      );
    }

    try {
      const today = new Date().toISOString().replace(/[:.]/g, '-');
      const zip = new JSZip();
      const workbook = new ExcelJS.Workbook();

      for (const table in this.prisma) {
        if (table.startsWith('_') || table.startsWith('$')) continue;

        const tableData = await this.prisma[table].findMany();

        let csvData = '';
        const worksheet = workbook.addWorksheet(table);

        if (tableData.length > 0) {
          worksheet.addRow(Object.keys(tableData[0]));
          tableData.forEach((row: Record<string, unknown>) => {
            csvStream.write(row);
            worksheet.addRow(Object.values(row));
          });

          const csvStream = fastCsv.format({ headers: true });
          csvStream.on('data', (chunk: Buffer) => {
            csvData += chunk.toString();
          });
          csvStream.end();

          await new Promise<void>((resolve) => {
            csvStream.on('end', resolve);
          });

          zip.file(`${today}-${table}.csv`, csvData);
        }
      }

      const excelBuffer = await workbook.xlsx.writeBuffer();
      zip.file(`${today}_Database.xlsx`, excelBuffer);

      const zipBlob = await zip.generateAsync({ type: 'nodebuffer' });
      return Buffer.from(zipBlob);
    } catch (error) {
      console.error('Error exporting to ZIP:', error);
      throw new HttpException(
        translate('route.csv.downloadAllTables.error'),
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
