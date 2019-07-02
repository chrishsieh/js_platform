import { Controller, Get } from '@nestjs/common';
import { PersonPerService } from './db.service';
import { person_per } from '../../entities/person_per';

@Controller('person_per')
export class PersonPerController {
  constructor(private readonly personperService: PersonPerService) {}

  @Get()
  findAll(): Promise<person_per[]> {
    return this.personperService.findAll();
  }
}
