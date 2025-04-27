import { Roles } from '@/auth/decorators/rol.decorator';
import { JwtGuard } from '@/auth/guards/jwt.guard';
import { RoleGuard } from '@/auth/guards/role.guard';
import { translate } from '@/i18n/translate';
import {
  CreateProductionDto,
  createProductionResponseSchema,
} from '@/production/dto/create-production.dto';
import {
  DeleteProductionResponseDto,
  deleteProductionResponseSchema,
} from '@/production/dto/delete-production.dto';
import {
  UpdateProductionDto,
  UpdateProductionResponseDto,
  updateProductionResponseSchema,
} from '@/production/dto/update-production.dto';
import { ErrorDto } from '@/shared/errors/errorType';
import { ExistingRecord } from '@/shared/validation/checkExistingRecord';
import {
  Body,
  ConflictException,
  Controller,
  Delete,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import {
  ApiConflictResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
} from '@nestjs/swagger';
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
  @ApiConflictResponse({
    description: translate('route.production.create.already-exists'),
    type: ErrorDto,
  })
  @Post('create')
  async create(
    @Body() body: CreateProductionDto,
  ): Promise<z.infer<typeof createProductionResponseSchema>> {
    return await this.productionService.createProduction(body);
  }

  @ApiNotFoundResponse({
    description: translate('route.production.update.not-found'),
    type: ErrorDto,
  })
  @ApiConflictResponse({
    description: translate('route.production.update.already-exists'),
    type: ErrorDto,
  })
  @ApiOkResponse({
    description: translate('route.production.update.success'),
    type: UpdateProductionResponseDto,
  })
  @Patch('update/:id')
  async update(
    @Param('id', new ExistingRecord('production')) id: string,
    @Body() body: UpdateProductionDto,
  ): Promise<z.infer<typeof updateProductionResponseSchema>> {
    try {
      return await this.productionService.updateProduction(id, body);
    } catch (error) {
      throw new ConflictException([
        translate('route.production.update.already-exists'),
      ]);
    }
  }

  @ApiNotFoundResponse({
    description: translate('route.production.delete.not-found'),
    type: ErrorDto,
  })
  @ApiOkResponse({
    description: translate('route.production.delete.success'),
    type: DeleteProductionResponseDto,
  })
  @ApiConflictResponse({
    description: translate('route.production.delete.event-active', {
      productionName: '',
    }),
    type: ErrorDto,
  })
  @Delete('delete/:id')
  async deleteProduction(
    @Param('id', new ExistingRecord('production')) id: string,
  ): Promise<z.infer<typeof deleteProductionResponseSchema>> {
    const production = await this.productionService.getById(id);
    if (
      production?.events.some(
        (event) => event.active && event.endingDate > new Date(),
      )
    ) {
      throw new ConflictException([
        translate('route.production.delete.event-active', {
          productionName: production.name,
        }),
      ]);
    }

    return await this.productionService.deleteProduction(id);
  }
}
