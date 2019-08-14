import { Schema } from 'mongoose';
import { SchemaName } from './../../../shared/constants/schema-name';

export const ContactSchema = new Schema({
  contactType: String,
  value: String
}, {
  colection: SchemaName.Contact,
  timestamps: true
})
