import { IsString, IsArray } from 'class-validator';

export class CandidateDTO {
  @IsString()
  fullName: string;

  @IsString()
  jobTitle: string;

  @IsArray()
  contacts: [];
}
