import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '~/types/prisma-schema';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit(): Promise<void> {
    await this.$connect();
  }
}
