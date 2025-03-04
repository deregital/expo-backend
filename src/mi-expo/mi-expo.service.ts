import { BackendTokens, EXPIRE_TIME } from '@/auth/auth.service';
import { translate } from '@/i18n/translate';
import { LoginMiExpoDto } from '@/mi-expo/dto/login.dto';
import { ProfileService } from '@/profile/profile.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { Profile } from '~/types/prisma-schema';

type LoginProfilePayload = {
  user: Omit<Profile, 'password'>;
  backendTokens: BackendTokens;
};

type Payload =
  | {
      id: string;
    }
  | {
      id: string;
      username: Profile['username'];
      password: Profile['password'];
    };

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

    const backendTokens = await this.generateToken({
      id: profile.id,
      username: profile.username,
      password: profile.password,
    });

    return {
      user: profile,
      backendTokens,
    };
  }

  async loginProfile(dto: LoginMiExpoDto): Promise<LoginProfilePayload> {
    const profile = await this.validateProfile(dto);

    const backendTokens = await this.generateToken({
      id: profile.id,
      username: dto.username,
      password: dto.password,
    });
    return {
      user: profile,
      backendTokens,
    };
  }

  private async generateToken(user: {
    username: Profile['username'];
    password: Profile['password'];
    id: string;
  }): Promise<LoginProfilePayload['backendTokens']> {
    const payload = this.getPayload(user);

    return {
      accessToken: await this.jwtService.signAsync(payload, {
        expiresIn: '1h',
        secret: process.env.JWT_SECRET,
      }),
      refreshToken: await this.jwtService.signAsync(payload, {
        expiresIn: '7d',
        secret: process.env.JWT_REFRESH,
      }),
      expiresIn: new Date().setTime(new Date().getTime() + EXPIRE_TIME),
    };
  }

  private getPayload(user: {
    id: string;
    username: Profile['username'];
    password: Profile['password'];
  }): Payload {
    if (user.username && user.password) {
      return {
        id: user.id,
        username: user.username,
        password: user.password,
      };
    }
    return {
      id: user.id,
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

    const backendTokens = await this.generateToken(profileFound);

    return {
      ...backendTokens,
    };
  }
}
