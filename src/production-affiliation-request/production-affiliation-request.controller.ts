import { Roles } from '@/auth/decorators/rol.decorator';
import { JwtGuard } from '@/auth/guards/jwt.guard';
import { RoleGuard } from '@/auth/guards/role.guard';
import { translate } from '@/i18n/translate';
import {
  Profile,
  ProfileWithoutPassword,
} from '@/mi-expo/decorators/profile.decorator';
import {
  FindByProductionAffiliationRequestResponseDto,
  findByProductionAffiliationRequestResponseSchema,
} from '@/production-affiliation-request/dto/find-by-production-affiliation-request.dto';
import {
  UpdateProductionAffiliationRequestResponseDto,
  updateProductionAffiliationRequestResponseSchema,
} from '@/production-affiliation-request/dto/update-production-affiliation-request.dto';
import { ErrorDto } from '@/shared/errors/errorType';
import { ExistingRecord } from '@/shared/validation/checkExistingRecord';
import {
  Body,
  ConflictException,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import {
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import z from 'zod';
import { AffiliationStatus, Role } from '~/types';
import {
  CreateProductionAffiliationRequestDto,
  createProductionAffiliationRequestResponseSchema,
} from './dto/create-production-affiliation-request.dto';
import { ProductionAffiliationRequestService } from './production-affiliation-request.service';

@UseGuards(JwtGuard, RoleGuard)
@Roles(Role.ADMIN)
@Controller('production-affiliation-request')
export class ProductionAffiliationRequestController {
  constructor(
    private readonly productionAffiliationRequestService: ProductionAffiliationRequestService,
  ) {}

  @ApiCreatedResponse({
    description: translate(
      'route.production-affiliation-request.create.success',
    ),
    type: CreateProductionAffiliationRequestDto,
  })
  @ApiConflictResponse({
    description: translate(
      'route.production-affiliation-request.create.already-admin',
    ),
    type: ErrorDto,
  })
  @Roles(Role.MI_EXPO)
  @Post('create')
  async create(
    @Body() dto: CreateProductionAffiliationRequestDto,
    @Profile() profile: ProfileWithoutPassword,
  ): Promise<z.infer<typeof createProductionAffiliationRequestResponseSchema>> {
    if (profile.productionsAdministrated.length !== 0) {
      throw new ConflictException([
        translate('route.production-affiliation-request.create.already-admin'),
      ]);
    }

    return await this.productionAffiliationRequestService.create({
      productionId: dto.productionId,
      profileId: profile.id,
    });
  }

  @Roles(Role.MI_EXPO)
  @ApiOkResponse({
    description: translate(
      'route.production-affiliation-request.update.success',
    ),
    type: UpdateProductionAffiliationRequestResponseDto,
  })
  @ApiNotFoundResponse({
    description: translate(
      'route.production-affiliation-request.update.not-found',
    ),
    type: ErrorDto,
  })
  @ApiUnauthorizedResponse({
    description: translate(
      'route.production-affiliation-request.update.unauthorized',
    ),
    type: ErrorDto,
  })
  @Post('accept/:id')
  async accept(
    @Param('id', new ExistingRecord('productionAffiliationRequest')) id: string,
    @Profile() profile: ProfileWithoutPassword,
  ): Promise<z.infer<typeof updateProductionAffiliationRequestResponseSchema>> {
    const request = await this.productionAffiliationRequestService.findById(id);
    if (!request || request.status !== AffiliationStatus.PENDING) {
      throw new NotFoundException([
        translate('route.production-affiliation-request.update.not-found'),
      ]);
    }

    if (request.production.administratorId !== profile.id) {
      throw new UnauthorizedException([
        translate('route.production-affiliation-request.update.unauthorized'),
      ]);
    }

    return await this.productionAffiliationRequestService.update(id, {
      reviewedAt: new Date(),
      status: AffiliationStatus.APPROVED,
    });
  }

  @Roles(Role.MI_EXPO)
  @ApiOkResponse({
    description: translate(
      'route.production-affiliation-request.update.success',
    ),
    type: UpdateProductionAffiliationRequestResponseDto,
  })
  @ApiNotFoundResponse({
    description: translate(
      'route.production-affiliation-request.update.not-found',
    ),
    type: ErrorDto,
  })
  @ApiUnauthorizedResponse({
    description: translate(
      'route.production-affiliation-request.update.unauthorized',
    ),
    type: ErrorDto,
  })
  @Post('reject/:id')
  async reject(
    @Param('id', new ExistingRecord('productionAffiliationRequest')) id: string,
    @Profile() profile: ProfileWithoutPassword,
  ): Promise<z.infer<typeof updateProductionAffiliationRequestResponseSchema>> {
    const request = await this.productionAffiliationRequestService.findById(id);
    if (!request || request.status !== AffiliationStatus.PENDING) {
      throw new NotFoundException([
        translate('route.production-affiliation-request.update.not-found'),
      ]);
    }

    if (request.production.administratorId !== profile.id) {
      throw new UnauthorizedException([
        translate('route.production-affiliation-request.update.unauthorized'),
      ]);
    }

    return await this.productionAffiliationRequestService.update(id, {
      reviewedAt: new Date(),
      status: AffiliationStatus.REJECTED,
    });
  }

  @Roles(Role.MI_EXPO)
  @ApiOkResponse({
    description: translate(
      'route.production-affiliation-request.update.success',
    ),
    type: FindByProductionAffiliationRequestResponseDto,
  })
  @ApiNotFoundResponse({
    description: translate(
      'route.production-affiliation-request.find-by-production.not-found',
    ),
    type: ErrorDto,
  })
  @Get('get-by-production/:id')
  async findByProduction(
    @Param('id', new ExistingRecord('production')) productionId: string,
  ): Promise<z.infer<typeof findByProductionAffiliationRequestResponseSchema>> {
    const productions =
      await this.productionAffiliationRequestService.findByProduction(
        productionId,
      );
    return { productions };
  }
}
