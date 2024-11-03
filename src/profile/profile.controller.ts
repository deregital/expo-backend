import { Roles } from '@/auth/decorators/rol.decorator';
import { JwtGuard } from '@/auth/guards/jwt.guard';
import { RoleGuard } from '@/auth/guards/role.guard';
import { translate } from '@/i18n/translate';
import {
  FindAllProfileResponseDto,
  findAllProfileResponseSchema,
} from '@/profile/dto/find-all-profile.dto';
import { ProfileService } from '@/profile/profile.service';
import {
  VisibleTags,
  VisibleTagsType,
} from '@/shared/decorators/visible-tags.decorator';
import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import z from 'zod';
import { Role } from '~/types';

@Roles(Role.ADMIN, Role.USER)
@UseGuards(JwtGuard, RoleGuard)
@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @ApiOkResponse({
    type: FindAllProfileResponseDto,
    description: translate('route.profile.find-all.success'),
  })
  @Get('/all')
  async findAll(
    @VisibleTags() visibleTags: VisibleTagsType,
  ): Promise<z.infer<typeof findAllProfileResponseSchema>> {
    return await this.profileService.findAll(visibleTags);
  }
}
