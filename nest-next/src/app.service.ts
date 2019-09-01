import { Injectable } from '@nestjs/common';
import { person_per } from './shared/entity/person_per';
import { Familyif } from './shared/interface/familylist';
import { PersonContent, Personif } from './shared/interface/personlist';
import { DashboardService } from './shared/services/dashboard.service';

@Injectable()
export class AppService {
  constructor(private readonly dashboard: DashboardService) {}
  public async root(): Promise<Familyif & Personif> {
    // tslint:disable-next-line: no-console
    const personUpdate = await this.dashboard.getUpdatedMembers();
    return {
      lastFamilyContent: [
        {
          name: 'Smith',
          name_link: '/FamilyView?FamilyID=21',
          address: '123 Main St.',
          created: '15/04/17 5:19 pm',
        },
        {
          name: 'Larson',
          name_link: '/FamilyView?FamilyID=16',
          address: '3866 Edwards Rd',
          created: '1/03/16 2:19 pm',
        },
        {
          name: 'Kennedy',
          name_link: '/FamilyView?FamilyID=19',
          address: '9481 Wycliff Ave',
          created: '23/11/14 9:17 am',
        },
      ],
      updatedFamilyContent: [
        {
          name: 'Cooper',
          name_link: '/FamilyView?FamilyID=17',
          address: '1782 Daisy Dr',
          created: '26/09/14 12:09 am',
        },
        {
          name: 'Olson',
          name_link: '/FamilyView?FamilyID=12',
          address: '1272 Shady Ln Dr',
          created: '31/08/14 4:21 am',
        },
        {
          name: 'Black',
          name_link: '/FamilyView?FamilyID=20',
          address: '4307 Avondale Ave',
          created: '10/05/14 6:07 am',
        },
      ],
      lastPersonContent: [],
      updatedPersonContent: personUpdate.map((value) => {
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
          name_link: 'PersonView?PersonID=' + value.per_ID,
          nameshort: shortName,
          date: outDate,
        };
      }),
    };
  }
}
