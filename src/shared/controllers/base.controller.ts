import { HttpStatus } from '@nestjs/common';
import { IHttpResponse } from '../interfaces/http-response.interface';

export abstract class BaseController {
  protected ResponseSuccess(res: any, statusCode: HttpStatus, data?: any): IHttpResponse {
    return res.status(statusCode).json({
      statusCode,
      success: true,
      data
    });
  }

  protected ResponseError(res: any, statusCode: HttpStatus, errorMessage: string, errorDetail?: any): IHttpResponse {
    return res.status(statusCode).json({
      statusCode,
      success: false,
      errorMessage,
      errorDetail
    });
  }
}
