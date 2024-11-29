import { AccountService } from '@/account/account.service';
import { TagGroupController } from '@/tag-group/tag-group.controller';
import { TagGroupService } from '@/tag-group/tag-group.service';
import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [TagGroupController],
  providers: [TagGroupService, JwtService, AccountService],
})
export class TagGroupModule {}
