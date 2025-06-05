import { Roles } from '@/auth/decorators/rol.decorator';
import { JwtGuard } from '@/auth/guards/jwt.guard';
import { RoleGuard } from '@/auth/guards/role.guard';
import {
  FindAllDynamicFormsResponseDto,
  findAllDynamicFormsResponseSchema,
} from '@/dynamic-form/dto/find-all-dynamic-form.dto';
import {
  UpdateDynamicFormDto,
  updateDynamicFormResponseSchema,
} from '@/dynamic-form/dto/update-dynamic-form.dto';
import { translate } from '@/i18n/translate';
import { ProfileService } from '@/profile/profile.service';
import { ErrorDto } from '@/shared/errors/errorType';
import { ExistingRecord } from '@/shared/validation/checkExistingRecord';
import { TagGroupService } from '@/tag-group/tag-group.service';
import { TagService } from '@/tag/tag.service';
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
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
} from '@nestjs/swagger';
import z from 'zod';
import { DynamicForm, DynamicOption, Role } from '~/types/prisma-schema';
import {
  CreateDynamicFormDto,
  CreateDynamicFormResponseDto,
  createDynamicFormResponseSchema,
} from './dto/create-dynamic-form.dto';
import { DynamicFormService } from './dynamic-form.service';

@Roles(Role.ADMIN)
@UseGuards(JwtGuard, RoleGuard)
@Controller('dynamic-form')
export class DynamicFormController {
  constructor(
    private readonly dynamicFormService: DynamicFormService,
    private readonly tagGroupService: TagGroupService,
    private readonly tagService: TagService,
    private readonly profileService: ProfileService,
  ) {}

  @ApiCreatedResponse({
    description: translate('route.dynamic-form.create.success'),
    type: CreateDynamicFormResponseDto,
  })
  @ApiConflictResponse({
    description: translate('route.dynamic-form.create.conflict'),
    type: ErrorDto,
  })
  @ApiBadRequestResponse({
    description: translate('route.dynamic-form.create.conflict'),
    type: ErrorDto,
  })
  @Post('/create')
  async create(
    @Body() createDynamicFormDto: CreateDynamicFormDto,
  ): Promise<z.infer<typeof createDynamicFormResponseSchema>> {
    const exists = await this.dynamicFormService.findByName(
      createDynamicFormDto.name,
    );

    if (exists) {
      throw new ConflictException([
        translate('route.dynamic-form.create.conflict'),
      ]);
    }

    this.dynamicFormService.checkEmptyQuestionsOrOptions(createDynamicFormDto);

    return await this.dynamicFormService.create(createDynamicFormDto);
  }

  @ApiNotFoundResponse({
    description: translate('route.dynamic-form.update.not-found'),
    type: ErrorDto,
  })
  @Patch('/update/:id')
  async update(
    @Param('id', new ExistingRecord('dynamicForm')) id: string,
    @Body() updateDynamicFormDto: UpdateDynamicFormDto,
  ): Promise<z.infer<typeof updateDynamicFormResponseSchema>> {
    this.dynamicFormService.checkEmptyQuestionsOrOptions(updateDynamicFormDto);

    const form = (await this.dynamicFormService.findById(id))!;

    const thingsToUpdate: Partial<DynamicForm> = {};

    if (updateDynamicFormDto.name && updateDynamicFormDto.name !== form.name) {
      thingsToUpdate.name = updateDynamicFormDto.name;
    }

    const newQuestions = updateDynamicFormDto.questions.filter(
      (q) => q.id === null,
    );

    const oldQuestions = form.questions.filter(
      (q) => q.id !== null && !newQuestions.some((q2) => q2.id === q.id),
    );

    // Opciones agregadas a preguntas existentes
    const newOptionsFromOldQuestions: Pick<
      DynamicOption,
      'text' | 'questionId'
    >[] = [];
    // Opciones eliminadas de preguntas existentes
    const deletedOptionsFromOldQuestions: Pick<
      DynamicOption,
      'id' | 'text' | 'tagId'
    >[] = [];
    for (const oldQuestion of oldQuestions) {
      const dtoQuestion = updateDynamicFormDto.questions.find(
        (q) => q.id === oldQuestion.id,
      )!;
      for (const dtoOption of dtoQuestion.options) {
        const oldOption = oldQuestion.options.find(
          (o) => o.text === dtoOption.text,
        );
        if (!oldOption) {
          newOptionsFromOldQuestions.push({
            text: dtoOption.text,
            questionId: oldQuestion.id,
          });
        }
      }

      for (const oldOption of oldQuestion.options) {
        const dtoOption = dtoQuestion.options.find(
          (o) => o.text === oldOption.text,
        );
        if (!dtoOption) {
          deletedOptionsFromOldQuestions.push({
            id: oldOption.id,
            text: oldOption.text,
            tagId: oldOption.tagId,
          });
        }
      }
    }

    await this.checkIfDeletedOptionsAreUsed(deletedOptionsFromOldQuestions);

    return { success: true };
    // return await this.dynamicFormService.update(id, updateDynamicFormDto);
  }

  @ApiOkResponse({
    description: translate('route.dynamic-form.all.success'),
    type: FindAllDynamicFormsResponseDto,
  })
  @Get('/all')
  async getAll(): Promise<z.infer<typeof findAllDynamicFormsResponseSchema>> {
    return await this.dynamicFormService.findAll();
  }

  private async checkIfDeletedOptionsAreUsed(
    deletedOptionsFromOldQuestions: Pick<
      DynamicOption,
      'id' | 'text' | 'tagId'
    >[],
  ): Promise<void> {
    const { profiles } = await this.profileService.findByTags(
      deletedOptionsFromOldQuestions.map((o) => o.tagId),
    );
    if (profiles.length > 0) {
      //find the tags used in the profiles, give me the tags and the amount of profiles
      const profileTags = profiles
        .map((p) =>
          p.tags.filter((t) =>
            deletedOptionsFromOldQuestions.map((dO) => dO.tagId).includes(t.id),
          ),
        )
        .filter((t) => t.length > 0)
        .flat();
      const tagsUsedCount = profileTags.reduce(
        (acc, tag) => {
          acc[tag.id] = {
            name: tag.name,
            amount: (acc[tag.id]?.amount ?? 0) + 1,
          };
          return acc;
        },
        {} as Record<
          string,
          {
            name: string;
            amount: number;
          }
        >,
      );

      const firstTagUsed = Object.keys(tagsUsedCount)[0];

      throw new ConflictException([
        translate('route.dynamic-form.update.conflict-tag-in-use', {
          tag: tagsUsedCount[firstTagUsed!]?.name ?? '',
          profiles: tagsUsedCount[firstTagUsed!]?.amount.toString() ?? '',
        }),
      ]);
    }
  }
}
