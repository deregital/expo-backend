import { translate } from '@/i18n/translate';
import { ArgCity } from '@/location/dto/arg-city.dto';
import { findAllCountriesResponseSchema } from '@/location/dto/find-all-countries.dto';
import { findAllLocationResponseSchema } from '@/location/dto/find-all-location.dto';
import { findArgStatesResponseSchema } from '@/location/dto/find-arg-states.dto';
import { findCitiesByArgStateResponseSchema } from '@/location/dto/find-cities-by-arg-state.dto';
import { findAllStatesByCountryResponseSchema } from '@/location/dto/states-by-country.dto';
import { PRISMA_SERVICE } from '@/prisma/constants';
import { PrismaService } from '@/prisma/prisma.service';
import localidades from '@/shared/data/arg-cities.json';
import argStates from '@/shared/data/arg-states.json';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Country, State } from 'country-state-city';
import z from 'zod';

const cities = localidades.localidades as ArgCity[];
@Injectable()
export class LocationService {
  constructor(@Inject(PRISMA_SERVICE) private prisma: PrismaService) {}

  async findAll(): Promise<z.infer<typeof findAllLocationResponseSchema>> {
    const birthLocations = await this.prisma.location.findMany({
      where: {
        birthProfiles: {
          some: {
            isInTrash: false,
          },
        },
      },
      select: {
        latitude: true,
        longitude: true,
        city: true,
        _count: {
          select: {
            birthProfiles: true,
          },
        },
      },
    });

    const residenceLocations = await this.prisma.location.findMany({
      where: {
        residenceProfiles: {
          some: {
            isInTrash: false,
          },
        },
      },
      select: {
        latitude: true,
        longitude: true,
        city: true,
        _count: {
          select: {
            residenceProfiles: true,
          },
        },
      },
    });

    return {
      birthLocations,
      residenceLocations,
    };
  }

  async findCitiesByArgState(
    argState: string,
  ): Promise<z.infer<typeof findCitiesByArgStateResponseSchema>> {
    if (!argStates.includes(argState)) {
      throw new NotFoundException([
        translate('route.location.find-cities-by-arg-state.not-found', {
          argState,
        }),
      ]);
    }

    const citiesByArgState = cities.filter(
      (city) => city.provincia.nombre === argState,
    );

    const uniqueCities: {
      [key: string]: boolean;
    } = {};

    return {
      cities: citiesByArgState
        .map((city) => ({
          id: city.id,
          name: city.nombre,
          centroid: {
            lon: city.centroide.lon,
            lat: city.centroide.lat,
          },
        }))
        .sort((a, b) => a.name.localeCompare(b.name))
        .filter((obj) => {
          if (uniqueCities[obj.name]) {
            return false; // Filter out if name already exists
          } else {
            uniqueCities[obj.name] = true; // Mark name as seen
            return true; // Keep if name is new
          }
        }),
    };
  }

  async findArgStates(): Promise<z.infer<typeof findArgStatesResponseSchema>> {
    return { states: argStates };
  }

  findAllCountries(): z.infer<typeof findAllCountriesResponseSchema> {
    const countries = Country.getAllCountries().map((country) => ({
      name: country.name,
      isoCode: country.isoCode,
      latitude: Number(country.latitude),
      longitude: Number(country.longitude),
    }));
    return {
      countries: countries.filter(
        (country) => country.isoCode !== 'PS',
      ) /*Palestina me come los huevos*/,
    };
  }

  findStatesByCountry(
    countryCode: string,
  ): z.infer<typeof findAllStatesByCountryResponseSchema> {
    const country = Country.getCountryByCode(countryCode);

    if (!country) {
      throw new NotFoundException([
        translate('route.location.states-by-country.not-found-error', {
          countryCode,
        }),
      ]);
    }

    const states = State.getStatesOfCountry(countryCode).map((state) => ({
      name: state.name,
      isoCode: state.isoCode,
      countryCode: state.countryCode,
      countryName: country.name,
      latitude: state.latitude,
      longitude: state.longitude,
    }));

    return {
      states: states.filter(
        (state) => state.latitude !== null && state.longitude !== null,
      ),
    };
  }
}
