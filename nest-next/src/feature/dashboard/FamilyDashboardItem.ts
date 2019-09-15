import { Injectable } from '@nestjs/common';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { FamilyFam } from '../../shared/entity/family_fam';
import { DashboardItemInterface } from '../../shared/interface/dashboard';

@Injectable()
export class FamilyDashboardItem implements DashboardItemInterface {
  constructor(
    @InjectRepository(FamilyFam)
    private readonly familyRepo: Repository<FamilyFam>,

    @InjectEntityManager()
    private readonly em: EntityManager
  ) {}
  public getDashboardItemName(): string {
    return 'FamilyCount';
  }
  public shouldInclude(PageName: string): boolean {
    return PageName === 'Menu';
  }

  public getDashboardItemValue() {
    return {
      familyCount: this.getCountFamilies(),
      LatestFamilies: this.getLatestFamilies(),
      UpdatedFamilies: this.getUpdatedFamilies(),
    };
  }

  private async getUpdatedFamilies(limit: number = 12) {
    const familyQb = await this.familyRepo
      .createQueryBuilder('f')
      .where('f.fam_DateDeactivated is null')
      .andWhere('f.fam_DateLastEdited is not null')
      .select([
        'f.fam_ID',
        'f.fam_Name',
        'f.fam_Address1',
        'f.fam_DateEntered',
        'f.fam_DateLastEdited',
      ])
      .orderBy('f.fam_DateLastEdited', 'DESC')
      .limit(limit)
      .getMany();

    return familyQb;
  }

  private async getLatestFamilies(limit = 12) {
    const familyQb = await this.familyRepo
      .createQueryBuilder('flatest')
      .where('flatest.fam_DateDeactivated is null')
      .orderBy('flatest.fam_DateEntered', 'DESC')
      .limit(limit)
      .select([
        'flatest.fam_ID',
        'flatest.fam_Name',
        'flatest.fam_Address1',
        'flatest.fam_DateEntered',
        'flatest.fam_DateLastEdited',
      ])
      .getMany();

    return familyQb;
  }

  private async getCountFamilies(): Promise < number > {
    const familyQb = await this.familyRepo
      .createQueryBuilder('fcount')
      .where('fcount.fam_DateDeactivated is null')
      .getCount();
    return familyQb;
  }
}
