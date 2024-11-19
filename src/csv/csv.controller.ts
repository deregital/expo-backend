import { AccountService } from '@/account/account.service';
import {
  Account,
  AccountWithoutPassword,
} from '@/auth/decorators/account.decorator';
import { Roles } from '@/auth/decorators/rol.decorator';
import { JwtGuard } from '@/auth/guards/jwt.guard';
import { RoleGuard } from '@/auth/guards/role.guard';
import { CsvService } from '@/csv/csv.service';
import { translate } from '@/i18n/translate';
import { ErrorDto } from '@/shared/errors/errorType';
import {
  Body,
  Controller,
  Get,
  Header,
  InternalServerErrorException,
  Response,
  StreamableFile,
  UseGuards,
} from '@nestjs/common';
import {
  ApiConflictResponse,
  ApiInternalServerErrorResponse,
  ApiResponse,
} from '@nestjs/swagger';
import { type Response as ResType } from 'express';
import { Role } from '~/types';
import { DownloadAllTablesDto } from './dto/download-all-tables.dto';
import { DownloadProfilesDto } from './dto/download-profiles.dto';

@UseGuards(JwtGuard, RoleGuard)
@Controller('csv')
export class CsvController {
  constructor(
    private readonly csvService: CsvService,
    private readonly accountService: AccountService,
  ) {}

  @Roles(Role.ADMIN, Role.USER)
  @ApiResponse({
    type: StreamableFile,
    description: translate('route.csv.download-profiles.success'),
  })
  @ApiConflictResponse({
    type: ErrorDto,
    description: translate('route.csv.download-profiles.unauthorized'),
  })
  @ApiInternalServerErrorResponse({
    type: ErrorDto,
    description: translate('route.csv.download-profiles.error'),
  })
  @Header('Content-Type', 'text/csv')
  @Get('/download-profiles')
  async downloadProfiles(
    @Body() dto: DownloadProfilesDto,
    @Account() account: AccountWithoutPassword,
    @Response() res: ResType,
  ): Promise<StreamableFile> {
    await this.accountService.checkPassword(account.id, dto.password);

    try {
      const csvStream = await this.csvService.exportModelosToCsv();

      // Generate timestamped filename
      const timestamp = this.csvService.generateTimestamp();
      const filename = `PerfilModelos_${timestamp}.csv`;

      csvStream.on('data', (chunk) => res.write(chunk));
      csvStream.on('end', () => res.end());

      res.set({
        type: 'text/csv',
        'Content-Disposition': `attachment; filename=${filename}`,
      });

      return new StreamableFile(csvStream);
    } catch (error) {
      throw new InternalServerErrorException([
        translate('route.csv.download-profiles.error'),
      ]);
    }
  }

  @Roles(Role.ADMIN, Role.USER)
  @ApiResponse({
    type: Buffer,
    description: translate('route.csv.download-all-tables.success'),
  })
  @ApiConflictResponse({
    type: ErrorDto,
    description: translate('route.csv.download-all-tables.unauthorized'),
  })
  @Header('Content-Type', 'application/zip')
  @Get('download-all-tables')
  async downloadAllTables(
    @Body() dto: DownloadAllTablesDto,
    @Account() account: AccountWithoutPassword,
    @Response() res: ResType,
  ): Promise<Buffer> {
    await this.accountService.checkPassword(account.id, dto.password);

    try {
      const zipData = await this.csvService.exportAllTables();

      const timestamp = this.csvService.generateTimestamp();
      const filename = `${timestamp}-todas_las_tablas.zip`;

      res.set({
        type: 'application/zip',
        'Content-Disposition': `attachment; filename=${filename}`,
      });
      res.send(zipData);
      return zipData;
    } catch (error) {
      throw new InternalServerErrorException([
        translate('route.csv.download-all-tables.error'),
      ]);
    }
  }
}
