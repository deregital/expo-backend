import { SetMetadata } from '@nestjs/common';
import { Role } from '~/types/prisma-schema';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const Roles = (...roles: Role[]) => SetMetadata('roles', roles);
