import { Document } from 'mongoose';
import { IContact } from './../../contacts/interfaces/contact.interface';

export interface ICandidate extends Document {
  fullName: string;
  jobTitle: string;
  contacts: IContact[];
}
