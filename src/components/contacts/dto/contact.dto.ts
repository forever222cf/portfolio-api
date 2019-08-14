import { IsString } from 'class-validator';

export class ContactDTO {
  @IsString()
  contactType: string;

  @IsString()
  value: string;
}
