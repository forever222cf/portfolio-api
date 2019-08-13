import { Document } from 'mongoose';
import { ISocial } from './social.interface';
// import IFileThumbnail from './../../../shared/interfaces/';

export interface Info extends Document {
  fullName: string;
  jobTitle: string;
  socials: ISocial;
  avatar: string;
}