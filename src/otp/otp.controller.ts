import { translate } from '@/i18n/translate';
import { WhatsappService } from '@/message/whatsapp.service';
import {
  SendOtpDto,
  SendOtpResponseDto,
  sendOtpResponseSchema,
} from '@/otp/dto/send-otp.dto';
import {
  VerifyOtpDto,
  VerifyOtpResponseDto,
  verifyOtpResponseSchema,
} from '@/otp/dto/verify-otp.dto';
import { OtpService } from '@/otp/otp.service';
import { ProfileService } from '@/profile/profile.service';
import { ErrorDto } from '@/shared/errors/errorType';
import {
  BadRequestException,
  Body,
  Controller,
  NotFoundException,
  Post,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
} from '@nestjs/swagger';
import z from 'zod';

@Controller('otp')
export class OtpController {
  constructor(
    private otpService: OtpService,
    private readonly whatsappService: WhatsappService,
    private readonly profileService: ProfileService,
  ) {}

  @ApiOkResponse({
    description: translate('route.otp.send.success'),
    type: SendOtpResponseDto,
  })
  @ApiNotFoundResponse({
    description: translate('route.otp.send.profile-not-found'),
    type: ErrorDto,
  })
  @ApiBadRequestResponse({
    description: translate('route.otp.send.phone-already-verified'),
    type: ErrorDto,
  })
  @Post('send')
  async sendOtp(
    @Body() body: SendOtpDto,
  ): Promise<z.infer<typeof sendOtpResponseSchema>> {
    const profile = await this.profileService.findByPhoneNumber(
      body.phoneNumber,
    );

    if (!profile) {
      throw new NotFoundException([
        translate('route.otp.send.profile-not-found'),
      ]);
    }

    if (profile?.isPhoneVerified) {
      throw new BadRequestException([
        translate('route.otp.send.phone-already-verified'),
      ]);
    }

    const code = await this.otpService.createOTP(body.phoneNumber);

    await this.whatsappService.sendOTP(body.phoneNumber, code);

    return {
      hasVerified: profile.isPhoneVerified,
      hasUsername: profile.username !== null,
      success: true,
    };
  }

  @ApiOkResponse({
    description: translate('route.otp.verify.success'),
    type: VerifyOtpResponseDto,
  })
  @ApiNotFoundResponse({
    description: translate('route.otp.verify.no-otp-found'),
    type: ErrorDto,
  })
  @ApiBadRequestResponse({
    description: translate('route.otp.verify.otp-expired'),
    type: ErrorDto,
  })
  @Post('verify')
  async verifyOtp(
    @Body() body: VerifyOtpDto,
  ): Promise<z.infer<typeof verifyOtpResponseSchema>> {
    const otp = await this.otpService.getOTP(body.phoneNumber);

    if (!otp) {
      throw new NotFoundException([translate('route.otp.verify.no-otp-found')]);
    }

    const otpInTimeRange = otp.expiresAt.getTime() > Date.now();

    if (!otpInTimeRange) {
      await this.otpService.deleteOTP(body.phoneNumber);
      throw new BadRequestException([
        translate('route.otp.verify.otp-expired'),
      ]);
    }

    if (otp.code !== body.code) {
      throw new BadRequestException([
        translate('route.otp.verify.invalid-otp'),
      ]);
    }

    await this.otpService.deleteOTP(body.phoneNumber);
    const profile = await this.profileService.verifyPhoneNumber(
      body.phoneNumber,
    );

    return {
      success: true,
      profile,
    };
  }
}
