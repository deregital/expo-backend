import { ModuleMetadata } from '@nestjs/common';

export interface ResendOptions {
  apiKey: string;
}

export interface ResendOptionsAsync extends Pick<ModuleMetadata, 'imports'> {
  name?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  useFactory: (...args: any[]) => ResendOptions | Promise<ResendOptions>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  inject?: any[];
}
