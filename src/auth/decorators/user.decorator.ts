import {
  createParamDecorator,
  ExecutionContext,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AccountService } from '@/account/account.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { Account } from '~/types/prisma-schema';

export type AccountWithoutPassword = Omit<Account, 'password'>;

export const User = createParamDecorator(
  async (data: unknown, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    const jwtService = new JwtService({ secret: process.env.JWT_SECRET });

    const prismaService = new PrismaService();
    const userService = new AccountService(prismaService);

    try {
      const token = request.headers.authorization?.split(' ')[1];
      if (!token) {
        throw new UnauthorizedException('No token found');
      }

      const decoded = jwtService.decode(token);
      if (!decoded) {
        throw new UnauthorizedException('Invalid token');
      }

      const user = await userService.findById(decoded.id);
      if (!user) {
        throw new NotFoundException('User not found');
      }

      const { password, ...userWithoutPassword } = user;

      return userWithoutPassword;
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }
  },
);
