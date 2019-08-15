import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { FilesController } from './files.controller';
import { FilesService } from './files.service';
import { SchemaName } from './../../shared/constants/schema-name';
import { FileSchema } from './schemas/file.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: SchemaName.File, schema: FileSchema }])
  ],
  controllers: [FilesController],
  providers: [FilesService]
})
export class FilesModule {}
