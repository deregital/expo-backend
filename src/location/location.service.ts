import { translate } from '@/i18n/translate';
import { ArgCity } from '@/location/dto/arg-city.dto';
import { findAllCountriesResponseSchema } from '@/location/dto/find-all-countries.dto';
import { findAllLocationResponseSchema } from '@/location/dto/find-all-location.dto';
import { findCitiesByProvinceLocationResponseSchema } from '@/location/dto/find-cities-by-province.dto';
import { findProvincesResponseSchema } from '@/location/dto/find-provinces.dto';
import { findAllStatesByCountryResponseSchema } from '@/location/dto/states-by-country.dto';
import { PrismaService } from '@/prisma/prisma.service';
import localidades from '@/shared/data/arg-cities.json';
import provinces from '@/shared/data/arg-provinces.json';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Country, State } from 'country-state-city';
import z from 'zod';

const cities = localidades.localidades as ArgCity[];
@Injectable()
export class LocationService {
  constructor(private prisma: PrismaService) {}

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

  async findCitiesByProvince(
    province: string,
  ): Promise<z.infer<typeof findCitiesByProvinceLocationResponseSchema>> {
    const citiesByProvince = cities.filter(
      (city) => city.provincia.nombre === province,
    );

    return {
      cities: citiesByProvince
        .map((city) => ({
          id: city.id,
          name: city.nombre,
          centroid: {
            lon: city.centroide.lon,
            lat: city.centroide.lat,
          },
        }))
        .sort((a, b) => a.name.localeCompare(b.name)),
    };
  }

  async findProvinces(): Promise<z.infer<typeof findProvincesResponseSchema>> {
    return { provinces };
  }

  findAllCountries(): z.infer<typeof findAllCountriesResponseSchema> {
    const countries = Country.getAllCountries().map((country) => ({
      name: country.name,
      isoCode: country.isoCode,
    }));
    return { countries };
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

    return { states };
  }
}
