import { Injectable } from '@nestjs/common';
import moment from 'moment';
import { SmallBoxif } from '../../shared/interface/dashboardlist';
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
  public async root(): Promise<Familyif & Personif & SmallBoxif> {
    const family = this.DashboardFamily.getDashboardItemValue();
    const member = this.DashboardPerson.getDashboardItemValue();
    const group = await this.DashboardGroup.getDashboardItemValue();

    return {
      smallBoxs: [
        { Name: 'Families', Count: await family.familyCount },
        { Name: 'People', Count: await member.MembersCount },
        { Name: 'Sunday School Classes', Count: group.SundaySchoolClasses },
        { Name: 'Groups', Count: group.Group },
        { Name: 'Attendees Checked In', Count: 1 },
      ],
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
        const outDate = value.PerDateEntered
          ? moment(value.PerDateEntered).format('MM/DD/YYYY')
          : '';
        let shortName = '';
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
        const outDate = value.PerDateLastEdited
          ? moment(value.PerDateLastEdited).format('MM/DD/YYYY')
          : '';
        let shortName = '';
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
