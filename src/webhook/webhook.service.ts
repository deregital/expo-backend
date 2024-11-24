import { translate } from '@/i18n/translate';
import {
  getLastMessageTimestampFile,
  writeToLastTimestampFile,
} from '@/shared/utils/utils';
import { BadRequestException, Injectable } from '@nestjs/common';
import crypto from 'crypto';

@Injectable()
export class WebhookService {
  async verifySignature(signature: string, message: string): Promise<boolean> {
    const prefix = 'sha256=';
    if (!signature.startsWith(prefix)) {
      return false;
    }
    const sigWithoutPrefix = signature.slice(prefix.length);

    if (!process.env.META_APP_SECRET) {
      throw new BadRequestException([
        translate('route.webhook.post.no-secret'),
      ]);
    }

    const hmac = crypto.createHmac('sha256', process.env.META_APP_SECRET);
    const messageHash = hmac.update(message).digest('hex');
    return sigWithoutPrefix === messageHash;
  }

  updateJSONFile(waId: string, timestamp: string): void {
    const data = {
      waId: waId,
      timestamp: timestamp,
    };

    const file = getLastMessageTimestampFile();

    const jsonData = JSON.parse(file);

    const myEntry = jsonData.find(
      (entry: { waId: string }) => entry.waId === waId,
    );

    if (myEntry) {
      const index = jsonData.indexOf(myEntry);
      jsonData[index] = data;
    } else {
      jsonData.push(data);
    }

    writeToLastTimestampFile(jsonData);
  }
}
