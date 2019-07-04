import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { person_per } from '@entities/person_per';

@Injectable()
export class PersonPerService {
  constructor(
    @InjectRepository(person_per)
    private readonly PersonPerRepository: Repository<person_per>,
  ) {}

  findAll(): Promise<person_per[]> {
    return this.PersonPerRepository.find();
  }

  findById(id: number): Promise<person_per> {
    return this.PersonPerRepository.findOneOrFail(id);
  }

  getFirst(): Promise<person_per[]> {
    return this.PersonPerRepository.createQueryBuilder('person')
      .select('person.per_FirstName')
      .addSelect('person.per_LastName')
      .where('person.per_Gender=2')
      .orderBy('person.per_ID', 'DESC')
      .take(10)
      .getMany();
  }

  getUsers(): Promise<person_per[]> {
    return this.PersonPerRepository.createQueryBuilder('u')
      .select('u.per_FirstName')
      .addSelect('u.per_LastName')
      .addSelect('u.per_Email')
      .where('u.per_Gender=2')
      .orderBy('u.per_ID', 'DESC')
      .take(20)
      .getMany();
  }
}
