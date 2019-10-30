import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { ListLst } from '../../shared/entity/list_lst';
import { PersonPer } from '../../shared/entity/person_per';
import { DashboardItemInterface } from '../../shared/interface/dashboard';

@Injectable()
export class ListOptionQuery implements DashboardItemInterface {
  constructor(
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
      GroListGroupup: Counts.ListGroup,
    };
  }

  private async getCountMembers(): Promise<any> {
    const ListGroup = await this.em
      .createQueryBuilder(PersonPer, 'p')
      .leftJoin(ListLst, 'l', 'l.lst_OptionID = p.per_fmr_ID And l.lst_ID = 2')
      .select('p.per_fmr_ID', 'ID')
      .addSelect('l.lst_OptionName', 'Name')
      .addSelect('p.per_Gender', 'Gender')
      .addSelect('COUNT(p.per_Gender)', 'Count')
      .groupBy('ID')
      .addGroupBy('Name')
      .addGroupBy('Gender')
      .orderBy('ID', 'ASC')
      .getRawMany();

    // const ListGroupBase = await this.listlstRepo
    //     .createQueryBuilder('l')
    //     .select('l.LstOptionID', 'OptionId')
    //     .addSelect('l.LstOptionName', 'OptionName')
    //     .where('l.LstID = 2')
    //     .getRawMany();

    // const printXPlusFive = async (x: any) => {
    //     const GenderCount = JSON.parse(JSON.stringify(await this.em
    //         .createQueryBuilder(PersonPer, 'p')
    //         .select('COUNT(p.per_Gender)', 'numb')
    //         .addSelect('p.per_Gender')
    //         .andWhere('p.per_fmr_ID = :fmr_ID', { fmr_ID: x.OptionId })
    //         .groupBy('p.per_Gender')
    //         .addGroupBy('p.per_fmr_ID')
    //         .getRawMany()));
    //     return {
    //         OptionName: x.OptionName,
    //         GenderCount
    //     };
    // }
    // const ListGroup = await Promise.all(map(printXPlusFive)(ListGroupBase));
    // console.log(ListGroup);

    return {
      ListGroup,
    };
  }
}
