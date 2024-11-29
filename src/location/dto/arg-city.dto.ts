import z from 'zod';

export type ArgCity = {
  id: string;
  nombre: string;
  fuente: string;
  provincia: {
    id: string;
    nombre: string;
  };
  departamento: {
    id: string;
    nombre: string;
  };
  municipio: {
    id: string;
    nombre: string;
  };
  localidad_censal: {
    id: string;
    nombre: string;
  };
  categoria: string;
  centroide: {
    lon: number;
    lat: number;
  };
};

export const argCitySchema = z.object({
  id: z.string(),
  name: z.string(),
  state: z.object({
    id: z.string(),
    name: z.string(),
  }),
  department: z.object({
    id: z.string(),
    name: z.string(),
  }),
  municipality: z.object({
    id: z.string(),
    name: z.string(),
  }),
  censusLocality: z.object({
    id: z.string(),
    name: z.string(),
  }),
  category: z.string(),
  centroid: z.object({
    lon: z.number(),
    lat: z.number(),
  }),
});
