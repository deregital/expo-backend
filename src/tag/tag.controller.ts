import { Roles } from '@/auth/decorators/rol.decorator';
import { JwtGuard } from '@/auth/guards/jwt.guard';
import { RoleGuard } from '@/auth/guards/role.guard';
import { translate } from '@/i18n/translate';
import { ErrorDto } from '@/shared/errors/errorType';
import { ExistingRecord } from '@/shared/validation/checkExistingRecord';
import {
  CreateTagDto,
  CreateTagResponseDto,
  createTagResponseSchema,
} from '@/tag/dto/create-tag.dto';
import {
  DeleteTagResponseDto,
  deleteTagResponseSchema,
} from '@/tag/dto/delete-tag.dto';
import {
  FindAllTagResponseDto,
  findAllTagResponseSchema,
} from '@/tag/dto/find-all-tag.dto';
import {
  FindByGroupTagResponseDto,
  findByGroupTagResponseSchema,
} from '@/tag/dto/find-by-group-tag.dto';
import {
  FindOneTagResponseDto,
  findOneTagResponseSchema,
} from '@/tag/dto/find-one-tag.dto';
import {
  MassiveAllocationDto,
  MassiveAllocationResponseDto,
  massiveAllocationResponseSchema,
} from '@/tag/dto/massive-allocation.dto';
import {
  MassiveDeallocationDto,
  MassiveDeallocationResponseDto,
  massiveDeallocationResponseSchema,
} from '@/tag/dto/massive-deallocation.dto';
import {
  UpdateTagDto,
  UpdateTagResponseDto,
  updateTagResponseSchema,
} from '@/tag/dto/update-tag.dto';
import { TagService } from '@/tag/tag.service';
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
import z from 'zod';
import { Role } from '~/types/prisma-schema';

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
  ): Promise<z.infer<typeof createTagResponseSchema>> {
    return await this.tagService.create(createTagDto);
  }

  @Get('/all')
  @ApiOkResponse({
    description: translate('route.tag.find-all.success'),
    type: FindAllTagResponseDto,
  })
  async findAll(): Promise<z.infer<typeof findAllTagResponseSchema>> {
    return await this.tagService.findAll();
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
  ): Promise<z.infer<typeof findByGroupTagResponseSchema>> {
    return await this.tagService.findByGroup(groupId);
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
  ): Promise<z.infer<typeof findOneTagResponseSchema>> {
    return await this.tagService.findById(id);
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
  ): Promise<z.infer<typeof updateTagResponseSchema>> {
    return await this.tagService.update(id, updateTagDto);
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
  ): Promise<z.infer<typeof deleteTagResponseSchema>> {
    return await this.tagService.remove(id);
  }

  @ApiOkResponse({
    description: translate('route.tag.massive-allocation.success'),
    type: MassiveAllocationResponseDto,
  })
  @Post('/massive-allocation')
  async massiveAllocation(
    @Body() massiveAllocationDto: MassiveAllocationDto,
  ): Promise<z.infer<typeof massiveAllocationResponseSchema>> {
    return await this.tagService.massiveAllocation(massiveAllocationDto);
  }

  @ApiOkResponse({
    description: translate('route.tag.massive-deallocation.success'),
    type: MassiveDeallocationResponseDto,
  })
  @Post('/massive-deallocation')
  async massiveDeallocation(
    @Body() massiveDeallocationDto: MassiveDeallocationDto,
  ): Promise<z.infer<typeof massiveDeallocationResponseSchema>> {
    return await this.tagService.massiveDeallocation(massiveDeallocationDto);
  }
}
