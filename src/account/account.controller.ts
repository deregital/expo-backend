import {
  CreateAccountDto,
  CreateAccountResponseDto,
} from '@/account/dto/createAccount.dto';
import { Body, Controller, Get, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { AccountService } from './account.service';
import {
  UpdateGlobalFilterDto,
  UpdateGlobalFilterResponseDto,
} from '@/account/dto/updateGlobalFilter.dto';
import { JwtGuard } from '@/auth/guards/jwt.guard';
import { AccountWithoutPassword, User } from '@/auth/decorators/user.decorator';
import { GetGlobalFilterResponseDto } from '@/account/dto/getGlobalFilter.dto';
import { GetMeResponseDto } from '@/account/dto/getMe.dto';
import { translate } from '@/i18n/translate';
import { Role } from '~/types/prisma-schema';
import { RoleGuard } from '@/auth/guards/role.guard';
import { Roles } from '@/auth/decorators/rol.decorator';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post('/create')
  @ApiCreatedResponse({
    description: translate('route.account.create.success'),
    type: CreateAccountResponseDto,
  })
  async createCuenta(@Body() body: CreateAccountDto) {
    return await this.accountService.create(body);
  }

  @Roles(Role.ADMIN, Role.USER)
  @UseGuards(JwtGuard, RoleGuard)
  @Patch('/global-filter')
  @ApiOkResponse({
    description: translate('route.account.global-filter-patch.success'),
    type: UpdateGlobalFilterResponseDto,
  })
  async updateFiltroBase(
    @Body() body: UpdateGlobalFilterDto,
    @User() user: AccountWithoutPassword,
  ) {
    return await this.accountService.updateGlobalFilter(user.id, body);
  }

  @Roles(Role.ADMIN, Role.USER)
  @UseGuards(JwtGuard, RoleGuard)
  @Get('/global-filter')
  @ApiOkResponse({
    description: translate('route.account.global-filter-get.success'),
    type: GetGlobalFilterResponseDto,
  })
  async getFiltroBase(@User() user: AccountWithoutPassword) {
    return await this.accountService.getFiltroBase(user.id);
  }

  @Roles(Role.ADMIN, Role.USER)
  @UseGuards(JwtGuard, RoleGuard)
  @Get('/me')
  @ApiOkResponse({
    description: translate('route.account.me.success'),
    type: GetMeResponseDto,
  })
  async getMe(@User() user: AccountWithoutPassword) {
    return user;
  }
}
