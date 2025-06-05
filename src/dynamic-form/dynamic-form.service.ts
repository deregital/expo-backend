import { findAllDynamicFormsResponseSchema } from '@/dynamic-form/dto/find-all-dynamic-form.dto';
import { translate } from '@/i18n/translate';
import { PRISMA_SERVICE } from '@/prisma/constants';
import { PrismaService } from '@/prisma/prisma.service';
import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import z from 'zod';
import {
  DynamicForm,
  DynamicOption,
  DynamicQuestion,
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
  constructor(@Inject(PRISMA_SERVICE) private readonly prisma: PrismaService) {}

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

    const groups = await Promise.all(
      form.questions.map((q) =>
        this.prisma.tagGroup.findUnique({
          where: { id: q.tagGroupId },
          include: {
            tags: true,
          },
        }),
      ),
    );

    const tagGroups = groups.filter((g) => g !== null);

    await Promise.all(
      form.questions.map((q) => {
        const tagGroup = tagGroups.find((tg) => tg.name === q.text);
        const inputQuestion = dto.questions.find(
          (qdto) => qdto.text === q.text,
        );
        if (!tagGroup || !inputQuestion) {
          return;
        }

        inputQuestion.options.map(async (o) => {
          const tag = tagGroup.tags.find((t) => t.name === o.text);
          if (!tag) {
            return;
          }

          return await this.prisma.dynamicOption.create({
            data: {
              text: o.text,
              questionId: q.id,
              tagId: tag.id,
            },
          });
        });
      }),
    );

    return form;
  }

  async findByName(name: DynamicForm['name']): Promise<DynamicForm | null> {
    return this.prisma.dynamicForm.findUnique({
      where: { name },
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
}
