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

  public async getDashboardItemValue(): Promise<any> {
    const Counts =  await this.getCountMembers();
    return {
      Group: Counts.Group,
      SundaySchoolClasses: Counts.SundaySchoolClasses,
      SundaySchoolKids: Counts.SundaySchoolKidsCount,
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

    /*
    $sSQL = 'select count(*) as numb, per_Gender from person_per, family_fam
        where fam_ID =per_fam_ID and fam_DateDeactivated is  null
        and per_Gender in (1,2) and
        per_fmr_ID not in (' . SystemConfig::getValue('sDirRoleChild') . ')
        group by per_Gender ;';
    $rsAdultsGender = RunQuery($sSQL);
    */
    const AdultsGenderCount = await this.em
      .createQueryBuilder(PersonPer, 'p')
      .select('p.per_Gender')
      .innerJoin(FamilyFam, 'f', 'f.FamID = p.PerFamID')
      .leftJoin(FamilyFam, 'f', 'f.FamID = p.PerFamID')
      .where('f.FamDateDeactivated is null')
      .andWhere('p.per_Gender in (1,2)')
      .andWhere('f.per_fmr_ID not in 3')
      .groupBy('p.per_Gender')
      .getCount();
    console.log(AdultsGenderCount);
    /*
    $sSQL = 'select count(*) as numb, per_Gender from person_per , family_fam
          where fam_ID =per_fam_ID and fam_DateDeactivated is  null
          and per_Gender in (1,2)
          and per_fmr_ID in (' . SystemConfig::getValue('sDirRoleChild') . ')
          group by per_Gender ;';
    $rsKidsGender = RunQuery($sSQL);
    */

    return {
      Group,
      SundaySchoolClasses,
      SundaySchoolKidsCount,
    };
  }
}
