import { Injectable } from '@nestjs/common';
import moment from 'moment';
import { Familyif } from '../../shared/interface/familylist';
import { Personif } from '../../shared/interface/personlist';
import { FamilyDashboardItem } from './FamilyDashboardItem';
import { GroupsDashboardItem } from './GroupsDashboardItem';
import { PersonDashboardItem } from './PersonDashboardItem';

@Injectable()
export class DashBoardService {
  constructor(
    private readonly DashboardPerson: PersonDashboardItem,
    private readonly DashboardFamily: FamilyDashboardItem,
    private readonly DashboardGroup: GroupsDashboardItem
  ) {}
  public async root(): Promise<Familyif & Personif> {
    // tslint:disable-next-line: no-console
    const family = this.DashboardFamily.getDashboardItemValue();
    const member = this.DashboardPerson.getDashboardItemValue();
    console.log(await this.DashboardFamily.getDashboardItemValue().familyCount);
    console.log(await this.DashboardPerson.getDashboardItemValue().MembersCount);
    console.log(await this.DashboardGroup.getDashboardItemValue().GroupCount);

    return {
      lastFamilyContent: (await family.LatestFamilies).map((value: any) => {
        const famName = value.FamName ? value.FamName : '';
        const famAddress = value.FamAddress1 ? value.FamAddress1 : '';
        const famDateEntered = value.FamDateEntered
          ? moment(value.FamDateEntered).format('DD/MM/YY hh:mm a')
          : '';
        return {
          name: famName,
          name_link: '/FamilyView?FamilyID=' + value.FamID,
          address: famAddress,
          datetime: famDateEntered,
        };
      }),
      updatedFamilyContent: (await family.UpdatedFamilies).map((value: any) => {
        const famName = value.FamName ? value.FamName : '';
        const famAddress = value.FamAddress1 ? value.FamAddress1 : '';
        const famLastEdited = value.FamDateLastEdited
          ? moment(value.fam_DateLastEdited).format('DD/MM/YY hh:mm a')
          : '';
        return {
          name: famName,
          name_link: '/FamilyView?FamilyID=' + value.FamID,
          address: famAddress,
          datetime: famLastEdited,
        };
      }),
      lastPersonContent: (await member.LatestMembers).map((value: any) => {
        let outDate = '';
        let shortName = '';
        if (value.PerDateEntered) {
          outDate =
            value.PerDateEntered.getMonth() +
            '/' +
            value.PerDateEntered.getDate() +
            '/' +
            value.PerDateEntered.getFullYear();
        }
        if (value.PerFirstName) {
          shortName += value.PerFirstName.charAt(0);
        }
        if (value.PerLastName) {
          shortName += value.PerLastName.charAt(0);
        }
        return {
          name: value.PerFirstName + ' ' + value.PerLastName,
          name_link: '/PersonView?PersonID=' + value.PerID,
          nameshort: shortName,
          date: outDate,
        };
      }),
      updatedPersonContent: (await member.UpdatedMembers).map((value: any) => {
        let outDate = '';
        let shortName = '';
        if (value.PerDateLastEdited) {
          outDate =
            value.PerDateLastEdited.getMonth() +
            '/' +
            value.PerDateLastEdited.getDate() +
            '/' +
            value.PerDateLastEdited.getFullYear();
        }
        if (value.PerFirstName) {
          shortName += value.PerFirstName.charAt(0);
        }
        if (value.PerLastName) {
          shortName += value.PerLastName.charAt(0);
        }
        return {
          name: value.PerFirstName + ' ' + value.PerLastName,
          name_link: '/PersonView?PersonID=' + value.PerID,
          nameshort: shortName,
          date: outDate,
        };
      }),
    };
  }
}
