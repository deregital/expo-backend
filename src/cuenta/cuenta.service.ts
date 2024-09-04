import { ConflictException, Injectable } from '@nestjs/common';
import { Cuenta } from '@prisma/client';
import { hash } from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterResponseDto, registerSchema } from 'src/auth/dto/register.dto';
import z from 'zod';

@Injectable()
export class CuentaService {
  constructor(private prisma: PrismaService) {}

  async create(
    dto: z.infer<typeof registerSchema>,
  ): Promise<RegisterResponseDto> {
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

    return {
      isAdmin: result.esAdmin,
      username: result.nombreUsuario,
    };
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
