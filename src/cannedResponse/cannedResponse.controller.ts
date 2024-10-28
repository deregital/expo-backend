import {
  Account,
  AccountWithoutPassword,
} from '@/auth/decorators/account.decorator';
import { Roles } from '@/auth/decorators/rol.decorator';
import { JwtGuard } from '@/auth/guards/jwt.guard';
import { RoleGuard } from '@/auth/guards/role.guard';
import { translate } from '@/i18n/translate';
import { ErrorDto } from '@/shared/errors/errorType';
import { ExistingRecord } from '@/shared/validation/checkExistingRecord';
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
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import z from 'zod';
import { Role } from '~/types';
import { CannedResponseService } from './cannedResponse.service';
import {
  CreateCannedResponseDto,
  CreateCannedResponseResponseDto,
  createCannedResponseResponseSchema,
} from './dto/create-cannedResponse.dto';
import {
  DeleteCannedResponseResponseDto,
  deleteCannedResponseResponseSchema,
} from './dto/delete-cannedResponse.dto';
import { getAllCannedResponseSchema } from './dto/get-all-cannedResponse.dto';
import {
  UpdateCannedResponseDto,
  UpdateCannedResponseResponseDto,
  updateCannedResponseResponseSchema,
} from './dto/update-cannedResponse.dto';

@ApiTags('Canned Responses')
@Roles(Role.ADMIN, Role.USER)
@UseGuards(JwtGuard, RoleGuard)
@Controller('cannedresponse')
export class CannedResponseController {
  constructor(private readonly cannedResponseService: CannedResponseService) {}

  @ApiCreatedResponse({
    description: translate('route.cannedResponse.create.success'),
    type: CreateCannedResponseResponseDto,
  })
  @ApiConflictResponse({
    description: translate('route.cannedResponse.create.conflict'),
    type: ErrorDto,
  })
  @Post('/create')
  async createCannedResponse(
    @Body() createCannedResponseDto: CreateCannedResponseDto,
    @Account() account: AccountWithoutPassword,
  ): Promise<z.infer<typeof createCannedResponseResponseSchema>> {
    return await this.cannedResponseService.createCannedResponse(
      createCannedResponseDto,
      account.id,
    );
  }

  @ApiOkResponse({
    description: translate('route.cannedResponse.get-all.success'),
    type: CreateCannedResponseResponseDto,
  })
  @Get('/all')
  async getAllCannedResponses(): Promise<
    z.infer<typeof getAllCannedResponseSchema>
  > {
    return await this.cannedResponseService.getAllCannedResponses();
  }

  @ApiNotFoundResponse({
    description: translate('route.cannedResponse.update.not-found'),
    type: ErrorDto,
  })
  @ApiOkResponse({
    description: translate('route.cannedResponse.update.success'),
    type: UpdateCannedResponseResponseDto,
  })
  @Patch('/update/:id')
  async updateCannedResponse(
    @Param('id', new ExistingRecord('cannedResponse')) id: string,
    @Body() updateCannedResponseDto: UpdateCannedResponseDto,
  ): Promise<z.infer<typeof updateCannedResponseResponseSchema>> {
    return await this.cannedResponseService.updateCannedResponse(
      id,
      updateCannedResponseDto,
    );
  }

  @ApiNotFoundResponse({
    description: translate('route.cannedResponse.delete.not-found'),
    type: ErrorDto,
  })
  @ApiOkResponse({
    description: translate('route.cannedResponse.delete.success'),
    type: DeleteCannedResponseResponseDto,
  })
  @Delete('/delete/:id')
  async deleteCannedResponse(
    @Param('id', new ExistingRecord('cannedResponse')) id: string,
  ): Promise<z.infer<typeof deleteCannedResponseResponseSchema>> {
    return await this.cannedResponseService.deleteCannedResponse(id);
  }
}
