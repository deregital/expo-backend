import { JsonMessage } from '@/message/dto/message.dto';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { subDays } from 'date-fns/subDays';
import {
  Message,
  Prisma,
  PrismaClient,
  Profile,
  Tag,
} from '~/types/prisma-schema';

export type TableNames = Exclude<Prisma.ModelName, 'Enums'>;

@Injectable()
export class PrismaService implements OnModuleInit {
  private db: PrismaClient;
  private dbWithNoExtend: PrismaClient;

  constructor() {
    this.dbWithNoExtend = new PrismaClient();
    this.db = this.dbWithNoExtend;
  }

  async onModuleInit(): Promise<void> {
    await this.db.$connect();
  }

  getTable<T extends Uncapitalize<TableNames>>(tableName: T): PrismaClient[T] {
    return this.db[tableName];
  }

  unExtend(): void {
    this.db = this.dbWithNoExtend;
  }

  extendGlobalFilter(globalFilter: Array<{ id: Tag['id'] }>): void {
    function generateAndArray<
      T extends Prisma.ProfileFindManyArgs | Prisma.ProfileFindUniqueArgs,
    >(args: T, globalFilterToGenerate: Array<{ id: Tag['id'] }>): T {
      const tagsWhere = args.where?.tags;

      const andArray = Array.isArray(args.where?.AND)
        ? [...args.where.AND, tagsWhere ? { tags: tagsWhere } : {}]
        : args.where?.AND
          ? [args.where.AND, tagsWhere ? { tags: tagsWhere } : {}]
          : [tagsWhere ? { tags: tagsWhere } : {}];

      args.where = {
        ...args.where,
        AND: [
          ...andArray,
          ...globalFilterToGenerate.map(({ id: tagId }) => ({
            tags: {
              some: {
                id: tagId,
              },
            },
          })),
        ],
      };

      return args;
    }

    this.db = this.dbWithNoExtend.$extends({
      query: {
        profile: {
          async findMany({ args, query }) {
            const newArgs = generateAndArray(args, globalFilter);

            return query(newArgs);
          },
          async findUnique({ args, query }) {
            const newArgs = generateAndArray(args, globalFilter);

            return query(newArgs);
          },
        },
      },
    }) as PrismaClient;
  }

  extendWithChat(): PrismaClient {
    return this.db.$extends({
      result: {
        profile: {
          inChat: {
            compute(
              data: Profile & {
                messages: (Message & { message: JsonMessage })[];
              },
            ) {
              return (
                data.messages.length > 0 &&
                data.messages.some(
                  (m) =>
                    m.created_at > subDays(new Date(), 1) &&
                    m.message.from === data.phoneNumber,
                )
              );
            },
          },
        },
      },
    }) as unknown as PrismaClient;
  }

  get profile(): PrismaClient['profile'] {
    return this.db.profile;
  }

  get tag(): PrismaClient['tag'] {
    return this.db.tag;
  }

  get account(): PrismaClient['account'] {
    return this.db.account;
  }

  get tagGroup(): PrismaClient['tagGroup'] {
    return this.db.tagGroup;
  }

  get comment(): PrismaClient['comment'] {
    return this.db.comment;
  }

  get event(): PrismaClient['event'] {
    return this.db.event;
  }

  get eventFolder(): PrismaClient['eventFolder'] {
    return this.db.eventFolder;
  }

  get cannedResponse(): PrismaClient['cannedResponse'] {
    return this.db.cannedResponse;
  }

  get location(): PrismaClient['location'] {
    return this.db.location;
  }

  get message(): PrismaClient['message'] {
    return this.db.message;
  }
}
