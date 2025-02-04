import { translate } from '@/i18n/translate';
import { PRISMA_SERVICE } from '@/prisma/constants';
import { PrismaService } from '@/prisma/prisma.service';
import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { Otp, Profile } from '~/types/prisma-schema';

const OTP_EXPIRES_IN = 60 * 5;
export const OTP_LENGTH = 6;

@Injectable()
export class OtpService {
  constructor(@Inject(PRISMA_SERVICE) private readonly prisma: PrismaService) {}

  async createOTP(phoneNumber: Profile['phoneNumber']): Promise<string> {
    if (!process.env.OTP_SECRET) {
      throw new InternalServerErrorException([
        translate('route.otp.secret-not-found'),
      ]);
    }

    const profile = await this.prisma.profile.findFirst({
      where: {
        phoneNumber,
      },
      select: {
        isPhoneVerified: true,
      },
    });

    if (profile?.isPhoneVerified) {
      throw new InternalServerErrorException([
        translate('route.otp.phone-already-verified'),
      ]);
    }

    const alreadyExists = await this.prisma.otp.findFirst({
      where: {
        ownerPhoneNumber: phoneNumber,
      },
    });

    if (alreadyExists) {
      throw new InternalServerErrorException([
        translate('route.otp.already-exists'),
      ]);
    }

    const token = this.generateOTP();

    const { code } = await this.prisma.otp.create({
      data: {
        ownerPhoneNumber: phoneNumber,
        code: token,
        expiresAt: new Date(Date.now() + 1000 * OTP_EXPIRES_IN),
      },
      select: {
        code: true,
      },
    });

    return code;
  }

  async deleteOTP(phoneNumber: Profile['phoneNumber']): Promise<void> {
    await this.prisma.otp.deleteMany({
      where: {
        ownerPhoneNumber: phoneNumber,
      },
    });
  }

  async getOTP(phoneNumber: Profile['phoneNumber']): Promise<Otp | null> {
    return await this.prisma.otp.findFirst({
      where: {
        ownerPhoneNumber: phoneNumber,
      },
    });
  }

  private generateOTP(): string {
    // Declare a digits variable
    // which stores all digits
    const digits = '0123456789';
    let OTP = '';
    const len = digits.length;
    for (let i = 0; i < OTP_LENGTH; i++) {
      OTP += digits[Math.floor(Math.random() * len)];
    }

    return OTP;
  }
}
