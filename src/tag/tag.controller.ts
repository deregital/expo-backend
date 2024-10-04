import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  Patch,
} from '@nestjs/common';
import { TagService } from './tag.service';
import { Roles } from '@/auth/decorators/rol.decorator';
import { Role } from '~/types/prisma-schema';
import { JwtGuard } from '@/auth/guards/jwt.guard';
import { RoleGuard } from '@/auth/guards/role.guard';
import { CreateTagDto, CreateTagResponseDto } from '@/tag/dto/create-tag.dto';
import { DeleteTagResponseDto } from '@/tag/dto/delete-tag.dto';
import {
  ApiCreatedResponse,
  ApiGoneResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
} from '@nestjs/swagger';
import { translate } from '@/i18n/translate';
import { ExistingRecord } from '@/shared/validation/checkExistingRecord';
import { FindAllTagResponseDto } from '@/tag/dto/find-all-tag.dto';
import { FindOneTagResponseDto } from '@/exports';
import { UpdateTagDto, UpdateTagResponseDto } from '@/tag/dto/update-tag.dto';
import { FindByGroupTagResponseDto } from '@/tag/dto/find-by-group-tag.dto';
import { FindAllGroupedTagResponseDto } from '@/tag/dto/find-all-grouped-tag.dto';

@Roles(Role.ADMIN, Role.USER)
@UseGuards(JwtGuard, RoleGuard)
@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Post('/create')
  @ApiCreatedResponse({
    description: translate('route.tag.create.success'),
    type: CreateTagResponseDto,
  })
  async create(
    @Body() createTagDto: CreateTagDto,
  ): Promise<CreateTagResponseDto> {
    return await this.tagService.create(createTagDto);
  }

  @Get('/all')
  @ApiOkResponse({
    description: translate('route.tag.find-all.success'),
    type: FindAllTagResponseDto,
  })
  async findAll(): Promise<FindAllTagResponseDto> {
    return await this.tagService.findAll();
  }

  @ApiOkResponse({
    description: translate('route.tag.find-all-grouped.success'),
    type: FindAllGroupedTagResponseDto,
  })
  @Get('/all-grouped')
  async findAllGrouped(): Promise<FindAllGroupedTagResponseDto> {
    return await this.tagService.findAllGrouped();
  }

  @ApiOkResponse({
    description: translate('route.tag.find-by-group.success'),
    type: FindByGroupTagResponseDto,
  })
  @ApiNotFoundResponse({
    description: translate('route.tag.find-by-group.not-found'),
  })
  @Get('/find-by-group/:groupId')
  async findByGroup(
    @Param('groupId', new ExistingRecord('tagGroup')) groupId: string,
  ): Promise<FindByGroupTagResponseDto> {
    return await this.tagService.findByGroup(groupId);
  }

  @Get('/:id')
  @ApiOkResponse({
    description: translate('route.tag.find-one.success'),
    type: FindOneTagResponseDto,
  })
  @ApiNotFoundResponse({
    description: translate('route.tag.find-one.not-found'),
  })
  async findById(
    @Param('id', new ExistingRecord('tag')) id: string,
  ): Promise<FindOneTagResponseDto> {
    return await this.tagService.findById(id);
  }

  @ApiOkResponse({
    description: translate('route.tag.update.success'),
    type: UpdateTagResponseDto,
  })
  @ApiNotFoundResponse({
    description: translate('route.tag.update.not-found'),
  })
  @Patch('/:id')
  async update(
    @Param('id', new ExistingRecord('tag')) id: string,
    @Body() updateTagDto: UpdateTagDto,
  ): Promise<UpdateTagResponseDto> {
    return await this.tagService.update(id, updateTagDto);
  }

  @ApiGoneResponse({
    description: translate('route.tag.delete.success'),
    type: DeleteTagResponseDto,
  })
  @ApiNotFoundResponse({
    description: translate('route.tag.delete.not-found'),
  })
  @Delete('/:id')
  async remove(
    @Param('id', new ExistingRecord('tag')) id: string,
  ): Promise<DeleteTagResponseDto> {
    return await this.tagService.remove(id);
  }
}
