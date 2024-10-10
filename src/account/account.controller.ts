import {
  CreateAccountDto,
  CreateAccountResponseDto,
} from '@/account/dto/create-account.dto';
import { GetGlobalFilterResponseDto } from '@/account/dto/get-global-filter.dto';
import { GetMeResponseDto } from '@/account/dto/get-me.dto';
import {
  UpdateGlobalFilterDto,
  UpdateGlobalFilterResponseDto,
} from '@/account/dto/update-global-filter.dto';
import { Roles } from '@/auth/decorators/rol.decorator';
import { AccountWithoutPassword, User } from '@/auth/decorators/user.decorator';
import { JwtGuard } from '@/auth/guards/jwt.guard';
import { RoleGuard } from '@/auth/guards/role.guard';
import { translate } from '@/i18n/translate';
import { withoutDates } from '@/shared/dtoModification/without-dates';
import { Body, Controller, Get, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { Role } from '~/types/prisma-schema';
import { AccountService } from './account.service';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post('/create')
  @ApiCreatedResponse({
    description: translate('route.account.create.success'),
    type: CreateAccountResponseDto,
  })
  async create(
    @Body() body: CreateAccountDto,
  ): Promise<CreateAccountResponseDto> {
    return await this.accountService.create(body);
  }

  @Roles(Role.ADMIN, Role.USER)
  @UseGuards(JwtGuard, RoleGuard)
  @Patch('/global-filter')
  @ApiOkResponse({
    description: translate('route.account.global-filter-patch.success'),
    type: UpdateGlobalFilterResponseDto,
  })
  async updateGlobalFilter(
    @Body() body: UpdateGlobalFilterDto,
    @User() user: AccountWithoutPassword,
  ): Promise<UpdateGlobalFilterResponseDto> {
    return withoutDates(
      await this.accountService.updateGlobalFilter(user.id, body),
    );
  }

  @Roles(Role.ADMIN, Role.USER)
  @UseGuards(JwtGuard, RoleGuard)
  @Get('/global-filter')
  @ApiOkResponse({
    description: translate('route.account.global-filter-get.success'),
    type: GetGlobalFilterResponseDto,
  })
  async getGlobalFilter(
    @User() user: AccountWithoutPassword,
  ): Promise<GetGlobalFilterResponseDto> {
    return await this.accountService.getGlobalFilter(user.id);
  }

  @Roles(Role.ADMIN, Role.USER)
  @UseGuards(JwtGuard, RoleGuard)
  @Get('/me')
  @ApiOkResponse({
    description: translate('route.account.me.success'),
    type: GetMeResponseDto,
  })
  async getMe(@User() user: AccountWithoutPassword): Promise<GetMeResponseDto> {
    const myGlobalFilter = await this.accountService.getGlobalFilter(user.id);
    const tags = await this.accountService.getTags(user.id);

    return withoutDates({
      ...user,
      tags,
      globalFilter: myGlobalFilter.globalFilter,
    });
  }
}
