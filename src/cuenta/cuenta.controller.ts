import {
  CreateCuentaDto,
  CreateCuentaResponseDto,
} from '@/cuenta/dto/createCuenta.dto';
import { Body, Controller, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiCreatedResponse } from '@nestjs/swagger';
import { CuentaService } from './cuenta.service';
import { UpdateFiltroBaseDto } from '@/cuenta/dto/updateFiltroBase.dto';
import { JwtGuard } from '@/auth/guards/jwt.guard';
import { CuentaSinContrasena, User } from '@/auth/decorators/user.decorator';

@Controller('cuenta')
@UseGuards(JwtGuard)
export class CuentaController {
  constructor(private readonly cuentaService: CuentaService) {}

  @Post('/create')
  @ApiCreatedResponse({
    description: 'Cuenta creada',
    type: CreateCuentaResponseDto,
  })
  async createCuenta(@Body() body: CreateCuentaDto) {
    return await this.cuentaService.create(body);
  }

  @Patch('/filtro-base')
  async updateFiltroBase(
    @Body() body: UpdateFiltroBaseDto,
    @User() user: CuentaSinContrasena,
  ) {
    return await this.cuentaService.updateFiltroBase(user.id, body);
  }
}
