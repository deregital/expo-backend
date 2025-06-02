import { Module } from '@nestjs/common';
import { DynamicFormService } from './dynamic-form.service';
import { DynamicFormController } from './dynamic-form.controller';

@Module({
  controllers: [DynamicFormController],
  providers: [DynamicFormService],
})
export class DynamicFormModule {}
