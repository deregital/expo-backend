import { PRISMA_SERVICE } from '@/prisma/constants';
import { PrismaService } from '@/prisma/prisma.service';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class MessageService {
  constructor(@Inject(PRISMA_SERVICE) private readonly prisma: PrismaService) {}
}
