import { generateReferralCode } from '../src/shared/utils/utils';
import { PrismaClient } from '../types/prisma-schema';

async function main(): Promise<void> {
  const prisma = new PrismaClient();

  const profiles = await prisma.profile.findMany({
    where: {
      referralCode: '',
    },
  });

  for (const profile of profiles) {
    const referralCode = generateReferralCode();
    await prisma.profile.update({
      where: {
        id: profile.id,
      },
      data: {
        referralCode,
      },
    });
    console.log(
      `Updated profile ${profile.id} with referral code ${referralCode}`,
    );
  }
}

main().catch(console.error);
