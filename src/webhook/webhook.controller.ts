import { translate } from '@/i18n/translate';
import { MessageService } from '@/message/message.service';
import { WhatsappService } from '@/message/whatsapp.service';
import { ProfileService } from '@/profile/profile.service';
import { TagService } from '@/tag/tag.service';
import { AUTOMATIC_MESSAGE_DEADLINE } from '@/webhook/constants';
import { ReceivedMessage, WebHookRequest } from '@/webhook/dto/webhook.dto';
import { WebhookService } from '@/webhook/webhook.service';
import {
  BadRequestException,
  Controller,
  ForbiddenException,
  Get,
  Headers,
  InternalServerErrorException,
  NotFoundException,
  Post,
  Query,
  RawBodyRequest,
  Req,
  UnauthorizedException,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiForbiddenResponse,
  ApiOkResponse,
} from '@nestjs/swagger';
import { Request as ExpReq } from 'express';
import { Profile } from '~/types';

@Controller('webhook')
export class WebhookController {
  constructor(
    private readonly webhookService: WebhookService,
    private readonly tagService: TagService,
    private readonly profileService: ProfileService,
    private readonly messageService: MessageService,
    private readonly whatsappService: WhatsappService,
  ) {}

  @ApiOkResponse({
    description: translate('route.webhook.get.success'),
    type: String,
  })
  @ApiForbiddenResponse({
    description: translate('route.webhook.get.forbidden'),
  })
  @ApiBadRequestResponse({
    description: translate('route.webhook.get.bad-request'),
  })
  @Get()
  async verify(
    @Query('hub.mode') mode: string,
    @Query('hub.verify_token') token: string,
    @Query('hub.challenge') challenge: string,
  ): Promise<string> {
    if (mode && token && challenge && mode == 'subscribe') {
      if (token == process.env.META_WHATSAPP_WEBHOOK_VERIFY_TOKEN) {
        return challenge;
      } else {
        throw new ForbiddenException(null);
      }
    } else {
      throw new BadRequestException(null);
    }
  }

  @Post()
  async receiveMessage(
    @Headers('x-hub-signature-256') xHubSignature256: string,
    @Req() req: RawBodyRequest<ExpReq>,
  ): Promise<void> {
    const reqText = req.rawBody?.toString('utf-8');

    if (!reqText) {
      throw new BadRequestException([translate('route.webhook.post.no-body')]);
    }

    if (
      !xHubSignature256 ||
      !(await this.webhookService.verifySignature(xHubSignature256, reqText))
    ) {
      console.warn(`Invalid signature: ${xHubSignature256}`);
      throw new UnauthorizedException([
        translate('route.webhook.post.unauthorized'),
      ]);
    }

    const webhookBody = JSON.parse(reqText) as WebHookRequest;

    try {
      if (webhookBody.entry.length > 0) {
        const changes = webhookBody.entry[0].changes;

        if (changes.length > 0) {
          if (changes[0].field === 'messages') {
            const value = changes[0].value;
            if ('messages' in value) {
              const { messageCreated, profile } =
                await this.createMessage(value);

              // TODO: notifications

              if (
                (!profile ||
                  profile?.created_at > AUTOMATIC_MESSAGE_DEADLINE) &&
                messageCreated &&
                messageCreated.profile._count.messages === 1
              ) {
                const { messageId, text: automaticResponseText } =
                  await this.whatsappService.sendAutomaticResponse({
                    phone: value.contacts[0].wa_id,
                    name:
                      messageCreated.profile.firstName ??
                      messageCreated.profile.fullName,
                  });
                await this.messageService.createMessage({
                  phoneTo: value.contacts[0].wa_id,
                  text: automaticResponseText,
                  messageId,
                });
              }
              this.webhookService.updateLastTimestampFile(
                value.contacts[0].wa_id,
                value.messages[0]!.timestamp,
              );
            } else if ('statuses' in value) {
              await this.messageService.updateMessageStatus(value);
              this.webhookService.updateLastTimestampFile(
                value.metadata.display_phone_number,
                value.statuses[0].timestamp,
              );
            }
          }
        }
      }
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException([
        translate('route.webhook.post.error'),
      ]);
    }
  }

  private async createMessage(value: ReceivedMessage): Promise<{
    profile: Profile | null;
    messageCreated: Awaited<
      ReturnType<typeof MessageService.prototype.createMessageFromWebhook>
    > | null;
  }> {
    const message = value.messages[0];
    const contact = value.contacts[0];

    const notInSystemTag = await this.tagService.findNotInSystemTag();

    if (!notInSystemTag) {
      throw new NotFoundException([
        translate('route.webhook.post.tag-not-found'),
      ]);
    }

    const profile = await this.profileService.findByPhoneNumber(
      contact.wa_id,
      undefined,
    );

    // if (!profile) {
    //   throw new NotFoundException([
    //     translate('route.webhook.post.profile-not-found'),
    //   ]);
    // }

    if (!message || !['text', 'button', 'template'].includes(message.type)) {
      return {
        profile: profile ?? null,
        messageCreated: null,
      };
    }

    const highestShortId = await this.profileService.getHighestShortId();

    const doesMessageExist = await this.messageService.findMessageByWamId(
      message.id,
    );

    if (doesMessageExist) {
      return {
        profile,
        messageCreated: null,
      };
    }

    let messageText: string | null = null;

    if (message.type === 'text') {
      messageText = message.text.body;
    } else if (message.type === 'button') {
      messageText = message.button.text;
    } else {
      messageText = 'Mensaje no soportado';
    }

    const messageCreated = await this.messageService.createMessageFromWebhook({
      contact,
      highestShortId,
      message,
      messageText,
      notInSystemTagId: notInSystemTag.id,
    });

    return {
      profile,
      messageCreated,
    };
  }
}
