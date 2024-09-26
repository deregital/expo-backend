import { ConflictException, Injectable } from '@nestjs/common';
import { Etiqueta, type Cuenta } from '~/types/prisma-schema';
import { hash } from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterDto } from 'src/auth/dto/register.dto';
import { CreateCuentaResponseDto } from '@/cuenta/dto/createCuenta.dto';

@Injectable()
export class CuentaService {
  constructor(private prisma: PrismaService) {}

  async create(dto: RegisterDto): Promise<CreateCuentaResponseDto> {
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
        esAdmin: dto.isAdmin,
        nombreUsuario: dto.username,
        contrasena: await hash(dto.password, 10),
      },
      select: {
        nombreUsuario: true,
        esAdmin: true,
        fcmToken: true,
        id: true,
        filtroBaseActivo: true,
      },
    });

    return {
      ...newUser,
      username: newUser.nombreUsuario,
      isAdmin: newUser.esAdmin,
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

  async findById(id: Cuenta['id']): Promise<Cuenta | null> {
    return await this.prisma.cuenta.findUnique({
      where: {
        id,
      },
    });
  }

  async updateFiltroBase(
    id: Cuenta['id'],
    {
      active,
      etiquetasIds,
    }: {
      active: boolean;
      etiquetasIds: Array<Etiqueta['id']>;
    },
  ): Promise<Cuenta | undefined> {
    try {
      return await this.prisma.cuenta.update({
        where: {
          id: id,
        },
        data: {
          filtroBaseActivo: active,
          filtroBase: {
            set: etiquetasIds ? etiquetasIds.map((id) => ({ id })) : [],
          },
        },
        include: {
          filtroBase: true,
        },
      });
    } catch (e) {
      throw new ConflictException('Etiquetas inválidas');
    }
  }
}
