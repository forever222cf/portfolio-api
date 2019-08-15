import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { SchemaName } from './../../shared/constants/schema-name';
import { IFile } from './interfaces/file.interface';
import { UploadFileDTO } from './dto/upload-file.dto';
import { FileCategory } from './../../shared/enums';
import { lookup } from 'mime-types';
import { IMAGE_MIME_TYPE } from './../../shared/constants/constants';

@Injectable()
export class FilesService {
  constructor(@InjectModel(SchemaName.File) private readonly fileModel: Model<IFile>) {}

  async uploadFiles(files: Express.Multer.File[], dto: UploadFileDTO): Promise<any> {
    const names = dto.name;
    const categories = dto.category;
    const promiseAll = files.map((file: Express.Multer.File, idx: number) => {
      this.uploadSingleFile(file, names[idx], categories[idx]);
    })
    return await Promise.all(promiseAll);
  }

  async uploadSingleFile(file: Express.Multer.File, name: string, category: string): Promise<IFile> {
    return new Promise(async (resolve, reject) => {
      const originalName = file.originalname;
      const fileName = name || originalName;
      const fileCategory = category;
      const raw = file.buffer;
      const mimetype = (lookup(originalName) as string) || IMAGE_MIME_TYPE;
      
      const model = new this.fileModel({
      })
    })
  }
}
