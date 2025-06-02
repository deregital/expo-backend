import { PartialType } from '@nestjs/swagger';
import { CreateDynamicFormDto } from './create-dynamic-form.dto';

export class UpdateDynamicFormDto extends PartialType(CreateDynamicFormDto) {}
