import {
  Controller,
  Get,
  Param,
  UseInterceptors,
  CacheInterceptor,
  Render,
} from '@nestjs/common';
import { PersonPerService } from './db.service';
import { person_per } from '../../entities/person_per';

@UseInterceptors(CacheInterceptor)
@Controller('person')
export class PersonPerController {
  constructor(private readonly personperService: PersonPerService) {}

  @Get()
  @Render('Person')
  getFirst(): Promise<person_per[]> {
    return this.personperService.getUsers();
  }

  @Get(':ID')
  getPerson(@Param('ID') person_ID: number) {
    const person = this.personperService.findById(person_ID);
    return person;
  }

  //  @Get()
  //  findAll(): Promise<person_per[]> {
  //    return this.personperService.findAll();
  //  }
}
