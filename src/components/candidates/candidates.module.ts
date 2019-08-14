import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SchemaName } from './../../shared/constants/schema-name';
import { CandidateSchema } from './schemas/candidate.schema';
import { CandidatesController } from './candidates.controller';
import { CandidatesService } from './candidates.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SchemaName.Candidate, schema: CandidateSchema}
    ])
  ],
  controllers: [CandidatesController],
  providers: [CandidatesService]
})
export class CandidatesModule {}
