import { Roles } from '@/auth/decorators/rol.decorator';
import { JwtGuard } from '@/auth/guards/jwt.guard';
import { RoleGuard } from '@/auth/guards/role.guard';
import { translate } from '@/i18n/translate';
import {
  FindAllCountriesResponseDto,
  findAllCountriesResponseSchema,
} from '@/location/dto/find-all-countries.dto';
import {
  FindAllLocationResponseDto,
  findAllLocationResponseSchema,
} from '@/location/dto/find-all-location.dto';
import {
  FindCitiesByProvinceLocationResponseDto,
  findCitiesByProvinceLocationResponseSchema,
} from '@/location/dto/find-cities-by-province.dto';
import {
  FindProvincesResponseDto,
  findProvincesResponseSchema,
} from '@/location/dto/find-provinces.dto';
import {
  FindAllStatesByCountryResponseDto,
  findAllStatesByCountryResponseSchema,
} from '@/location/dto/states-by-country.dto';
import { LocationService } from '@/location/location.service';
import { ErrorDto } from '@/shared/errors/errorType';
import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiNotFoundResponse, ApiOkResponse } from '@nestjs/swagger';
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

  @Get('/provinces')
  @ApiOkResponse({
    type: FindProvincesResponseDto,
    description: translate('route.location.provinces.success'),
  })
  async findProvinces(): Promise<z.infer<typeof findProvincesResponseSchema>> {
    return await this.locationService.findProvinces();
  }

  @Get('/find-cities-by-province/:province')
  @ApiOkResponse({
    type: FindCitiesByProvinceLocationResponseDto,
    description: translate('route.location.find-cities-by-province.success'),
  })
  @ApiNotFoundResponse({
    type: ErrorDto,
    description: translate('route.location.find-cities-by-province.not-found'),
  })
  async findArgCityByProvince(
    @Param('province') province: string,
  ): Promise<z.infer<typeof findCitiesByProvinceLocationResponseSchema>> {
    return await this.locationService.findCitiesByProvince(province);
  }

  @Get('/all-countries')
  @ApiOkResponse({
    description: translate('route.location.all-countries.success'),
    type: FindAllCountriesResponseDto,
  })
  findAllCountries(): z.infer<typeof findAllCountriesResponseSchema> {
    return this.locationService.findAllCountries();
  }

  @Get('/states-by-country/:countryCode')
  @ApiOkResponse({
    description: translate('route.location.states-by-country.success'),
    type: FindAllStatesByCountryResponseDto,
  })
  @ApiNotFoundResponse({
    type: ErrorDto,
    description: translate('route.location.states-by-country.not-found'),
  })
  findStatesByCountry(
    @Param('countryCode') countryCode: string,
  ): z.infer<typeof findAllStatesByCountryResponseSchema> {
    return this.locationService.findStatesByCountry(countryCode);
  }
}
