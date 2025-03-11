import { translate } from '@/i18n/translate';
import { LoginMiExpoDto } from '@/mi-expo/dto/login.dto';
import { ProfileService } from '@/profile/profile.service';
import { LoginProfilePayload, generateToken } from '@/shared/auth/auth-utils';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { Profile } from '~/types/prisma-schema';

@Injectable()
export class MiExpoService {
  constructor(
    private profileService: ProfileService,
    private jwtService: JwtService,
  ) {}

  async loginProfilePhoneNumber({
    phoneNumber,
  }: {
    phoneNumber: string;
  }): Promise<LoginProfilePayload> {
    const profile = await this.profileService.findByPhoneNumber(phoneNumber);

    if (!profile) {
      throw new UnauthorizedException([
        translate('route.auth.invalid-credentials'),
      ]);
    }

    const backendTokens = await generateToken(
      {
        id: profile.id,
        username: profile.username ?? '',
        role: profile.role,
      },
      this.jwtService,
    );

    return {
      user: profile,
      backendTokens,
    };
  }

  async loginProfile(dto: LoginMiExpoDto): Promise<LoginProfilePayload> {
    const profile = await this.validateProfile(dto);

    const backendTokens = await generateToken(
      {
        id: profile.id,
        username: dto.username,
        role: profile.role,
      },
      this.jwtService,
    );
    return {
      user: profile,
      backendTokens,
    };
  }

  private async validateProfile(dto: LoginMiExpoDto): Promise<Profile> {
    const profile = await this.profileService.findByUsername(dto.username);

    if (!profile?.password) {
      throw new UnauthorizedException([
        translate('route.auth.invalid-credentials'),
      ]);
    }

    if (profile && (await compare(dto.password, profile.password))) {
      return profile;
    }

    throw new UnauthorizedException([
      translate('route.auth.invalid-credentials'),
    ]);
  }

  async refreshToken(profile: Profile): Promise<{
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
  }> {
    const profileFound = await this.profileService.findByUsername(
      profile.username,
    );
    if (!profileFound) {
      throw new UnauthorizedException([translate('route.auth.invalid-token')]);
    }

    const backendTokens = await generateToken(
      {
        id: profileFound.id,
        username: profileFound.username ?? '',
        role: profileFound.role,
      },
      this.jwtService,
    );

    return {
      ...backendTokens,
    };
  }
}
