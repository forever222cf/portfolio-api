import { Controller } from '@nestjs/common';
import { BaseController } from './../../shared/controllers/base.controller';
import { ContactsService } from './contacts.service';


@Controller('contacts')
export class ContactsController extends BaseController {
  constructor(private readonly contactService: ContactsService) {
    super();
  }
}
