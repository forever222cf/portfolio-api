import { HttpStatus } from '@nestjs/common';

export interface IHttpResponse {
  statusCode: HttpStatus;
  success: boolean;
  data?: any;
  errorMessage?: string;
  errorDetail?: any;
}
