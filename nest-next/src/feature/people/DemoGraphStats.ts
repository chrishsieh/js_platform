import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { map, partition, propEq } from 'ramda';
import { EntityManager } from 'typeorm';
import { ListLst } from '../../shared/entity/list_lst';
import { PersonPer } from '../../shared/entity/person_per';
import { DashboardItemInterface } from '../../shared/interface/dashboard';

@Injectable()
export class ListOptionQuery implements DashboardItemInterface {
  constructor(
    @InjectEntityManager()
    private readonly em: EntityManager
  ) { }

  public getDashboardItemName(): string {
    return 'ListGroup';
  }

  public shouldInclude(PageName: string): boolean {
    return PageName === 'Menu';
  }

  public async getDashboardItemValue(): Promise<any> {
    const Counts = await this.getCountMembers();
    return {
      Count: Counts.Total,
      ListGroup: Counts.ListGroup,
    };
  }

  private async getCountMembers(): Promise<any> {
    const Total = await this.em.createQueryBuilder(PersonPer, 'p').getCount();
    const ListGroupData = await this.em
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

    // Sort by ID and Gender with Null check.
    let ListGroup;
    const SplitIdNull = partition(propEq('ID', 0))(ListGroupData);
    if (SplitIdNull.length === 2) {
      const SplitGenderNull = partition(propEq('Gender', 0))(SplitIdNull[0]);
      if (SplitGenderNull.length === 2) {
        ListGroup = [...SplitIdNull[1], ...SplitGenderNull[1], ...SplitGenderNull[0]];
      } else {
        ListGroup = [...SplitIdNull[1], ...SplitGenderNull[0]];
      }
    } else {
      ListGroup = [...SplitIdNull[0]];
    }

    const combyName = (x: any) => {
      if (x.Name === null) {
        x.Name = 'Unassigned'
      }
      return x
    };
    const NameArray = (x: any) => {
      let a = [x.Name];
      if (x.Gender === 1) {
        a.push('Male');
      } else if (x.Gender === 2) {
        a.push('Female');
      } else {
        a.push('Unassigned');
      }
      x.Name = a;
      return x
    };
    map(NameArray)(map(combyName)(ListGroup));

    // const isIDNull = (x: any) => x.ID !== 0;
    // const paraSort = sortWith([ascend(prop<any>('ID')), ascend(prop<any>('Gender'))]);
    // const NormalList = paraSort(takeLastWhile(isIDNull, ListGroupData));
    // const NullList = paraSort(difference(ListGroupData, NormalList));
    // if (NullList) {
    //   const NullNull = find(pathEq(['Gender'], 0))(NullList);
    // }
    // const ListGroup = append(NullList)(NormalList);

    // const ListGroupBase = await this.listlstRepo
    //     .createQueryBuilder('l')
    //     .select('l.LstOptionID', 'OptionId')
    //     .addSelect('l.LstOptionName', 'OptionName')
    //     .where('l.LstID = 2')
    //     .getRawMany();

    // const printXPlusFive = async (x: any) => {
    //     const GenderCount = await this.em
    //         .createQueryBuilder(PersonPer, 'p')
    //         .select('COUNT(p.per_Gender)', 'numb')
    //         .addSelect('p.per_Gender')
    //         .andWhere('p.per_fmr_ID = :fmr_ID', { fmr_ID: x.OptionId })
    //         .groupBy('p.per_Gender')
    //         .addGroupBy('p.per_fmr_ID')
    //         .getRawMany();
    //     return {
    //         OptionName: x.OptionName,
    //         GenderCount
    //     };
    // }
    // const ListGroup = await Promise.all(map(printXPlusFive)(ListGroupBase));
    // console.log(ListGroup);

    return {
      Total,
      ListGroup,
    };
  }
}
