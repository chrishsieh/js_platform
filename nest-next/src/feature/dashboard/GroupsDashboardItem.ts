import { Injectable } from '@nestjs/common';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
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

  public getDashboardItemValue() {
    return {
      GroupCount: this.getCountMembers(),
    };
  }

  private async getCountMembers(): Promise<any> {
    const groupQb = this.groupRepo
      .createQueryBuilder('g')
      .where('grp_Type != 4')
      .getCount();

    const SundaySchoolClassesQb = this.groupRepo
      .createQueryBuilder('gSundaySchoolClass')
      .where('grp_Type = 4')
      .getCount();

    /*
    const familyQb = this.familyRepo
      .createQueryBuilder('f')
      .select('f.fam_ID')
      .where('f.fam_DateDeactivated is null');
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

    const SundaySchoolKidsCount = this.em
      .createQueryBuilder(PersonPer, 'p')
      .innerJoin(Person2group2roleP2G2r, 'pg', 'pg.P2G2rPerID = p.PerID')
      .innerJoin(GroupGrp, 'g', 'g.GrpID = pg.P2G2rGrpID')
      .leftJoin(FamilyFam, 'f', 'f.FamID = p.PerfmrID')
      .where('f.FamDateDeactivated is null')
      .andWhere('pg.P2G2rRleID = 2')
      .andWhere('g.GrpType = 4')
      .getCount();

    return {
      Group: await groupQb,
      SundaySchoolClasses: await SundaySchoolClassesQb,
      SundaySchoolKidsCount: await SundaySchoolKidsCount,
    };
  }
}
