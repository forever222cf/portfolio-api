import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Info } from './interfaces/info.interface';

@Injectable()
export class InfoService {
  constructor(@InjectModel('Info') private readonly infoModel: Model<Info>) {}

  async findAll(): Promise<Info[]> {
    return await this.infoModel.find.exec();
  }
}
