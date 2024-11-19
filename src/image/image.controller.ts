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
  Param,
  Patch,
  UseGuards,
} from '@nestjs/common';
import {
  ApiConflictResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
} from '@nestjs/swagger';
import { Role } from '~/types';
import { DeleteImageDto } from './dto/delete-image.dto';
import { UpdateImageDto, UpdateImageResponseDto } from './dto/update-image.dto';
import { ImageService } from './image.service';

@Roles(Role.ADMIN, Role.USER)
@UseGuards(JwtGuard, RoleGuard)
@Controller('image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @ApiOkResponse({
    description: translate('route.image.update.success'),
    type: UpdateImageResponseDto,
  })
  @ApiConflictResponse({
    description: translate('route.image.update.conflict'),
    type: ErrorDto,
  })
  @Patch('/update/:id')
  async updateImage(
    @Param('id', new ExistingRecord('profile')) id: string,
    @Body() updateImageDto: UpdateImageDto,
  ): Promise<UpdateImageResponseDto> {
    return await this.imageService.updateImage(id, updateImageDto);
  }

  @ApiOkResponse({
    description: translate('route.image.delete.success'),
    type: DeleteImageDto,
  })
  @ApiNotFoundResponse({
    description: translate('route.image.delete.not-found'),
    type: ErrorDto,
  })
  @Delete('/delete/:id')
  async deleteImage(
    @Param('id', new ExistingRecord('profile')) id: string,
  ): Promise<DeleteImageDto> {
    return await this.imageService.deleteImage(id);
  }
}
