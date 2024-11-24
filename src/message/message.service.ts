import { translate } from '@/i18n/translate';
import { TemplateMessage } from '@/message/dto/message.dto';
import { nonReadMessagesSchema } from '@/message/dto/non-read-messages.dto';
import { PRISMA_SERVICE } from '@/prisma/constants';
import { PrismaService } from '@/prisma/prisma.service';
import { getLastMessageTimestampFile } from '@/shared/utils/utils';
import {
  Contact,
  StatusChange,
  WebhookMessage,
} from '@/webhook/dto/webhook.dto';
import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import z from 'zod';
import {
  Message,
  MessageState,
  Prisma,
  Profile,
  Tag,
} from '~/types/prisma-schema';

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
    const file = getLastMessageTimestampFile();

    const myEntry = JSON.parse(file).find(
      (entry: { waId: string }) => entry.waId === phone,
    );

    if (!myEntry) {
      return new Date().getTime();
    }

    return myEntry.timestamp as number;
  }

  async findMessageByWamId(wamId: string): Promise<Message | null> {
    return await this.prisma.message.findFirst({
      where: {
        wamId: wamId,
      },
    });
  }

  async createMessageFromWebhook({
    message,
    messageText,
    highestShortId,
    contact,
    notInSystemTagId,
  }: {
    message: WebhookMessage;
    messageText: string;
    highestShortId: Profile['shortId'];
    contact: Contact;
    notInSystemTagId: Tag['id'];
  }): Promise<
    Prisma.MessageGetPayload<{
      include: {
        profile: {
          select: {
            firstName: boolean;
            fullName: boolean;
            _count: {
              select: {
                messages: boolean;
              };
            };
          };
        };
      };
    }>
  > {
    return await this.prisma.message.create({
      data: {
        wamId: message.id,
        message: {
          ...message,
          type: 'text',
          text: {
            body: messageText,
          },
        },
        profile: {
          connectOrCreate: {
            where: {
              phoneNumber: message.from,
            },
            create: {
              shortId: highestShortId + 1,
              fullName: contact.profile.name,
              firstName: contact.profile.name.split(' ')[0],
              phoneNumber: contact.wa_id,
              tags: {
                connect: {
                  id: notInSystemTagId,
                },
              },
            },
          },
        },
      },
      include: {
        profile: {
          select: {
            firstName: true,
            fullName: true,
            _count: {
              select: {
                messages: true,
              },
            },
          },
        },
      },
    });
  }

  async updateMessageStatus(value: StatusChange): Promise<Message | undefined> {
    const status = value.statuses[0];
    if (!status || status.status === 'failed') return;

    const doesMessageExist = await this.prisma.message.findFirst({
      where: {
        wamId: status.id,
      },
    });

    if (!doesMessageExist) {
      return;
    }

    return await this.prisma.message.update({
      where: {
        wamId: status.id,
      },
      data: {
        state:
          status.status === 'delivered'
            ? MessageState.RECEIVED
            : status.status === 'read'
              ? MessageState.SEEN
              : MessageState.SENT,
      },
    });
  }
}
