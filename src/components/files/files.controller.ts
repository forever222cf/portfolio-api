import { Controller, Post, UseInterceptors, Res, UploadedFiles, Body, BadRequestException, HttpStatus, UploadedFile } from '@nestjs/common';
import { FilesInterceptor, FileInterceptor } from '@nestjs/platform-express';
import * as path from 'path';

import { BaseController } from './../../shared/controllers/base.controller';
import { FilesService } from './files.service';
import { MAX_FILE_UPLOAD } from './../../shared/constants/constants';
import { UploadFileDTO } from './dto/upload-file.dto';
import { Response } from 'express';
import { isArray, isEmpty } from 'lodash';

const pngFileFilter = (req, file, callback) => {
  const ext = path.extname(file.originalname);

  if (ext !== '.png' && ext !== '.jpg') {
    req.fileValidationError = 'Invalid file type';
    return callback(new Error('Invalid file type'), false);
  }

  return callback(null, true);
};

@Controller('files')
export class FilesController extends BaseController {
  constructor(private readonly filesService: FilesService) {
    super();
  }

  @Post('upload')
  @UseInterceptors(FilesInterceptor('files', MAX_FILE_UPLOAD, {
    fileFilter: pngFileFilter
  }))
  async uploadFiles(@Res() res: Response, @UploadedFiles() files: Express.Multer.File[], @Body() dto: UploadFileDTO) {
    if (!isArray(files) && isEmpty(files)) {
      throw new BadRequestException('Files are required');
    }
    const rs = await this.filesService.uploadFiles(files, dto);
    return this.ResponseSuccess(res, HttpStatus.OK, rs);
  }
}
