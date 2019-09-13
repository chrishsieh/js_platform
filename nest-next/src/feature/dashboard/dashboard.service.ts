import { Injectable } from '@nestjs/common';
import moment from 'moment';
import { Familyif } from '../../shared/interface/familylist';
import { Personif } from '../../shared/interface/personlist';
import { FamilyDashboardItem } from './FamilyDashboardItem';
import { PersonDashboardItem } from './PersonDashboardItem';

@Injectable()
export class DashBoardService {
  constructor(
    private readonly DashboardPerson: PersonDashboardItem,
    private readonly DashboardFamily: FamilyDashboardItem
  ) {}
  public async root(): Promise<Familyif & Personif> {
    // tslint:disable-next-line: no-console
    const family = this.DashboardFamily.getDashboardItemValue();
    const member = this.DashboardPerson.getDashboardItemValue();

    return {
      lastFamilyContent: (await family.LatestFamilies).map((value: any) => {
        const famName = value.fam_Name ? value.fam_Name : '';
        const famAddress = value.fam_Address1 ? value.fam_Address1 : '';
        const famDateEntered = value.fam_DateEntered
          ? moment(value.fam_DateEntered).format('DD/MM/YY hh:mm a')
          : '';
        return {
          name: famName,
          name_link: '/FamilyView?FamilyID=' + value.fam_ID,
          address: famAddress,
          datetime: famDateEntered,
        };
      }),
      updatedFamilyContent: (await family.UpdatedFamilies).map((value: any) => {
        const famName = value.fam_Name ? value.fam_Name : '';
        const famAddress = value.fam_Address1 ? value.fam_Address1 : '';
        const famLastEdited = value.fam_DateLastEdited
          ? moment(value.fam_DateLastEdited).format('DD/MM/YY hh:mm a')
          : '';
        return {
          name: famName,
          name_link: '/FamilyView?FamilyID=' + value.fam_ID,
          address: famAddress,
          datetime: famLastEdited,
        };
      }),
      lastPersonContent: (await member.LatestMembers).map((value: any) => {
        let outDate = '';
        let shortName = '';
        if (value.per_DateEntered) {
          outDate =
            value.per_DateEntered.getMonth() +
            '/' +
            value.per_DateEntered.getDate() +
            '/' +
            value.per_DateEntered.getFullYear();
        }
        if (value.per_FirstName) {
          shortName += value.per_FirstName.charAt(0);
        }
        if (value.per_LastName) {
          shortName += value.per_LastName.charAt(0);
        }
        return {
          name: value.per_FirstName + ' ' + value.per_LastName,
          name_link: '/PersonView?PersonID=' + value.per_ID,
          nameshort: shortName,
          date: outDate,
        };
      }),
      updatedPersonContent: (await member.UpdatedMembers).map((value: any) => {
        let outDate = '';
        let shortName = '';
        if (value.per_DateLastEdited) {
          outDate =
            value.per_DateLastEdited.getMonth() +
            '/' +
            value.per_DateLastEdited.getDate() +
            '/' +
            value.per_DateLastEdited.getFullYear();
        }
        if (value.per_FirstName) {
          shortName += value.per_FirstName.charAt(0);
        }
        if (value.per_LastName) {
          shortName += value.per_LastName.charAt(0);
        }
        return {
          name: value.per_FirstName + ' ' + value.per_LastName,
          name_link: '/PersonView?PersonID=' + value.per_ID,
          nameshort: shortName,
          date: outDate,
        };
      }),
    };
  }
}
