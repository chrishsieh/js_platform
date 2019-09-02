import { Injectable } from '@nestjs/common';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { family_fam } from '../entity/family_fam';

@Injectable()
export class FamilyDashboardService {
  constructor(
    @InjectRepository(family_fam)
    private readonly familyRepo: Repository<family_fam>,

    @InjectEntityManager()
    private readonly em: EntityManager,
  ) {}

  public async getUpdatedFamilies(limit: number = 12) {
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

  public async getLatestFamilies(limit = 12) {
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
}
