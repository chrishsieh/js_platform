import { Injectable } from '@nestjs/common';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import moment from 'moment';
import { compose, countBy, filter, map } from 'ramda';
import { EntityManager, Repository } from 'typeorm';
import { FamilyFam } from '../../shared/entity/family_fam';
import { GroupGrp } from '../../shared/entity/group_grp';
import { Person2group2roleP2G2r } from '../../shared/entity/person2group2role_p2g2r';
import { PersonPer } from '../../shared/entity/person_per';
import { DashboardItemInterface } from '../../shared/interface/dashboard';

@Injectable()
export class GroupsDashboardItem implements DashboardItemInterface {
  constructor(
    @InjectRepository(FamilyFam)
    private readonly familyRepo: Repository<FamilyFam>,

    @InjectRepository(PersonPer)
    private readonly personRepo: Repository<PersonPer>,

    @InjectRepository(GroupGrp)
    private readonly groupRepo: Repository<GroupGrp>,

    @InjectRepository(Person2group2roleP2G2r)
    private readonly p2g2r: Repository<Person2group2roleP2G2r>,

    @InjectEntityManager()
    private readonly em: EntityManager
  ) {}
  public getDashboardItemName(): string {
    return 'GroupsDisplay';
  }
  public shouldInclude(PageName: string): boolean {
    return PageName === 'Menu';
  }

  public async getDashboardItemValue(): Promise<any> {
    const Counts = await this.getCountMembers();
    return {
      Group: Counts.Group,
      SundaySchoolClasses: Counts.SundaySchoolClasses,
      SundaySchoolKids: Counts.SundaySchoolKidsCount,
      AdultsGenderCount: Counts.AdultsGenderCount,
      KidsGenderCount: Counts.KidsGenderCount,
      AgeCountGroup: Counts.AgeCountGroup,
    };
  }

  private async getCountMembers(): Promise<any> {
    const Group = await this.groupRepo
      .createQueryBuilder('g')
      .where('g.GrpType != 4')
      .getCount();

    const SundaySchoolClasses = await this.groupRepo
      .createQueryBuilder('gSundaySchoolClass')
      .where('gSundaySchoolClass.GrpType = 4')
      .getCount();

    /*
    const familyQb = this.familyRepo
      .createQueryBuilder('f')
      .select('f.FamID')
      .where('f.FamDateDeactivated is null');
    */

    /*
      const personQb = await this.personRepo
      .createQueryBuilder('p')
      .where('p.per_fam_ID IN (' + familyQb.getQuery() + ')')
      .orWhere('p.per_fam_ID = 0')
      .getCount();
    */

    /*
    const personQb = await this.personRepo
      .createQueryBuilder('p')
      .innerJoin('p.P2G2r', 'P2G2r')
      .getMany();
    */

    const SundaySchoolKidsCount = await this.em
      .createQueryBuilder(PersonPer, 'p')
      .innerJoin(Person2group2roleP2G2r, 'pg', 'pg.P2G2rPerID = p.PerID')
      .innerJoin(GroupGrp, 'g', 'g.GrpID = pg.P2G2rGrpID')
      .leftJoin(FamilyFam, 'f', 'f.FamID = p.PerFamID')
      .where('f.FamDateDeactivated is null')
      .andWhere('pg.P2G2rRleID = 2')
      .andWhere('g.GrpType = 4')
      .getCount();

    const AdultsGenderCount = await this.em
      .createQueryBuilder(PersonPer, 'p')
      .select('COUNT(p.per_Gender)', 'numb')
      .addSelect('p.per_Gender')
      .innerJoin(FamilyFam, 'f', 'f.FamID = p.PerFamID')
      .where('f.FamDateDeactivated is null')
      .andWhere('p.per_Gender in (1,2)')
      .andWhere('p.per_fmr_ID not in (3)')
      .groupBy('p.per_Gender')
      .getRawMany();

    const KidsGenderCount = await this.em
      .createQueryBuilder(PersonPer, 'p')
      .select('COUNT(p.per_Gender)', 'numb')
      .addSelect('p.per_Gender')
      .innerJoin(FamilyFam, 'f', 'f.FamID = p.PerFamID')
      .where('f.FamDateDeactivated is null')
      .andWhere('p.per_Gender in (1,2)')
      .andWhere('p.per_fmr_ID in (3)')
      .groupBy('p.per_Gender')
      .getRawMany();

    const PersonAge = await this.em
      .createQueryBuilder(PersonPer, 'pq')
      .select('pq.per_BirthYear', 'year')
      .addSelect('pq.per_BirthMonth', 'month')
      .addSelect('pq.per_BirthDay', 'day')
      .getRawMany();
    // console.log('PersonAge', PersonAge);

    const isDateVaild = (date: any) => moment([date.year, date.month - 1, date.day]).isValid();
    const nowDate = moment();
    const conVertAge = (date: any) => nowDate.diff(moment([date.year, date.month - 1, date.day]), 'years');
    const AgeCountGroup = compose(countBy(Math.floor), map(conVertAge))(filter(isDateVaild)(PersonAge));

    return {
      Group,
      SundaySchoolClasses,
      SundaySchoolKidsCount,
      AdultsGenderCount,
      KidsGenderCount,
      AgeCountGroup,
    };
  }
}
