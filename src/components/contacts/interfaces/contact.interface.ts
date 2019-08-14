import { Document } from 'mongoose';

export interface IContact extends Document {
  contactType: string;
  value: string;
}
