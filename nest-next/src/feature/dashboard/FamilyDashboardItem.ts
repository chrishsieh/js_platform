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
      .where('f.FamDateDeactivated is null')
      .andWhere('f.FamDateLastEdited is not null')
      .select([
        'f.FamID',
        'f.FamName',
        'f.FamAddress1',
        'f.FamDateEntered',
        'f.FamDateLastEdited',
      ])
      .orderBy('f.FamDateLastEdited', 'DESC')
      .limit(limit)
      .getMany();

    return familyQb;
  }

  private async getLatestFamilies(limit = 12) {
    const familyQb = await this.familyRepo
      .createQueryBuilder('flatest')
      .where('flatest.FamDateDeactivated is null')
      .orderBy('flatest.FamDateEntered', 'DESC')
      .limit(limit)
      .select([
        'flatest.FamID',
        'flatest.FamName',
        'flatest.FamAddress1',
        'flatest.FamDateEntered',
        'flatest.FamDateLastEdited',
      ])
      .getMany();

    return familyQb;
  }

  private async getCountFamilies(): Promise < number > {
    const familyQb = await this.familyRepo
      .createQueryBuilder('fcount')
      .where('fcount.FamDateDeactivated is null')
      .getCount();
    return familyQb;
  }
}
