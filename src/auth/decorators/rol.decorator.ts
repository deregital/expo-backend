import { SetMetadata } from '@nestjs/common';
import { Role } from '~/types/prisma-schema';

export const Roles = (...roles: Role[]) => SetMetadata('roles', roles);
