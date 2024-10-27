import { Roles } from '@/auth/decorators/rol.decorator';
import { JwtGuard } from '@/auth/guards/jwt.guard';
import { RoleGuard } from '@/auth/guards/role.guard';
import { translate } from '@/i18n/translate';
import {
  FindAllLocationResponseDto,
  findAllLocationResponseSchema,
} from '@/location/dto/find-all-location.dto';
import {
  FindCitiesByProvinceLocationResponseDto,
  findCitiesByProvinceLocationResponseSchema,
} from '@/location/dto/find-cities-by-province-location.dto';
import { LocationService } from '@/location/location.service';
import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import z from 'zod';
import { Role } from '~/types';

@Roles(Role.ADMIN, Role.USER)
@UseGuards(JwtGuard, RoleGuard)
@Controller('location')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Get('/all')
  @ApiOkResponse({
    type: FindAllLocationResponseDto,
    description: translate('route.location.find-all.success'),
  })
  async findAll(): Promise<z.infer<typeof findAllLocationResponseSchema>> {
    return await this.locationService.findAll();
  }

  @Get('/find-cities-by-province/:province')
  @ApiOkResponse({
    type: FindCitiesByProvinceLocationResponseDto,
    description: translate('route.location.find-cities-by-province.success'),
  })
  async findArgCityByProvince(
    @Param('province') province: string,
  ): Promise<z.infer<typeof findCitiesByProvinceLocationResponseSchema>> {
    return await this.locationService.findCitiesByProvince(province);
  }
}
