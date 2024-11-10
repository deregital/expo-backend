import { PRISMA_SERVICE } from '@/prisma/constants';
import { PrismaService } from '@/prisma/prisma.service';
import { Global, Module } from '@nestjs/common';

@Global()
@Module({
  providers: [
    PrismaService, // Register PrismaService as a provider
    {
      provide: PRISMA_SERVICE,
      useClass: PrismaService, // Use PrismaService as the implementation for PRISMA_SERVICE
    },
  ],
  exports: [PrismaService, PRISMA_SERVICE],
})
export class PrismaModule {}
