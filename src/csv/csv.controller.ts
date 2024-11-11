import { Roles } from '@/auth/decorators/rol.decorator';
import { JwtGuard } from '@/auth/guards/jwt.guard';
import { RoleGuard } from '@/auth/guards/role.guard';
import { Controller, UseGuards } from '@nestjs/common';
import { Role } from '~/types/prisma-schema';
import { CsvService } from './csv.service';

@Controller('csv')
@UseGuards(JwtGuard, RoleGuard)
@Roles(Role.ADMIN)
export class CsvController {
  constructor(private readonly csvService: CsvService) {}
}
