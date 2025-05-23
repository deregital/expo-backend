import { Roles } from '@/auth/decorators/rol.decorator';
import { JwtGuard } from '@/auth/guards/jwt.guard';
import { RoleGuard } from '@/auth/guards/role.guard';
import { EventService } from '@/event/event.service';
import { translate } from '@/i18n/translate';
import {
  Profile,
  ProfileWithoutPassword,
} from '@/mi-expo/decorators/profile.decorator';

import {
  GetInvitationsResponseDto,
  getInvitationsResponseSchema,
} from '@/mi-expo/dto/get-invitations.dto';
import {
  GetMiExpoMeResponseDto,
  getMiExpoMeResponseSchema,
} from '@/mi-expo/dto/get-me.dto';
import {
  LoginWithPhoneDto,
  LoginWithPhoneResponseDto,
  loginWithPhoneResponseSchema,
} from '@/mi-expo/dto/login-with-phone.dto';
import {
  LoginMiExpoDto,
  LoginMiExpoResponseDto,
  loginMiExpoResponseSchema,
} from '@/mi-expo/dto/login.dto';
import {
  UpdateMiExpoMeDto,
  UpdateMiExpoMeResponseDto,
  updateMiExpoMeResponseSchema,
} from '@/mi-expo/dto/update-me.dto';
import { MiExpoService } from '@/mi-expo/mi-expo.service';
import { ProfileService } from '@/profile/profile.service';
import { ErrorDto } from '@/shared/errors/errorType';
import {
  FindByProfileIdTicketResponseDto,
  findByProfileIdTicketResponseSchema,
} from '@/ticket/dto/find-by-profile-id-ticket.dto';
import { TicketService } from '@/ticket/ticket.service';
import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Patch,
  Post,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { ApiOkResponse, ApiUnauthorizedResponse } from '@nestjs/swagger';
import z from 'zod';
import { Role, TagType, TicketType } from '~/types/prisma-schema';

@Controller('mi-expo')
export class MiExpoController {
  constructor(
    private readonly profileService: ProfileService,
    private readonly miExpoService: MiExpoService,
    private readonly eventService: EventService,
    private readonly ticketService: TicketService,
  ) {}

  @ApiUnauthorizedResponse({
    description: translate('route.auth.invalid-credentials'),
    type: ErrorDto,
  })
  @ApiOkResponse({
    description: 'Sesión iniciada',
    type: LoginWithPhoneResponseDto,
  })
  @Post('/login-with-phone')
  async loginWithPhone(
    @Body() body: LoginWithPhoneDto,
  ): Promise<z.infer<typeof loginWithPhoneResponseSchema>> {
    const profile = await this.profileService.findByPhoneNumber(
      body.phoneNumber,
    );

    if (!profile) {
      throw new NotFoundException([translate('route.auth.user-not-found')]);
    }
    if (!profile.isPhoneVerified) {
      throw new UnauthorizedException([
        translate('route.auth.phone-not-verified'),
      ]);
    }

    const tokens = await this.miExpoService.loginProfilePhoneNumber({
      phoneNumber: body.phoneNumber,
    });

    return {
      tokens: tokens.backendTokens,
      profile: tokens.user,
    };
  }

  @Roles(Role.MI_EXPO)
  @UseGuards(JwtGuard, RoleGuard)
  @ApiOkResponse({
    description: translate('route.profile.find-by-id.success'),
    type: GetMiExpoMeResponseDto,
  })
  @Get('/me')
  async me(
    @Profile() meProfile: ProfileWithoutPassword,
  ): Promise<z.infer<typeof getMiExpoMeResponseSchema>> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...profile } = await this.profileService.findById(
      meProfile.id,
    );
    return profile;
  }

  @Roles(Role.MI_EXPO)
  @UseGuards(JwtGuard, RoleGuard)
  @ApiOkResponse({
    description: 'Me',
    type: GetMiExpoMeResponseDto,
  })
  @ApiOkResponse({
    description: translate('route.profile.update.success'),
    type: UpdateMiExpoMeResponseDto,
  })
  @Patch('/me')
  async updateMe(
    @Profile() profile: ProfileWithoutPassword,
    @Body() body: UpdateMiExpoMeDto,
  ): Promise<z.infer<typeof updateMiExpoMeResponseSchema>> {
    return await this.profileService.update(profile.id, {
      ...body,
      firstTimeMiExpo: false,
    });
  }

  @Roles(Role.MI_EXPO)
  @UseGuards(JwtGuard, RoleGuard)
  @ApiOkResponse({
    description: translate('route.mi-expo.my-events.success'),
    type: GetInvitationsResponseDto,
  })
  @Get('/invitations')
  async invitations(
    @Profile() profile: ProfileWithoutPassword,
  ): Promise<z.infer<typeof getInvitationsResponseSchema>> {
    const { tags } = await this.profileService.findById(profile.id);
    const profileTags = tags.filter((tag) => tag.type === TagType.PROFILE);

    if (profileTags.length === 0) {
      return {
        events: [],
      };
    }

    const eventsByTags = await this.eventService.findActiveByTags(
      profileTags.map((tag) => tag.id),
    );
    const notFullEvents = eventsByTags.filter((event) => {
      const participantTicketsEmitted = event.eventTickets.filter(
        (eventTicket) => eventTicket.type === TicketType.PARTICIPANT,
      ).length;
      return (
        event.tickets.filter((ticket) => ticket.type === TicketType.PARTICIPANT)
          .length < participantTicketsEmitted
      );
    });

    return {
      events: notFullEvents,
    };
  }

  @Roles(Role.MI_EXPO)
  @UseGuards(JwtGuard, RoleGuard)
  @ApiOkResponse({
    description: translate('route.mi-expo.my-tickets.success'),
    type: FindByProfileIdTicketResponseDto,
  })
  @Get('/tickets')
  async tickets(
    @Profile() profile: ProfileWithoutPassword,
  ): Promise<z.infer<typeof findByProfileIdTicketResponseSchema>> {
    return await this.ticketService.findByProfileId(profile.id);
  }

  @ApiUnauthorizedResponse({
    description: translate('route.auth.invalid-credentials'),
    type: ErrorDto,
  })
  @ApiOkResponse({
    description: 'Sesión iniciada',
    type: LoginMiExpoResponseDto,
  })
  @Post('/login')
  async loginUsernamePassword(
    @Body() body: LoginMiExpoDto,
  ): Promise<z.infer<typeof loginMiExpoResponseSchema>> {
    const tokens = await this.miExpoService.loginProfile(body);

    return {
      backendTokens: tokens.backendTokens,
      user: tokens.user,
    };
  }
}
