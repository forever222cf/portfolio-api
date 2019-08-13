import { Schema } from 'mongoose';
import SocialSchema from './social.schema';
import SchemaName from './../../../shared/constants/schema-name';

export const InfoSchema = new Schema({
  fullName: String,
  jobTitle: String,
  socials: [SocialSchema],
  avatar: {
    type: Schema.Types.ObjectId,
    ref: SchemaName.File
  }
})
