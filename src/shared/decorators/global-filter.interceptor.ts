import { AccountService } from '@/account/account.service';
import { PRISMA_SERVICE } from '@/prisma/constants';
import { PrismaService } from '@/prisma/prisma.service';
import { getAccountFromReq } from '@/shared/decorators/get-account-from-req';
import {
  CallHandler,
  ExecutionContext,
  Inject,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class GlobalFilterInterceptor implements NestInterceptor {
  constructor(
    @Inject(PRISMA_SERVICE) private prismaService: PrismaService,
    private accountService: AccountService,
  ) {}

  async intercept(
    context: ExecutionContext,
    next: CallHandler<unknown>,
  ): Promise<Observable<unknown>> {
    const request = context.switchToHttp().getRequest<Request>();
    const account = await getAccountFromReq(request, this.prismaService);
    const globalFilter = await this.accountService.getGlobalFilter(account.id);

    if (!globalFilter.isGlobalFilterActive) {
      this.prismaService.unExtend();
    } else {
      this.prismaService.extendGlobalFilter(globalFilter.globalFilter);
    }

    return next.handle();
  }
}
