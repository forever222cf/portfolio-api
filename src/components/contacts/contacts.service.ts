import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { IContact } from './interfaces/contact.interface';

@Injectable()
export class ContactsService {
  constructor(@InjectModel('Contact') private readonly contactModel: Model<IContact>) {}
}
