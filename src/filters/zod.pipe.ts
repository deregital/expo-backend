import { ZodDtoStatic, ZodValidationPipeOptions } from '@anatine/zod-nestjs';
import { HTTP_ERRORS_BY_CODE } from '@anatine/zod-nestjs/src/lib/http-errors';
import {
  ArgumentMetadata,
  HttpStatus,
  Injectable,
  Optional,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class ZodValidationPipe implements PipeTransform {
  private readonly errorHttpStatusCode: keyof typeof HTTP_ERRORS_BY_CODE;

  constructor(@Optional() options?: ZodValidationPipeOptions) {
    this.errorHttpStatusCode =
      options?.errorHttpStatusCode || HttpStatus.BAD_REQUEST;
  }

  public transform(value: unknown, metadata: ArgumentMetadata): unknown {
    const zodSchema = (metadata?.metatype as ZodDtoStatic)?.zodSchema;

    if (zodSchema) {
      const parseResult = zodSchema.safeParse(value);

      if (!parseResult.success) {
        const { error } = parseResult;
        const message = error.errors.map((error) => `${error.message}`);

        throw new HTTP_ERRORS_BY_CODE[this.errorHttpStatusCode](message);
      }

      return parseResult.data;
    }

    return value;
  }
}
