import { translate } from '@/i18n/translate';
import {
  Profile,
  ProfileWithoutPassword,
} from '@/mi-expo/decorators/profile.decorator';
import {
  LoginWithPhoneDto,
  LoginWithPhoneResponseDto,
  loginWithPhoneResponseSchema,
} from '@/mi-expo/dto/login-with-phone.dto';
import { MiExpoMeResponseDto, meResponseSchema } from '@/mi-expo/dto/me';
import { JwtMiExpoGuard } from '@/mi-expo/jwt-mi-expo.guard';
import { MiExpoService } from '@/mi-expo/mi-expo.service';
import { ProfileService } from '@/profile/profile.service';
import { ErrorDto } from '@/shared/errors/errorType';
import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Post,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { ApiOkResponse, ApiUnauthorizedResponse } from '@nestjs/swagger';
import z from 'zod';

// @UseGuards(JwtMiExpoGuard)
@Controller('mi-expo')
export class MiExpoController {
  constructor(
    private readonly profileService: ProfileService,
    private readonly miExpoService: MiExpoService,
  ) {}

  @ApiUnauthorizedResponse({
    description: translate('route.auth.invalid-credentials'),
    type: ErrorDto,
  })
  @ApiOkResponse({
    description: 'Sesión iniciada',
    type: LoginWithPhoneResponseDto,
  })
  @Post('/login-with-phone')
  async loginWithPhone(
    @Body() body: LoginWithPhoneDto,
  ): Promise<z.infer<typeof loginWithPhoneResponseSchema>> {
    const profile = await this.profileService.findByPhoneNumber(
      body.phoneNumber,
    );

    if (!profile) {
      throw new NotFoundException([translate('route.auth.user-not-found')]);
    }
    if (!profile.isPhoneVerified) {
      throw new UnauthorizedException([
        translate('route.auth.phone-not-verified'),
      ]);
    }

    const tokens = await this.miExpoService.loginProfilePhoneNumber({
      phoneNumber: body.phoneNumber,
    });

    return {
      tokens: tokens.backendTokens,
      profile: tokens.user,
    };
  }

  @UseGuards(JwtMiExpoGuard)
  @ApiOkResponse({
    description: 'Me',
    type: MiExpoMeResponseDto,
  })
  @Get('/me')
  async me(
    @Profile() profile: ProfileWithoutPassword,
  ): Promise<z.infer<typeof meResponseSchema>> {
    return await this.profileService.findById(profile.id);
  }
}
