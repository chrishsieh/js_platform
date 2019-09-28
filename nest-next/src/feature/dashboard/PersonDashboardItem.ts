import { Injectable } from '@nestjs/common';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { FamilyFam } from '../../shared/entity/family_fam';
import { PersonPer } from '../../shared/entity/person_per';
import { DashboardItemInterface } from '../../shared/interface/dashboard';

@Injectable()
export class PersonDashboardItem implements DashboardItemInterface {
  constructor(
    @InjectRepository(FamilyFam)
    private readonly familyRepo: Repository<FamilyFam>,

    @InjectRepository(PersonPer)
    private readonly personRepo: Repository<PersonPer>,

    @InjectEntityManager()
    private readonly em: EntityManager
  ) {}
  public getDashboardItemName(): string {
    return 'PersonCount';
  }
  public shouldInclude(PageName: string): boolean {
    return PageName === 'Menu';
  }

  public getDashboardItemValue() {
    return {
      MembersCount: this.getCountMembers(),
      LatestMembers: this.getLatestMembers(),
      UpdatedMembers: this.getUpdatedMembers(),
    };
  }

  private async getUpdatedMembers(limit: number = 12) {
    /*
    const familyQb = this.familyRepo
      .createQueryBuilder('f')
      .select('f.FamID')
      .where('f.FamDateDeactivated is null');

    const personQb = await this.personRepo
      .createQueryBuilder('p')
      .where('p.PerFamID IN (' + familyQb.getQuery() + ')')
      .orWhere('p.PerFamID = 0')
      .orderBy('p.PerDateLastEdited', 'DESC')
      .limit(limit)
      .getMany();
    */

    const personQb = await this.em
      .createQueryBuilder(PersonPer, 'p')
      .leftJoin(FamilyFam, 'f', 'f.FamID = p.PerFamID')
      .where('f.FamDateDeactivated is null')
      .orderBy('p.PerDateLastEdited', 'DESC')
      .limit(limit)
      .getMany();

    return personQb;
  }

  private async getLatestMembers(limit = 12) {
    /*
    const familyQb = this.familyRepo
      .createQueryBuilder('f')
      .select('f.FamID')
      .where('f.FamDateDeactivated is null');

    const personQb = await this.personRepo
      .createQueryBuilder('p')
      .where('p.PerFamID IN (' + familyQb.getQuery() + ')')
      .orWhere('p.PerFamID = 0')
      .andWhere('p.PerDateLastEdited is null')
      .orderBy('p.PerDateEntered', 'DESC')
      .limit(limit)
      .getMany();
    */

    const personQb = await this.em
      .createQueryBuilder(PersonPer, 'p')
      .leftJoin(FamilyFam, 'f', 'f.FamID = p.PerFamID')
      .where('f.FamDateDeactivated is null')
      .andWhere('p.PerDateLastEdited is null')
      .orderBy('p.PerDateEntered', 'DESC')
      .limit(limit)
      .getMany();

    return personQb;
  }

  private async getCountMembers(): Promise<number> {
    /*
    const familyQb = this.familyRepo
      .createQueryBuilder('f')
      .select('f.FamID')
      .where('f.FamDateDeactivated is null');

    const personQb = await this.personRepo
      .createQueryBuilder('p')
      .where('p.PerFamID IN (' + familyQb.getQuery() + ')')
      .orWhere('p.PerFamID = 0')
      .getCount();
    */

    const personQb = await this.em
      .createQueryBuilder(PersonPer, 'p')
      .leftJoin(FamilyFam, 'f', 'f.FamID = p.PerFamID')
      .where('f.FamDateDeactivated is null')
      .getCount();

    return personQb;
  }
}
