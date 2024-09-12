import { SetMetadata } from '@nestjs/common';
import { Role } from 'src/auth/roles';

export const Roles = (...roles: Role[]) => SetMetadata('roles', roles);
