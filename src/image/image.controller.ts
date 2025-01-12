import { Roles } from '@/auth/decorators/rol.decorator';
import { JwtGuard } from '@/auth/guards/jwt.guard';
import { RoleGuard } from '@/auth/guards/role.guard';
import { translate } from '@/i18n/translate';
import { ProfileService } from '@/profile/profile.service';
import { ErrorDto } from '@/shared/errors/errorType';
import { ExistingRecord } from '@/shared/validation/checkExistingRecord';
import {
  Body,
  ConflictException,
  Controller,
  Delete,
  HttpStatus,
  NotFoundException,
  Param,
  ParseFilePipeBuilder,
  Patch,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ApiConflictResponse,
  ApiConsumes,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
import { Role } from '~/types';
import { DeleteImageResponseDto } from './dto/delete-image.dto';
import { UpdateImageDto, UpdateImageResponseDto } from './dto/update-image.dto';
import { ImageService } from './image.service';

@Roles(Role.ADMIN, Role.USER)
@UseGuards(JwtGuard, RoleGuard)
@Controller('image')
export class ImageController {
  constructor(
    private readonly imageService: ImageService,
    private readonly profileService: ProfileService,
  ) {}

  @ApiOkResponse({
    description: translate('route.image.update.success'),
    type: UpdateImageResponseDto,
  })
  @ApiInternalServerErrorResponse({
    description: translate('route.image.update.error'),
    type: ErrorDto,
  })
  @ApiUnprocessableEntityResponse({
    description: translate('route.image.update.unprocessable-entity'),
    type: ErrorDto,
  })
  @ApiConflictResponse({
    description: translate('route.image.update.conflict'),
    type: ErrorDto,
  })
  @UseInterceptors(FileInterceptor('image'))
  @ApiConsumes('multipart/form-data')
  @Patch('/update/:id')
  async updateImage(
    @Param('id', new ExistingRecord('profile')) id: string,
    @Body() body: UpdateImageDto,
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({
          fileType: /(jpeg|png|webp)/, // Ver errores custom
        })
        .build({
          errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
        }),
    )
    file: Express.Multer.File,
  ): Promise<UpdateImageResponseDto> {
    const currentPictureUrl =
      await this.profileService.getProfilePictureUrl(id);
    if (currentPictureUrl) {
      await this.imageService.deleteImage(currentPictureUrl);
    }

    const pictureUrl = await this.imageService.updateImage(id, file);

    if (!pictureUrl) {
      throw new ConflictException([translate('route.image.update.conflict')]);
    }

    await this.profileService.update(
      id,
      {
        profilePictureUrl: pictureUrl,
      },
      undefined,
    );

    return {
      message: translate('route.image.update.success'),
    };
  }

  @ApiOkResponse({
    description: translate('route.image.delete.success'),
    type: DeleteImageResponseDto,
  })
  @ApiNotFoundResponse({
    description: translate('route.image.delete.not-found'),
    type: ErrorDto,
  })
  @ApiInternalServerErrorResponse({
    description: translate('route.image.delete.error'),
    type: ErrorDto,
  })
  @Delete('/delete/:id')
  async deleteImage(
    @Param('id', new ExistingRecord('profile')) id: string,
  ): Promise<DeleteImageResponseDto> {
    const pictureUrl = await this.profileService.getProfilePictureUrl(id);
    if (!pictureUrl) {
      throw new NotFoundException([translate('route.image.delete.not-found')]);
    }
    await this.imageService.deleteImage(pictureUrl);

    await this.profileService.update(
      id,
      {
        profilePictureUrl: null,
      },
      undefined,
    );

    return {
      message: translate('route.image.delete.success'),
    };
  }
}
