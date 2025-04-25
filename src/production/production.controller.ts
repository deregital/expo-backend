import { Roles } from '@/auth/decorators/rol.decorator';
import { JwtGuard } from '@/auth/guards/jwt.guard';
import { RoleGuard } from '@/auth/guards/role.guard';
import { translate } from '@/i18n/translate';
import {
  CreateProductionDto,
  createProductionResponseSchema,
} from '@/production/dto/create-production.dto';
import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import z from 'zod';
import { Role } from '~/types/prisma-schema';
import { ProductionService } from './production.service';

@Roles(Role.ADMIN)
@UseGuards(JwtGuard, RoleGuard)
@Controller('production')
export class ProductionController {
  constructor(private readonly productionService: ProductionService) {}

  @ApiOkResponse({
    description: translate('route.production.create.success'),
    type: CreateProductionDto,
  })
  @Post('create')
  async create(
    @Body() body: CreateProductionDto,
  ): Promise<z.infer<typeof createProductionResponseSchema>> {
    return await this.productionService.createProduction(body);
  }
}
