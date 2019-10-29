import { Injectable } from '@nestjs/common';
import { SmallBoxif } from '../../shared/interface/dashboardlist';
import { FamilyDashboardItem } from '../dashboard/FamilyDashboardItem';
import { GroupsDashboardItem } from '../dashboard/GroupsDashboardItem';
import { PersonDashboardItem } from '../dashboard/PersonDashboardItem';
import { ListOptionQuery } from './DemoGraphStats';

@Injectable()
export class PeopleDashBoardService {
  constructor(
    private readonly DashboardPerson: PersonDashboardItem,
    private readonly DashboardFamily: FamilyDashboardItem,
    private readonly DashboardGroup: GroupsDashboardItem,
    private readonly DashboardList: ListOptionQuery
  ) {}
  public async root(): Promise<SmallBoxif & any> {
    const family = this.DashboardFamily.getDashboardItemValue();
    const member = this.DashboardPerson.getDashboardItemValue();
    const group = await this.DashboardGroup.getDashboardItemValue();
    const list = await this.DashboardList.getDashboardItemValue();

    return {
      smallBoxs: [
        { Name: 'Families', Count: await family.familyCount },
        { Name: 'People', Count: await member.MembersCount },
        { Name: 'Sunday School Kids', Count: group.SundaySchoolKids },
        { Name: 'Groups', Count: group.Group },
      ],
      AdultsGenderCount: group.AdultsGenderCount,
      KidsGenderCount: group.KidsGenderCount,
      AgeCountGroup: group.AgeCountGroup,
    };
  }
}
