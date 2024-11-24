import { translate } from '@/i18n/translate';
import { TemplateMessage } from '@/message/dto/message.dto';
import { nonReadMessagesSchema } from '@/message/dto/non-read-messages.dto';
import { PRISMA_SERVICE } from '@/prisma/constants';
import { PrismaService } from '@/prisma/prisma.service';
import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import fs from 'fs';
import { join as pathJoin } from 'path';
import z from 'zod';
import { Message, MessageState } from '~/types/prisma-schema';

@Injectable()
export class MessageService {
  constructor(@Inject(PRISMA_SERVICE) private readonly prisma: PrismaService) {}

  async createMessage({
    messageId,
    text,
    phoneTo,
  }: {
    messageId: string;
    text: string;
    phoneTo: string;
  }): Promise<Message> {
    return await this.prisma.message.create({
      data: {
        message: {
          id: messageId,
          text: {
            body: text,
          },
          type: 'text',
          to: phoneTo,
          timestamp: new Date().getTime(),
        },
        state: MessageState.SENT,
        wamId: messageId,
        profile: {
          connect: {
            phoneNumber: phoneTo,
          },
        },
      },
    });
  }

  async createTemplateMessages(messages: TemplateMessage[]): Promise<void> {
    await this.prisma.message.createMany({
      data: messages.map((message) => ({
        message: message,
        state: MessageState.SENT,
        wamId: message.id,
        profilePhoneNumber: message.to!,
      })),
    });
  }

  async findByPhone(phone: string): Promise<Message[]> {
    return await this.prisma.message.findMany({
      where: {
        profilePhoneNumber: phone,
      },
      orderBy: {
        created_at: 'asc',
      },
    });
  }

  async readMessages(phone: string): Promise<void> {
    try {
      await this.prisma.message.updateMany({
        where: {
          profilePhoneNumber: phone,
          state: {
            equals: MessageState.SENT,
          },
        },
        data: {
          state: MessageState.SEEN,
        },
      });
    } catch (e) {
      console.error(e);
      throw new InternalServerErrorException([
        translate('route.message.read-messages.error'),
      ]);
    }
  }

  async findNonReadMessages(): Promise<z.infer<typeof nonReadMessagesSchema>> {
    const messages = await this.prisma.message.groupBy({
      by: ['profilePhoneNumber'],
      where: {
        state: MessageState.RECEIVED,
      },
      _count: {
        id: true,
      },
    });
    return { messages };
  }

  async getLastMessageTimestamp(phone: string): Promise<number> {
    const path =
      process.env.NODE_ENV === 'production'
        ? '/tmp/storeLastMessage.json'
        : pathJoin(process.cwd(), '/src/message/storeLastMessage.json');

    const doesFileExist = fs.existsSync(path);

    if (!doesFileExist) {
      fs.writeFileSync(path, '[]', 'utf8');
    }

    const file = fs.readFileSync(path, 'utf-8');

    const myEntry = JSON.parse(file).find(
      (entry: { waId: string }) => entry.waId === phone,
    );

    if (!myEntry) {
      return new Date().getTime();
    }

    return myEntry.timestamp as number;
  }
}
