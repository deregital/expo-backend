import { ConflictException, Injectable } from '@nestjs/common';
import { Cuenta } from 'types/prisma-schema';
import { hash } from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterDto, RegisterResponseDto } from 'src/auth/dto/register.dto';

@Injectable()
export class CuentaService {
  constructor(private prisma: PrismaService) {}

  async create(dto: RegisterDto): Promise<RegisterResponseDto> {
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
