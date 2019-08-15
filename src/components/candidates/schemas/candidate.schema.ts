import { Schema } from 'mongoose';
import { SchemaName } from './../../../shared/constants/schema-name';
import { ContactSchema } from './../../contacts/schemas/contact.schema';

export const CandidateSchema = new Schema({
  fullName: String,
  jobTitle: String,
  contacts: [ContactSchema],
  avatar: Buffer
}, {
  collection: SchemaName.Candidate,
  timestamps: true
})
