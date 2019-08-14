import { Document } from 'mongoose';

export interface IFile extends Document {
  thumbnail: Buffer;
  thumbnailUrl: string;
  raw: Buffer;
  rawUrl: string;
  size: number;
  mimeType: string;
  fileCategory: string;
  fileName: string;
  originalName: string;
}
