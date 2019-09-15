import { Injectable } from '@nestjs/common';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { FamilyFam } from '../entity/family_fam';
import { PersonPer } from '../entity/person_per';

@Injectable()
export class PersonDashboardService {
  constructor(
    @InjectRepository(PersonPer)
    private readonly personRepo: Repository<PersonPer>,

    @InjectRepository(FamilyFam)
    private readonly familyRepo: Repository<FamilyFam>,

    @InjectEntityManager()
    private readonly em: EntityManager
  ) {}

  public async getUpdatedMembers(limit: number = 12) {
    const familyQb = await this.familyRepo
      .createQueryBuilder('f')
      .select('f.fam_ID')
      .where('f.fam_DateDeactivated is null');

    const personQb = await this.personRepo
      .createQueryBuilder('p')
      .where('p.per_fam_ID IN (' + familyQb.getQuery() + ')')
      .orWhere('p.per_fam_ID = 0')
      .orderBy('p.per_DateLastEdited', 'DESC')
      .limit(limit)
      .getMany();

    return personQb;
  }

  public async getLatestMembers(limit = 12) {
    const familyQb = await this.familyRepo
      .createQueryBuilder('f')
      .select('f.fam_ID')
      .where('f.fam_DateDeactivated is null');

    const personQb = await this.personRepo
      .createQueryBuilder('p')
      .where('p.per_fam_ID IN (' + familyQb.getQuery() + ')')
      .orWhere('p.per_fam_ID = 0')
      .andWhere('p.per_DateLastEdited is null')
      .orderBy('p.per_DateEntered', 'DESC')
      .limit(limit)
      .getMany();

    return personQb;
    }
}
