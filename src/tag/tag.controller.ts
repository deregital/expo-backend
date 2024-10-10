import { Roles } from '@/auth/decorators/rol.decorator';
import { JwtGuard } from '@/auth/guards/jwt.guard';
import { RoleGuard } from '@/auth/guards/role.guard';
import { translate } from '@/i18n/translate';
import { withoutDates } from '@/shared/dto-modification/without-dates';
import { ErrorDto } from '@/shared/errors/errorType';
import { ExistingRecord } from '@/shared/validation/checkExistingRecord';
import { CreateTagDto, CreateTagResponseDto } from '@/tag/dto/create-tag.dto';
import { DeleteTagResponseDto } from '@/tag/dto/delete-tag.dto';
import { FindAllTagResponseDto } from '@/tag/dto/find-all-tag.dto';
import { FindByGroupTagResponseDto } from '@/tag/dto/find-by-group-tag.dto';
import { FindOneTagResponseDto } from '@/tag/dto/find-one-tag.dto';
import { UpdateTagDto, UpdateTagResponseDto } from '@/tag/dto/update-tag.dto';
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
import {
  ApiCreatedResponse,
  ApiGoneResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
} from '@nestjs/swagger';
import { Role } from '~/types/prisma-schema';
import { TagService } from './tag.service';

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
    return withoutDates(await this.tagService.create(createTagDto));
  }

  @Get('/all')
  @ApiOkResponse({
    description: translate('route.tag.find-all.success'),
    type: FindAllTagResponseDto,
  })
  async findAll(): Promise<FindAllTagResponseDto> {
    return withoutDates(await this.tagService.findAll());
  }

  @ApiOkResponse({
    description: translate('route.tag.find-by-group.success'),
    type: FindByGroupTagResponseDto,
  })
  @ApiNotFoundResponse({
    description: translate('route.tag.find-by-group.not-found'),
    type: ErrorDto,
  })
  @Get('/find-by-group/:groupId')
  async findByGroup(
    @Param('groupId', new ExistingRecord('tagGroup')) groupId: string,
  ): Promise<FindByGroupTagResponseDto> {
    return withoutDates(await this.tagService.findByGroup(groupId));
  }

  @Get('/:id')
  @ApiOkResponse({
    description: translate('route.tag.find-one.success'),
    type: FindOneTagResponseDto,
  })
  @ApiNotFoundResponse({
    description: translate('route.tag.find-one.not-found'),
    type: ErrorDto,
  })
  async findById(
    @Param('id', new ExistingRecord('tag')) id: string,
  ): Promise<FindOneTagResponseDto> {
    return withoutDates(await this.tagService.findById(id));
  }

  @ApiOkResponse({
    description: translate('route.tag.update.success'),
    type: UpdateTagResponseDto,
  })
  @ApiNotFoundResponse({
    description: translate('route.tag.update.not-found'),
    type: ErrorDto,
  })
  @Patch('/:id')
  async update(
    @Param('id', new ExistingRecord('tag')) id: string,
    @Body() updateTagDto: UpdateTagDto,
  ): Promise<UpdateTagResponseDto> {
    return withoutDates(await this.tagService.update(id, updateTagDto));
  }

  @ApiGoneResponse({
    description: translate('route.tag.delete.success'),
    type: DeleteTagResponseDto,
  })
  @ApiNotFoundResponse({
    description: translate('route.tag.delete.not-found'),
    type: ErrorDto,
  })
  @Delete('/:id')
  async remove(
    @Param('id', new ExistingRecord('tag')) id: string,
  ): Promise<DeleteTagResponseDto> {
    return withoutDates(await this.tagService.remove(id));
  }
}
