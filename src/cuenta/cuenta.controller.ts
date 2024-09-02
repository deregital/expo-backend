import { Controller } from '@nestjs/common';
import { CuentaService } from './cuenta.service';

@Controller('cuenta')
export class CuentaController {
  constructor(private readonly cuentaService: CuentaService) {}
}
