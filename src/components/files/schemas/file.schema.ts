import { Schema } from 'mongoose';
import { SchemaName } from './../../../shared/constants/schema-name';

export const FileSchema = new Schema({
  thumbnail: Buffer,
  thumbnailUrl: String,
  raw: Buffer,
  rawUrl: String,
  size: Number,
  mimeType: String,
  fileCategory: String,
  fileName: String,
  originalName: String
}, {
  collection: SchemaName.File,
  timestamps: true
})
