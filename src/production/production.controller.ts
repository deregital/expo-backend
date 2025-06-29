import { Roles } from '@/auth/decorators/rol.decorator';
import { JwtGuard } from '@/auth/guards/jwt.guard';
import { RoleGuard } from '@/auth/guards/role.guard';
import { translate } from '@/i18n/translate';
import {
  CreateProductionDto,
  createProductionResponseSchema,
} from '@/production/dto/create-production.dto';
import {
  CreateProductionRoleDto,
  createProductionRoleResponseSchema,
} from '@/production/dto/create-role.dto';
import {
  DeleteProductionResponseDto,
  deleteProductionResponseSchema,
} from '@/production/dto/delete-production.dto';
import {
  GetAllProductionResponseDto,
  getAllProductionResponseSchema,
} from '@/production/dto/get-all-production.dto';
import {
  UpdateProductionDto,
  UpdateProductionResponseDto,
  updateProductionResponseSchema,
} from '@/production/dto/update-production.dto';
import { ErrorDto } from '@/shared/errors/errorType';
import { ExistingRecord } from '@/shared/validation/checkExistingRecord';
import { TagGroupService } from '@/tag-group/tag-group.service';
import { TagService } from '@/tag/tag.service';
import {
  Body,
  ConflictException,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import {
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
} from '@nestjs/swagger';
import z from 'zod';
import { Role, TagType } from '~/types/prisma-schema';
import { ProductionService } from './production.service';

@Roles(Role.ADMIN)
@UseGuards(JwtGuard, RoleGuard)
@Controller('production')
export class ProductionController {
  constructor(
    private readonly productionService: ProductionService,
    private readonly tagService: TagService,
    private readonly tagGroupService: TagGroupService,
  ) {}

  @Roles(Role.MI_EXPO)
  @ApiOkResponse({
    description: translate('route.production.get-all.success'),
    type: GetAllProductionResponseDto,
  })
  @Get('all')
  async getAll(): Promise<z.infer<typeof getAllProductionResponseSchema>> {
    const productions = await this.productionService.getAll();
    return { productions };
  }

  @Roles(Role.MI_EXPO)
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

  @ApiCreatedResponse({
    description: translate('route.production.create-role.success'),
    type: CreateProductionDto,
  })
  @Post('create-role')
  async createRole(
    @Body() body: CreateProductionRoleDto,
  ): Promise<z.infer<typeof createProductionRoleResponseSchema>> {
    let rolesGroupId: string | undefined;

    rolesGroupId = (await this.tagService.findAll()).tags.find(
      (tag) => tag.type === TagType.PRODUCTION_ROLE,
    )?.groupId;

    if (!rolesGroupId) {
      // Create the group if it doesn't exist
      rolesGroupId = await this.tagGroupService
        .create({
          name: translate('prisma.production-role'),
          color: '#FF5733',
          isExclusive: true,
        })
        .then((group) => group.id);
    }

    return await this.tagService.create({
      name: body.name,
      type: TagType.PRODUCTION_ROLE,
      groupId: rolesGroupId!,
    });
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
