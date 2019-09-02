import { Injectable } from '@nestjs/common';
import moment from 'moment';
import { family_fam } from './shared/entity/family_fam';
import { person_per } from './shared/entity/person_per';
import { Familyif } from './shared/interface/familylist';
import { Personif } from './shared/interface/personlist';
import { FamilyDashboardService } from './shared/services/family.dashboard.service';
import { PersonDashboardService } from './shared/services/person.dashboard.service';

@Injectable()
export class AppService {
  constructor(
    private readonly personDashboard: PersonDashboardService,
    private readonly familyDashboard: FamilyDashboardService
  ) {}
  public async root(): Promise<Familyif & Personif> {
    // tslint:disable-next-line: no-console
    const familyLatest = await this.familyDashboard.getLatestFamilies();
    const familyUpdate = await this.familyDashboard.getUpdatedFamilies();
    const personLatest = await this.personDashboard.getLatestMembers();
    const personUpdate = await this.personDashboard.getUpdatedMembers();

    return {
      lastFamilyContent: familyLatest.map((value: any) => {
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
      updatedFamilyContent: familyUpdate.map((value: any) => {
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
      lastPersonContent: personLatest.map((value: any) => {
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
      updatedPersonContent: personUpdate.map((value: any) => {
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
