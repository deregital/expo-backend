import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { TagGroupService } from './tag-group.service';
import { Roles } from '@/auth/decorators/rol.decorator';
import { Role } from '~/types/prisma-schema';
import { JwtGuard } from '@/auth/guards/jwt.guard';
import { RoleGuard } from '@/auth/guards/role.guard';
import {
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
} from '@nestjs/swagger';
import { translate } from '@/i18n/translate';
import {
  CreateTagGroupDto,
  CreateTagGroupResponseDto,
} from '@/tag-group/dto/create-tag-group.dto';
import { FindAllTagGroupResponseDto } from '@/tag-group/dto/find-all-tag-group.dto';
import { ExistingRecord } from '@/shared/validation/checkExistingRecord';
import { FindOneTagGroupResponseDto } from '@/tag-group/dto/find-one-tag-group.dto';
import {
  UpdateTagGroupDto,
  UpdateTagGroupResponseDto,
} from '@/tag-group/dto/update-tag-group.dto';
import { DeleteTagGroupResponseDto } from '@/tag-group/dto/delete-tag-group.dto';

@Roles(Role.ADMIN, Role.USER)
@UseGuards(JwtGuard, RoleGuard)
@Controller('tag-group')
export class TagGroupController {
  constructor(private readonly tagGroupService: TagGroupService) {}

  @ApiCreatedResponse({
    description: translate('route.tag-group.create.success'),
    type: CreateTagGroupResponseDto,
  })
  @Post('/create')
  async create(
    @Body() createTagGroupDto: CreateTagGroupDto,
  ): Promise<CreateTagGroupResponseDto> {
    return this.tagGroupService.create(createTagGroupDto);
  }

  @ApiOkResponse({
    description: translate('route.tag-group.find-all.success'),
    type: FindAllTagGroupResponseDto,
  })
  @Get('/all')
  async findAll(): Promise<FindAllTagGroupResponseDto> {
    return await this.tagGroupService.findAll();
  }

  @ApiOkResponse({
    description: translate('route.tag-group.find-one.success'),
    type: FindOneTagGroupResponseDto,
  })
  @ApiNotFoundResponse({
    description: translate('route.tag-group.find-one.not-found'),
  })
  @Get('/:id')
  async findById(
    @Param('id', new ExistingRecord('tagGroup')) id: string,
  ): Promise<FindOneTagGroupResponseDto> {
    return await this.tagGroupService.findById(id);
  }

  @ApiOkResponse({
    description: translate('route.tag-group.update.success'),
    type: UpdateTagGroupResponseDto,
  })
  @ApiNotFoundResponse({
    description: translate('route.tag-group.update.not-found'),
  })
  @Patch('/:id')
  async update(
    @Param('id', new ExistingRecord('tagGroup')) id: string,
    @Body() dto: UpdateTagGroupDto,
  ): Promise<UpdateTagGroupResponseDto> {
    return await this.tagGroupService.update(id, dto);
  }

  @ApiOkResponse({
    description: translate('route.tag-group.delete.success'),
    type: DeleteTagGroupResponseDto,
  })
  @ApiNotFoundResponse({
    description: translate('route.tag-group.delete.not-found'),
  })
  @Delete('/:id')
  async delete(
    @Param('id', new ExistingRecord('tagGroup')) id: string,
  ): Promise<DeleteTagGroupResponseDto> {
    return await this.tagGroupService.delete(id);
  }
}
