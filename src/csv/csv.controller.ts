import { Roles } from '@/auth/decorators/rol.decorator';
import { JwtGuard } from '@/auth/guards/jwt.guard';
import { RoleGuard } from '@/auth/guards/role.guard';
import { CsvService } from '@/csv/csv.service';
import { translate } from '@/i18n/translate';
import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiConflictResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Role } from '~/types';
import { DownloadAllTablesDto } from './dto/downloadAllTables.dto';
import { DownloadModelosDto } from './dto/downloadModelos.dto';

@ApiTags('csv')
@UseGuards(JwtGuard, RoleGuard)
@Controller('csv')
export class CsvController {
  constructor(private readonly csvService: CsvService) {}

  @Roles(Role.ADMIN, Role.USER)
  @ApiResponse({
    status: 200,
    description: translate('route.csv.downloadModelos.success'),
  })
  @ApiConflictResponse({
    status: 401,
    description: translate('route.csv.downloadModelos.unauthorized'),
  })
  @Post('download-modelos')
  async downloadModelos(
    @Body() downloadModelosDto: DownloadModelosDto,
  ): Promise<string> {
    const { password } = downloadModelosDto;

    try {
      const csvData = await this.csvService.exportModelosToCsv(password);
      return csvData;
    } catch (error) {
      throw new HttpException(
        translate('route.csv.downloadModelos.error'),
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
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
      const zipData = await this.csvService.exportAllTablesToZip(password);
      return zipData;
    } catch (error) {
      throw new HttpException(
        translate('route.csv.downloadAllTables.error'),
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
