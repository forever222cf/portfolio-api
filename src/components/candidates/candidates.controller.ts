import { Controller, Post, Body, ValidationPipe, Get, HttpStatus, Res, Delete } from '@nestjs/common';
import { CandidatesService } from './candidates.service';
import { CandidateDTO } from './dto/candidate.dto';
import { BaseController } from './../../shared/controllers/base.controller';
import { Response } from 'express';
import { IHttpResponse } from 'src/shared/interfaces/http-response.interface';

@Controller('candidates')
export class CandidatesController extends BaseController {
  constructor(private readonly candidatesService: CandidatesService) {
    super();
  }

  @Get()
  async findAll(@Res() res: Response): Promise<IHttpResponse> {
    const candidates = await this.candidatesService.findAll();
    return this.ResponseSuccess(res, HttpStatus.OK, candidates);
  }

  @Post()
  async create(@Res() res: Response, @Body(new ValidationPipe()) dto: CandidateDTO) {
    const candidate = await this.candidatesService.create(dto);
    return this.ResponseSuccess(res, HttpStatus.OK, candidate);
  }

  @Delete('/clean')
  async clean(@Res() res: Response) {
    await this.candidatesService.clean();
    return this.ResponseSuccess(res, HttpStatus.OK);
  }
}
