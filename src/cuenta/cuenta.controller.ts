import {
  CreateCuentaDto,
  CreateCuentaResponseDto,
} from '@/cuenta/dto/createCuenta.dto';
import { Body, Controller, Get, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { CuentaService } from './cuenta.service';
import {
  UpdateFiltroBaseDto,
  UpdateFiltroBaseResponseDto,
} from '@/cuenta/dto/updateFiltroBase.dto';
import { JwtGuard } from '@/auth/guards/jwt.guard';
import { CuentaSinContrasena, User } from '@/auth/decorators/user.decorator';
import { GetFiltroBaseResponseDto } from '@/cuenta/dto/getFiltroBase.dto';
import { GetMeResponseDto } from '@/cuenta/dto/getMe.dto';
import { translate } from '@/i18n/translate';

@Controller('cuenta')
@UseGuards(JwtGuard)
export class CuentaController {
  constructor(private readonly cuentaService: CuentaService) {}

  @Post('/create')
  @ApiCreatedResponse({
    description: translate('route.cuenta.create.success'),
    type: CreateCuentaResponseDto,
  })
  async createCuenta(@Body() body: CreateCuentaDto) {
    return await this.cuentaService.create(body);
  }

  @Patch('/filtro-base')
  @ApiOkResponse({
    description: translate('route.cuenta.filtro-base-patch.success'),
    type: UpdateFiltroBaseResponseDto,
  })
  async updateFiltroBase(
    @Body() body: UpdateFiltroBaseDto,
    @User() user: CuentaSinContrasena,
  ) {
    return await this.cuentaService.updateFiltroBase(user.id, body);
  }

  @Get('/filtro-base')
  @ApiOkResponse({
    description: translate('route.cuenta.filtro-base-get.success'),
    type: GetFiltroBaseResponseDto,
  })
  async getFiltroBase(@User() user: CuentaSinContrasena) {
    return await this.cuentaService.getFiltroBase(user.id);
  }

  @Get('/me')
  @ApiOkResponse({
    description: translate('route.cuenta.me.success'),
    type: GetMeResponseDto,
  })
  async getMe(@User() user: CuentaSinContrasena) {
    return user;
  }
}
