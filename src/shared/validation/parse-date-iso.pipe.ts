import { translate } from '@/i18n/translate';
import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
  PreconditionFailedException,
} from '@nestjs/common';
import { DateTime } from 'luxon';

@Injectable()
export class ParseDateIsoPipe implements PipeTransform {
  transform(value: string, _metadata: ArgumentMetadata): string | null {
    if (!DateTime.fromFormat(value, 'yyyy-LL-dd').isValid) {
      throw new PreconditionFailedException([
        translate('route.profile.find-by-date-range.invalid-date'),
      ]);
    }
    return value ? DateTime.fromISO(value).startOf('day').toISO() : null;
  }
}
