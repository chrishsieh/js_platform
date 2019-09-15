import { Injectable } from '@nestjs/common';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { FamilyFam } from '../../shared/entity/family_fam';
import { GroupGrp } from '../../shared/entity/group_grp';
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
    .innerJoinAndSelect('p.P2G2r', 'P2G2r')
     .getSql();
    //.getMany();
    */

    // console.log('personQb', personQb);

    return {Group: await groupQb, SundaySchoolClasses: await SundaySchoolClassesQb/*, test: await personQb*/};
  }
}
