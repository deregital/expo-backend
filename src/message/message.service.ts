import { TemplateMessage } from '@/message/dto/message-types';
import { PRISMA_SERVICE } from '@/prisma/constants';
import { PrismaService } from '@/prisma/prisma.service';
import { Inject, Injectable } from '@nestjs/common';
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
}
