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
  FindArgStatesResponseDto,
  findArgStatesResponseSchema,
} from '@/location/dto/find-arg-states.dto';
import {
  FindCitiesByArgStateResponseDto,
  findCitiesByArgStateResponseSchema,
} from '@/location/dto/find-cities-by-arg-state.dto';
import {
  FindAllStatesByCountryResponseDto,
  findAllStatesByCountryResponseSchema,
} from '@/location/dto/states-by-country.dto';
import { LocationService } from '@/location/location.service';
import { ErrorDto } from '@/shared/errors/errorType';
import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiNotFoundResponse, ApiOkResponse } from '@nestjs/swagger';
import z from 'zod';
import { Role } from '~/types/prisma-schema';

@Controller('location')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Roles(Role.ADMIN, Role.USER, Role.FORM, Role.TICKETS)
  @UseGuards(JwtGuard, RoleGuard)
  @Get('/all')
  @ApiOkResponse({
    type: FindAllLocationResponseDto,
    description: translate('route.location.find-all.success'),
  })
  async findAll(): Promise<z.infer<typeof findAllLocationResponseSchema>> {
    return await this.locationService.findAll();
  }

  @Get('/arg-states')
  @ApiOkResponse({
    type: FindArgStatesResponseDto,
    description: translate('route.location.arg-states.success'),
  })
  async findArgStates(): Promise<z.infer<typeof findArgStatesResponseSchema>> {
    return await this.locationService.findArgStates();
  }

  @Get('/find-cities-by-arg-state/:argState')
  @ApiOkResponse({
    type: FindCitiesByArgStateResponseDto,
    description: translate('route.location.find-cities-by-arg-state.success'),
  })
  @ApiNotFoundResponse({
    type: ErrorDto,
    description: translate('route.location.find-cities-by-arg-state.not-found'),
  })
  async findCitiesByArgState(
    @Param('argState') argState: string,
  ): Promise<z.infer<typeof findCitiesByArgStateResponseSchema>> {
    return await this.locationService.findCitiesByArgState(argState);
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
