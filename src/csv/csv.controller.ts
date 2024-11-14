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
import {
  Body,
  Controller,
  Get,
  Header,
  HttpException,
  HttpStatus,
  InternalServerErrorException,
  Post,
  Response,
  StreamableFile,
  UseGuards,
} from '@nestjs/common';
import { ApiConflictResponse, ApiResponse } from '@nestjs/swagger';
import { type Response as ResType } from 'express';
import { Role } from '~/types';
import { DownloadProfilesDto } from './dto/download-profiles.dto';
import { DownloadAllTablesDto } from './dto/downloadAllTables.dto';

@UseGuards(JwtGuard, RoleGuard)
@Controller('csv')
export class CsvController {
  constructor(
    private readonly csvService: CsvService,
    private readonly accountService: AccountService,
  ) {}

  @Roles(Role.ADMIN, Role.USER)
  @ApiResponse({
    status: 200,
    description: translate('route.csv.downloadModelos.success'),
  })
  @ApiConflictResponse({
    status: 401,
    description: translate('route.csv.downloadModelos.unauthorized'),
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
      const now = new Date();
      const timestamp = now
        .toISOString()
        .slice(0, 19)
        .replace(/:/g, '-')
        .replace('T', '_');
      const filename = `PerfilModelos_${timestamp}.csv`;

      csvStream.on('data', (chunk) => res.write(chunk));
      csvStream.on('end', () => res.end());

      return new StreamableFile(csvStream, {
        type: 'text/csv',
        disposition: `attachment;filename=${filename}`,
      });
    } catch (error) {
      throw new InternalServerErrorException([
        translate('route.csv.downloadModelos.error'),
      ]);
    }
  }

  @Roles(Role.ADMIN, Role.USER)
  @ApiResponse({
    status: 200,
    description: translate('route.csv.downloadAllTables.success'),
  })
  @ApiConflictResponse({
    status: 401,
    description: translate('route.csv.downloadAllTables.unauthorized'),
  })
  @Post('download-all-tables')
  async downloadAllTables(
    @Body() downloadAllTablesDto: DownloadAllTablesDto,
  ): Promise<Buffer> {
    const { password } = downloadAllTablesDto;

    try {
      return new Buffer('Not implemented yet');
      // const zipData = await this.csvService.exportAllTablesToZip();
      // return zipData;
    } catch (error) {
      throw new HttpException(
        translate('route.csv.downloadAllTables.error'),
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
