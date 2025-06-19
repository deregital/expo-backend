import { Roles } from '@/auth/decorators/rol.decorator';
import { JwtGuard } from '@/auth/guards/jwt.guard';
import { RoleGuard } from '@/auth/guards/role.guard';
import {
  FindAllDynamicFormsResponseDto,
  findAllDynamicFormsResponseSchema,
} from '@/dynamic-form/dto/find-all-dynamic-form.dto';
import {
  UpdateDynamicFormDto,
  UpdateDynamicFormResponseDto,
  updateDynamicFormResponseSchema,
} from '@/dynamic-form/dto/update-dynamic-form.dto';
import { translate } from '@/i18n/translate';
import {
  Profile,
  ProfileWithoutPassword,
} from '@/mi-expo/decorators/profile.decorator';
import { ProfileService } from '@/profile/profile.service';
import { ErrorDto } from '@/shared/errors/errorType';
import { ExistingRecord } from '@/shared/validation/checkExistingRecord';
import { TagGroupService } from '@/tag-group/tag-group.service';

import { TagService } from '@/tag/tag.service';
import {
  BadRequestException,
  Body,
  ConflictException,
  Controller,
  Delete,
  Get,
  NotFoundException,
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
import {
  DynamicForm,
  DynamicOption,
  DynamicQuestion,
  Role,
  TagType,
} from '~/types/prisma-schema';
import {
  CreateDynamicFormDto,
  CreateDynamicFormResponseDto,
  createDynamicFormResponseSchema,
} from './dto/create-dynamic-form.dto';
import {
  DeleteDynamicFormDto,
  deleteDynamicFormSchema,
} from './dto/delete-dynamic-form.dto';
import { FindByNameDynamicFormsResponseDto } from './dto/find-by-name-dynamic-form.dto';
import {
  SubmitDynamicFormsDto,
  SubmitDynamicFormsResponseDto,
  submitDynamicFormsResponseSchema,
} from './dto/submit-dynamic-form.dto';
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

  @Roles(Role.MI_EXPO)
  @ApiBadRequestResponse({
    description: translate('route.dynamic-form.submit.is-required'),
    type: ErrorDto,
  })
  @ApiConflictResponse({
    description: translate('route.dynamic-form.submit.too-many-answers'),
    type: ErrorDto,
  })
  @ApiOkResponse({
    description: translate('route.dynamic-form.submit.success'),
    type: SubmitDynamicFormsResponseDto,
  })
  @Post('/submit/:id')
  async submit(
    @Param('id', new ExistingRecord('dynamicForm')) id: string,
    @Profile() profile: ProfileWithoutPassword,
    @Body() questions: SubmitDynamicFormsDto,
  ): Promise<z.infer<typeof submitDynamicFormsResponseSchema>> {
    console.log(profile.id, questions, id);
    const tagIds = questions.flatMap((question) => {
      if (question.required && question.answers.length === 0) {
        throw new BadRequestException(
          translate('route.dynamic-form.submit.is-required'),
        );
      }

      if (!question.multipleChoice && question.answers.length > 1) {
        throw new ConflictException(
          translate('route.dynamic-form.submit.too-many-answers'),
        );
      }

      return question.answers.map((answer) => answer);
    });

    const profiles = await this.tagService.massiveAllocation({
      profileIds: [profile.id],
      tagIds,
    });

    return profiles;
  }

  @ApiNotFoundResponse({
    description: translate('route.dynamic-form.update.not-found'),
    type: ErrorDto,
  })
  @ApiOkResponse({
    description: translate('route.dynamic-form.update.success'),
    type: UpdateDynamicFormResponseDto,
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

    const deletedQuestions = form.questions.filter(
      (q) =>
        !updateDynamicFormDto.questions.some(
          (q2) => q2.id !== null && q2.id === q.id,
        ),
    );

    const newQuestions = updateDynamicFormDto.questions.filter(
      (q) => q.id === null,
    );

    const oldQuestions = form.questions.filter(
      (q) => q.id !== null && !newQuestions.some((q2) => q2.id === q.id),
    );

    // Opciones agregadas a preguntas existentes
    const newOptionsFromOldQuestions: (Pick<DynamicOption, 'text'> & {
      question: {
        tagGroupId: string;
        id: string;
      };
    })[] = [];
    // Opciones eliminadas de preguntas existentes
    const deletedOptionsFromOldQuestions: Pick<
      DynamicOption,
      'id' | 'text' | 'tagId'
    >[] = [];

    // Preguntas cambiadas
    const changedQuestions: Pick<
      DynamicQuestion,
      'id' | 'text' | 'disabled' | 'required' | 'multipleChoice' | 'tagGroupId'
    >[] = [];
    for (const oldQuestion of oldQuestions) {
      const dtoQuestion = updateDynamicFormDto.questions.find(
        (q) => q.id === oldQuestion.id,
      )!;

      if (!dtoQuestion) {
        continue;
      }

      // Opciones agregadas a preguntas existentes
      for (const dtoOption of dtoQuestion.options) {
        const oldOption = oldQuestion.options.find(
          (o) => o.text === dtoOption.text,
        );
        if (!oldOption) {
          newOptionsFromOldQuestions.push({
            text: dtoOption.text,
            question: {
              id: oldQuestion.id,
              tagGroupId: oldQuestion.tagGroupId,
            },
          });
        }
      }

      // Opciones eliminadas de preguntas existentes
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

      const hasQuestionChanged =
        dtoQuestion.text !== oldQuestion.text ||
        dtoQuestion.disabled !== oldQuestion.disabled ||
        dtoQuestion.required !== oldQuestion.required ||
        dtoQuestion.multipleChoice !== oldQuestion.multipleChoice;

      if (hasQuestionChanged) {
        const res = await this.checkIfDeletedOptionsAreUsed([
          ...oldQuestion.options,
        ]);
        if (res) {
          throw new ConflictException([
            translate(
              'route.dynamic-form.update.conflict-cannot-change-question',
              {
                question: oldQuestion.text,
                option: res.tagName,
                profiles: res.profileAmount.toString(),
              },
            ),
          ]);
        }

        changedQuestions.push({
          id: oldQuestion.id,
          text: dtoQuestion.text,
          disabled: dtoQuestion.disabled,
          required: dtoQuestion.required,
          multipleChoice: dtoQuestion.multipleChoice,
          tagGroupId: oldQuestion.tagGroupId,
        });
      }
    }

    const areDeletedOptionsUsed = await this.checkIfDeletedOptionsAreUsed([
      ...deletedOptionsFromOldQuestions,
      ...deletedQuestions.flatMap((q) => q.options),
    ]);

    if (areDeletedOptionsUsed) {
      throw new ConflictException([
        translate('route.dynamic-form.update.conflict-tag-in-use', {
          tag: areDeletedOptionsUsed.tagName,
          profiles: areDeletedOptionsUsed.profileAmount.toString(),
        }),
      ]);
    }

    if (form.name !== updateDynamicFormDto.name) {
      await this.dynamicFormService.updateName(id, updateDynamicFormDto.name);
    }

    // Preguntas cambiadas
    for (const question of changedQuestions) {
      await this.tagGroupService.update(question.tagGroupId, {
        name: question.text,
      });
      await this.dynamicFormService.updateQuestion(question.id, {
        text: question.text,
        disabled: question.disabled,
        required: question.required,
        multipleChoice: question.multipleChoice,
      });
    }

    // Opciones agregadas a preguntas existentes
    for (const newOption of newOptionsFromOldQuestions) {
      const tag = await this.tagService.create({
        name: newOption.text,
        groupId: newOption.question.tagGroupId,
        type: TagType.FORM_OPTION,
      });
      await this.dynamicFormService.createOption({
        text: newOption.text,
        questionId: newOption.question.id,
        tagId: tag.id,
      });
    }

    // Opciones eliminadas de preguntas existentes
    for (const deletedOption of deletedOptionsFromOldQuestions) {
      await this.dynamicFormService.deleteOption(deletedOption.id);
    }

    await this.dynamicFormService.createManyQuestions(form.id, newQuestions);

    const updatedForm = await this.dynamicFormService.findById(id);

    if (!updatedForm) {
      throw new NotFoundException(
        translate('route.dynamic-form.update.not-found'),
      );
    }

    return updatedForm;
  }

  @ApiOkResponse({
    description: translate('route.dynamic-form.all.success'),
    type: FindAllDynamicFormsResponseDto,
  })
  @Get('/all')
  async getAll(): Promise<z.infer<typeof findAllDynamicFormsResponseSchema>> {
    return await this.dynamicFormService.findAll();
  }

  @Roles(Role.MI_EXPO)
  @ApiNotFoundResponse({
    description: translate('route.dynamic-form.find-by-name.not-found'),
    type: ErrorDto,
  })
  @ApiOkResponse({
    description: translate('route.dynamic-form.find-by-name.success'),
    type: FindByNameDynamicFormsResponseDto,
  })
  @Get('/:name')
  async getByName(@Param('name') name: string): Promise<DynamicForm> {
    const dynamicForm = await this.dynamicFormService.findByName(name);

    if (!dynamicForm) {
      throw new NotFoundException(
        translate('route.dynamic-form.find-by-name.not-found'),
      );
    }

    return dynamicForm;
  }

  @ApiNotFoundResponse({
    description: translate('route.dynamic-form.delete.not-found'),
    type: ErrorDto,
  })
  @ApiOkResponse({
    description: translate('route.dynamic-form.delete.success'),
    type: DeleteDynamicFormDto,
  })
  @Delete('/delete/:id')
  async delete(
    @Param('id', new ExistingRecord('dynamicForm')) id: string,
  ): Promise<z.infer<typeof deleteDynamicFormSchema>> {
    const form = await this.dynamicFormService.findById(id);
    const res = await this.checkIfDeletedOptionsAreUsed(
      form?.questions.flatMap((q) => q.options) ?? [],
    );

    if (res) {
      throw new ConflictException([
        translate('route.dynamic-form.delete.conflict-tag-in-use', {
          option: res.tagName,
          profiles: res.profileAmount.toString(),
        }),
      ]);
    }

    await this.tagGroupService.deleteMany(
      form?.questions.map((q) => q.tagGroupId) ?? [],
    );
    await this.dynamicFormService.delete(id);
    return {
      id,
    };
  }

  private async checkIfDeletedOptionsAreUsed(
    deletedOptionsFromOldQuestions: Pick<
      DynamicOption,
      'id' | 'text' | 'tagId'
    >[],
  ): Promise<
    | {
        tagName: string;
        profileAmount: number;
      }
    | undefined
  > {
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

      return {
        tagName: tagsUsedCount[firstTagUsed!]?.name ?? '',
        profileAmount: tagsUsedCount[firstTagUsed!]?.amount ?? 0,
      };
    }
    return undefined;
  }
}
