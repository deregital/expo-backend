import { ConflictException, Injectable } from '@nestjs/common';
import { Cuenta } from '@prisma/client';
import { hash } from 'bcrypt';
import { CreateCuentaDto } from 'src/cuenta/dto/cuenta.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import z from 'zod';

@Injectable()
export class CuentaService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    dto: z.infer<typeof CreateCuentaDto>,
  ): Promise<Omit<Cuenta, 'contrasena'>> {
    const user = await this.prisma.cuenta.findUnique({
      where: {
        nombreUsuario: dto.username,
      },
    });

    if (user) {
      throw new ConflictException('Usuario ya existente');
    }

    const newUser = await this.prisma.cuenta.create({
      data: {
        ...dto,
        nombreUsuario: dto.username,
        contrasena: await hash(dto.password, 10),
      },
    });

    const { contrasena, ...result } = newUser;

    return result;
  }

  async findByUsername(
    username: Cuenta['nombreUsuario'],
  ): Promise<Cuenta | null> {
    return await this.prisma.cuenta.findUnique({
      where: {
        nombreUsuario: username,
      },
    });
  }
}
