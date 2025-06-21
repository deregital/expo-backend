import { findAllDynamicFormsResponseSchema } from '@/dynamic-form/dto/find-all-dynamic-form.dto';
import { translate } from '@/i18n/translate';
import { PRISMA_SERVICE } from '@/prisma/constants';
import { PrismaService } from '@/prisma/prisma.service';
import { TagGroupService } from '@/tag-group/tag-group.service';
import { TagService } from '@/tag/tag.service';
import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import z from 'zod';
import {
  DynamicForm,
  DynamicOption,
  DynamicQuestion,
  Prisma,
  Tag,
  TagGroup,
  TagType,
} from '~/types/prisma-schema';
import {
  CreateDynamicFormDto,
  createDynamicFormResponseSchema,
} from './dto/create-dynamic-form.dto';

@Injectable()
export class DynamicFormService {
  constructor(
    @Inject(PRISMA_SERVICE) private readonly prisma: PrismaService,
    private readonly tagService: TagService,
    private readonly tagGroupService: TagGroupService,
  ) {}

  async create(
    dto: CreateDynamicFormDto,
  ): Promise<z.infer<typeof createDynamicFormResponseSchema>> {
    const form = await this.prisma.dynamicForm.create({
      data: {
        name: dto.name,
        questions: {
          create: dto.questions.map((q) => ({
            text: q.text,
            disabled: q.disabled,
            required: q.required,
            multipleChoice: q.multipleChoice,
            tagGroup: {
              create: {
                name: q.text,
                color: '#333',
                isExclusive: !q.multipleChoice,
                tags: {
                  create: q.options.map((o) => ({
                    name: o.text,
                    type: TagType.FORM_OPTION,
                  })),
                },
              },
            },
          })),
        },
      },
      include: {
        questions: {
          include: {
            tagGroup: {
              include: {
                tags: true,
              },
            },
            options: true,
          },
        },
      },
    });

    const options = await this.createOptions(form.questions, dto.questions);

    return {
      id: form.id,
      name: form.name,
      questions: form.questions.map((q) => ({
        ...q,
        options:
          options
            .filter((o) => o.questionId === q.id)
            .map((o) => ({
              id: o.id,
              text: o.text,
              tagId: o.tagId,
            })) ?? [],
      })),
    };
  }

  async findByName(name: DynamicForm['name']): Promise<
    | (DynamicForm & {
        questions: (DynamicQuestion & {
          tagGroup: TagGroup & {
            tags: Tag[];
          };
          options: DynamicOption[];
        })[];
      })
    | null
  > {
    return this.prisma.dynamicForm.findUnique({
      where: { name },
      include: {
        questions: {
          include: {
            tagGroup: {
              include: {
                tags: true,
              },
            },
            options: true,
          },
        },
      },
    });
  }

  async findById(id: DynamicForm['id']): Promise<
    | (DynamicForm & {
        questions: (DynamicQuestion & {
          tagGroup: TagGroup & {
            tags: Tag[];
          };
          options: DynamicOption[];
        })[];
      })
    | null
  > {
    return this.prisma.dynamicForm.findUnique({
      where: { id },
      include: {
        questions: {
          include: {
            tagGroup: {
              include: {
                tags: true,
              },
            },
            options: true,
          },
        },
      },
    });
  }

  async findQuestionById(id: DynamicQuestion['id']): Promise<
    | (DynamicQuestion & {
        options: DynamicOption[];
      })
    | null
  > {
    return this.prisma.dynamicQuestion.findUnique({
      where: {
        id: id,
      },
      include: {
        options: true,
      },
    });
  }

  async findTagIdById(
    id: DynamicOption['id'],
  ): Promise<{ tagId: string } | null> {
    return await this.prisma.dynamicOption.findFirst({
      where: {
        id: id,
      },
      select: {
        tagId: true,
      },
    });
  }

  async findAll(): Promise<z.infer<typeof findAllDynamicFormsResponseSchema>> {
    return this.prisma.dynamicForm.findMany({
      include: {
        questions: {
          include: {
            tagGroup: true,
            options: {
              include: {
                tag: true,
              },
            },
          },
        },
      },
    });
  }

  async updateQuestion(
    id: DynamicQuestion['id'],
    dto: Pick<
      DynamicQuestion,
      'text' | 'disabled' | 'required' | 'multipleChoice'
    >,
  ): Promise<DynamicQuestion> {
    return this.prisma.dynamicQuestion.update({
      where: { id },
      data: dto,
    });
  }

  async createOption(dto: {
    text: string;
    questionId: string;
    tagId: string;
  }): Promise<DynamicOption> {
    return this.prisma.dynamicOption.create({ data: dto });
  }

  async deleteOption(id: DynamicOption['id']): Promise<DynamicOption> {
    const deleted = await this.prisma.dynamicOption.delete({ where: { id } });
    await this.tagService.delete(deleted.tagId);
    return deleted;
  }

  async createManyQuestions(
    formId: DynamicForm['id'],
    questions: (Pick<
      DynamicQuestion,
      'text' | 'disabled' | 'required' | 'multipleChoice'
    > & {
      options: {
        text: string;
      }[];
    })[],
  ): Promise<DynamicForm> {
    const form = await this.prisma.dynamicForm.update({
      where: { id: formId },
      data: {
        questions: {
          create: this.questionsToCreate(questions),
        },
      },
      include: {
        questions: {
          include: {
            tagGroup: true,
            options: true,
          },
        },
      },
    });

    await this.createOptions(form.questions, questions);

    return form;
  }

  checkEmptyQuestionsOrOptions(dto: {
    questions: {
      options: {
        text: string;
      }[];
    }[];
  }): void {
    const emptyQuestions = dto.questions.length === 0;
    const emptyOptions = dto.questions.some(
      (question) => question.options.length === 0,
    );

    if (emptyQuestions) {
      throw new BadRequestException(
        translate('model.dynamicForm.questions.min'),
      );
    }

    if (emptyOptions) {
      throw new BadRequestException(
        translate('model.dynamicQuestion.options.min'),
      );
    }
  }

  private questionsToCreate(
    questions: (Pick<
      DynamicQuestion,
      'text' | 'disabled' | 'required' | 'multipleChoice'
    > & {
      options: {
        text: string;
      }[];
    })[],
  ): Prisma.DynamicQuestionCreateWithoutFormInput[] {
    return questions.map((q) => ({
      text: q.text,
      disabled: q.disabled,
      required: q.required,
      multipleChoice: q.multipleChoice,
      tagGroup: {
        create: {
          name: q.text,
          color: '#333',
          isExclusive: !q.multipleChoice,
          tags: {
            create: q.options.map((o) => ({
              name: o.text,
              type: TagType.FORM_OPTION,
            })),
          },
        },
      },
    }));
  }

  async createOptions(
    formQuestions: DynamicQuestion[],
    inputQuestions: {
      text: string;
      options: {
        text: string;
      }[];
    }[],
  ): Promise<Pick<DynamicOption, 'id' | 'text' | 'tagId' | 'questionId'>[]> {
    const tagGroups = await this.tagGroupService.findByIds(
      formQuestions.map((q) => q.tagGroupId),
    );

    const optionsToCreate: Prisma.DynamicOptionCreateManyInput[] = [];
    for (const question of formQuestions) {
      const tagGroup = tagGroups.find((tg) => tg.name === question.text);
      const inputQuestion = inputQuestions.find(
        (qdto) => qdto.text === question.text,
      );

      if (!tagGroup || !inputQuestion) {
        continue;
      }

      const optionsToCreateImpl = inputQuestion.options.map((o) => {
        const tag = tagGroup.tags.find((t) => t.name === o.text)!;
        return {
          text: o.text,
          questionId: question.id,
          tagId: tag.id,
        };
      });

      optionsToCreate.push(...optionsToCreateImpl);
    }

    const options = await this.prisma.dynamicOption.createManyAndReturn({
      data: optionsToCreate,
      select: {
        id: true,
        text: true,
        tagId: true,
        questionId: true,
      },
    });

    return options;
  }

  async updateName(
    id: DynamicForm['id'],
    name: DynamicForm['name'],
  ): Promise<DynamicForm> {
    return this.prisma.dynamicForm.update({
      where: { id },
      data: { name },
    });
  }

  async delete(id: DynamicForm['id']): Promise<DynamicForm> {
    return this.prisma.dynamicForm.delete({ where: { id } });
  }
}
