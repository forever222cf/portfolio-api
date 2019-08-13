import { Document } from 'mongoose';

export interface ISocial extends Document {
  name: string;
  value: string;
}
