import {
  LoginProducerDto,
  loginProducerResponseSchema,
} from '@/expo-tickets-producer-login/dto/[N]expo-tickets-producer-login';
import { getEventTicketsLoginProducerResponseSchema } from '@/expo-tickets-producer-login/dto/[N]get-event-tickets';
import { PRISMA_SERVICE } from '@/prisma/constants';
import { PrismaService } from '@/prisma/prisma.service';
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import z from 'zod';
import { TicketType } from '~/types/prisma-schema';

@Injectable()
export class ExpoTicketsProducerLoginService {
  constructor(@Inject(PRISMA_SERVICE) private readonly prisma: PrismaService) {}

  async login(
    loginDto: LoginProducerDto,
  ): Promise<z.infer<typeof loginProducerResponseSchema>> {
    const { mail, password } = loginDto;
    const producer = await this.prisma.eventProducerLogin.findFirst({
      where: { mail, password, isActive: true },
    });

    if (!producer) {
      throw new UnauthorizedException('Credenciales incorrectas');
    }

    return { success: true, message: 'Login exitoso' };
  }

  async getEventTickets(
    loginDto: LoginProducerDto,
  ): Promise<z.infer<typeof getEventTicketsLoginProducerResponseSchema>> {
    const { mail, password } = loginDto;
    const producer = await this.prisma.eventProducerLogin.findFirst({
      where: { mail, password, isActive: true },
      include: {
        event: {
          include: {
            tickets: {
              where: {
                type: TicketType.SPECTATOR,
              },

              select: {
                id: true,
                dni: true,
                fullName: true,
                mail: true,
                phoneNumber: true,
                whoToWatch: true,
                instagrams: true,
              },
            },
          },
        },
      },
    });

    if (!producer) {
      throw new UnauthorizedException('Credenciales incorrectas');
    }

    return { email: mail, password, event: producer.event };
  }
}
