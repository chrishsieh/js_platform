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

  findById(id: number): Promise<person_per> {
    return this.PersonPerRepository.findOneOrFail(id);
  }

  getFirst(): Promise<person_per[]> {
    let person = this.PersonPerRepository.createQueryBuilder('person') // 别名，必填项，用来指定本次查询
      .where('per_Gender=2')
      .orderBy('per_ID', 'DESC')
      .take(10)
      .getMany();
    return person;
  }
}
