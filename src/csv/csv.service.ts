import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CsvService {
  constructor(private prisma: PrismaService) {}
}
