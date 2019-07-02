import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { person_per } from '../../entities/person_per';

@Injectable()
export class PersonPerService {
  constructor(
    @InjectRepository(person_per)
    private readonly PersonPerRepository: Repository<person_per>,
  ) {}

  findAll(): Promise<person_per[]> {
    return this.PersonPerRepository.find();
  }
}
