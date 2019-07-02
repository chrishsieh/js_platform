import { Controller, Get, Param } from '@nestjs/common';
import { PersonPerService } from './db.service';
import { person_per } from '../../entities/person_per';

@Controller('person_per')
export class PersonPerController {
  constructor(private readonly personperService: PersonPerService) {}

  @Get(':ID')
  getPerson(@Param('ID') person_ID: number) {
    const person = this.personperService.findById(person_ID);
    return person;
  }

  @Get()
  getFirst(): Promise<person_per[]> {
    return this.personperService.getFirst();
  }

  @Get()
  findAll(): Promise<person_per[]> {
    return this.personperService.findAll();
  }
}
