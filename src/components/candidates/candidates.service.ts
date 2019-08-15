import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { ICandidate } from './interfaces/candidate.interface';
import { CandidateDTO } from './dto/candidate.dto';

@Injectable()
export class CandidatesService {
  constructor(@InjectModel('Candidate') private readonly candidateModel: Model<ICandidate>) {}

  async findAll(): Promise<ICandidate[]> {
    return await this.candidateModel.find().exec();
  }

  async create(dto: CandidateDTO): Promise<ICandidate> {
    const createDto = new this.candidateModel(dto);
    const newCandidate = await createDto.save();
    return this.findById(newCandidate._id);
  }

  async findById(id: string): Promise<ICandidate> {
    return await this.candidateModel.findById(id).exec();
  }

  async clean(): Promise<any> {
    return await this.candidateModel.deleteMany({}).exec();
  }
}
