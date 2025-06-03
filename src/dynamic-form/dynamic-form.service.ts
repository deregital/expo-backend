import { PRISMA_SERVICE } from '@/prisma/constants';
import { PrismaService } from '@/prisma/prisma.service';
import { Inject, Injectable } from '@nestjs/common';
import z from 'zod';
import { DynamicForm, TagType } from '~/types';
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
}
