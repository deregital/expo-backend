import { CreateCommentDto } from '@/comment/dto/create-comment.dto';
import { getByProfileCommentResponseSchema } from '@/comment/dto/get-by-profile-comment.dto';
import { PRISMA_SERVICE } from '@/prisma/constants';
import { PrismaService } from '@/prisma/prisma.service';
import { Inject, Injectable } from '@nestjs/common';
import z from 'zod';
import { Account, Comment } from '~/types';

@Injectable()
export class CommentService {
  constructor(@Inject(PRISMA_SERVICE) private readonly prisma: PrismaService) {}

  async createComment(
    dto: CreateCommentDto,
    accountId: Account['id'],
  ): Promise<Comment> {
    return await this.prisma.comment.create({
      data: {
        content: dto.content,
        isSolvable: dto.isSolvable,
        profileId: dto.profileId,
        createdBy: accountId,
      },
    });
  }

  async getCommentsByProfileId(
    profileId: Comment['profileId'],
  ): Promise<z.infer<typeof getByProfileCommentResponseSchema>> {
    const comments = await this.prisma.comment.findMany({
      where: {
        profileId: profileId,
      },
      include: {
        account: {
          select: {
            username: true,
          },
        },
      },
      orderBy: [
        {
          created_at: 'desc',
        },
        {
          id: 'desc',
        },
      ],
    });

    return {
      comments,
    };
  }

  private async isCommentSolved(
    commentId: Comment['id'],
  ): Promise<Comment['isSolved']> {
    return (await this.prisma.comment.findUnique({
      where: {
        id: commentId,
      },
      select: {
        isSolved: true,
      },
    }))!.isSolved;
  }

  async solveComment(
    commentId: Comment['id'],
    accountId: Account['id'],
  ): Promise<Comment> {
    const isSolved = await this.isCommentSolved(commentId);

    return await this.prisma.comment.update({
      where: {
        id: commentId,
      },
      data: {
        isSolved: !isSolved,
        solvedAt: !isSolved ? new Date() : null,
        solvedById: !isSolved ? accountId : null,
      },
    });
  }

  async isCommentSolvable(
    commentId: Comment['id'],
  ): Promise<Comment['isSolvable']> {
    return (await this.prisma.comment.findUnique({
      where: {
        id: commentId,
      },
      select: {
        isSolvable: true,
      },
    }))!.isSolvable;
  }
}
