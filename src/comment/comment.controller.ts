import {
  Account,
  AccountWithoutPassword,
} from '@/auth/decorators/account.decorator';
import { Roles } from '@/auth/decorators/rol.decorator';
import { JwtGuard } from '@/auth/guards/jwt.guard';
import { RoleGuard } from '@/auth/guards/role.guard';
import { CommentService } from '@/comment/comment.service';
import {
  CreateCommentDto,
  CreateCommentResponseDto,
  createCommentResponseSchema,
} from '@/comment/dto/create-comment.dto';
import {
  GetByProfileCommentResponseDto,
  getByProfileCommentResponseSchema,
} from '@/comment/dto/get-by-profile-comment.dto';
import {
  ToggleSolveCommentResponseDto,
  toggleSolveCommentResponseSchema,
} from '@/comment/dto/toggle-solve-comment.dto';
import { translate } from '@/i18n/translate';
import { ErrorDto } from '@/shared/errors/errorType';
import { ExistingRecord } from '@/shared/validation/checkExistingRecord';
import {
  Body,
  ConflictException,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import {
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
} from '@nestjs/swagger';
import z from 'zod';
import { Comment, Profile, Role } from '~/types';

@Roles(Role.ADMIN, Role.USER)
@UseGuards(JwtGuard, RoleGuard)
@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @ApiNotFoundResponse({
    description: translate('route.comment.create.not-found'),
    type: ErrorDto,
  })
  @ApiCreatedResponse({
    description: translate('route.comment.create.success'),
    type: CreateCommentResponseDto,
  })
  @Post('/create')
  async createComment(
    @Body() createCommentDto: CreateCommentDto,
    @Account() account: AccountWithoutPassword,
  ): Promise<z.infer<typeof createCommentResponseSchema>> {
    // TODO: Add validation for the profileId
    // throw new NotFoundException([
    //   translate('prisma.not-found', {
    //     field: 'id',
    //     model: translate('prisma.model.profile'),
    //     value: createCommentDto.profileId,
    //   }),
    // ]);

    return await this.commentService.createComment(
      createCommentDto,
      account.id,
    );
  }

  @ApiNotFoundResponse({
    description: translate('route.comment.get-by-profile.not-found'),
    type: ErrorDto,
  })
  @ApiOkResponse({
    description: translate('route.comment.get-by-profile.success'),
    type: GetByProfileCommentResponseDto,
  })
  @Get('/get-by-profile/:id')
  async getCommentsByProfileId(
    @Param('id', new ExistingRecord('profile')) profileId: Profile['id'],
  ): Promise<z.infer<typeof getByProfileCommentResponseSchema>> {
    return await this.commentService.getCommentsByProfileId(profileId);
  }

  @ApiConflictResponse({
    description: translate('route.comment.toggle-solve.conflict'),
    type: ErrorDto,
  })
  @ApiOkResponse({
    description: translate('route.comment.toggle-solve.success'),
    type: ToggleSolveCommentResponseDto,
  })
  @ApiNotFoundResponse({
    description: translate('route.comment.toggle-solve.not-found'),
    type: ErrorDto,
  })
  @Patch('/toggle-solve/:id')
  async toggleSolveComment(
    @Param('id', new ExistingRecord('comment')) id: Comment['id'],
    @Account() account: AccountWithoutPassword,
  ): Promise<z.infer<typeof toggleSolveCommentResponseSchema>> {
    const isSolvable = await this.commentService.isCommentSolvable(id);
    if (!isSolvable) {
      throw new ConflictException([
        translate('route.comment.toggle-solve.conflict'),
      ]);
    }

    return await this.commentService.solveComment(id, account.id);
  }
}
