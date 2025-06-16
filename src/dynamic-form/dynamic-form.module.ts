import { AccountService } from '@/account/account.service';
import { ProfileService } from '@/profile/profile.service';
import { TagGroupService } from '@/tag-group/tag-group.service';
import { TagService } from '@/tag/tag.service';
import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { DynamicFormController } from './dynamic-form.controller';
import { DynamicFormService } from './dynamic-form.service';

@Module({
  controllers: [DynamicFormController],
  providers: [
    DynamicFormService,
    TagService,
    TagGroupService,
    JwtService,
    AccountService,
    ProfileService,
  ],
})
export class DynamicFormModule {}
