import { mount, shallow } from 'enzyme';
import * as React from 'react';
import CountTable from '../count_table';

describe('Pages Components', () => {
  describe('CountTable', () => {
    it('should render without throwing an error', () => {
      const input = {
        Title: 'Family Roles',
        IconType: 'fa fa-address-card',
        TableName: 'Role / Gender',
        TableCol_1: '% of People',
        TableCol_2: 'Count',
        Count: 100,
        ListGroup: [
          { ID: 1, NameMarge: 'Head of Household', Gender: 1, Count: '14', link: 'v2/people?Gender=1&FamilyRole=1' },
          { ID: 1, NameMarge: 'Head of Household', Gender: 2, Count: '7', link: 'v2/people?Gender=2&FamilyRole=1' },
          { ID: 2, NameMarge: 'Spouse', Gender: 1, Count: '6', link: 'v2/people?Gender=1&FamilyRole=2' },
          { ID: 2, NameMarge: 'Spouse', Gender: 2, Count: '9', link: 'v2/people?Gender=2&FamilyRole=2' },
          { ID: 3, NameMarge: 'Child', Gender: 1, Count: '23', link: 'v2/people?Gender=1&FamilyRole=3' },
          { ID: 3, NameMarge: 'Child', Gender: 2, Count: '19', link: 'v2/people?Gender=2&FamilyRole=3' },
          { ID: 4, NameMarge: 'Other Relative', Gender: 1, Count: '4', link: 'v2/people?Gender=1&FamilyRole=4' },
          { ID: 4, NameMarge: 'Other Relative', Gender: 2, Count: '2', link: 'v2/people?Gender=2&FamilyRole=4' },
          { ID: 5, NameMarge: 'Non Relative', Gender: 2, Count: '1', link: 'v2/people?Gender=2&FamilyRole=5' },
          { ID: 0, NameMarge: null, Gender: 1, Count: '9', link: 'v2/people?Gender=1&FamilyRole=0' },
          { ID: 0, NameMarge: null, Gender: 2, Count: '4', link: 'v2/people?Gender=2&FamilyRole=0' },
          { ID: 0, NameMarge: null, Gender: 0, Count: '2', link: 'v2/people?Gender=0&FamilyRole=0' },
        ],
      };
      const inputArray = {
        Title: 'Family Roles',
        IconType: 'fa fa-address-card',
        TableName: 'Role / Gender',
        TableCol_1: '% of People',
        TableCol_2: 'Count',
        Count: 100,
        ListGroup: [
          { ID: 1, NameMarge: 'Head of Household - Male', Gender: 1, Count: '14', link: 'v2/people?Gender=1&FamilyRole=1' },
          { ID: 1, NameMarge: 'Head of Household - Female', Gender: 2, Count: '7', link: 'v2/people?Gender=2&FamilyRole=1' },
          { ID: 2, NameMarge: 'Spouse - Male', Gender: 1, Count: '6', link: 'v2/people?Gender=1&FamilyRole=2' },
          { ID: 2, NameMarge: 'Spouse - Female', Gender: 2, Count: '9', link: 'v2/people?Gender=2&FamilyRole=2' },
          { ID: 3, NameMarge: 'Child - Male', Gender: 1, Count: '23', link: 'v2/people?Gender=1&FamilyRole=3' },
          { ID: 3, NameMarge: 'Child - Female', Gender: 2, Count: '19', link: 'v2/people?Gender=2&FamilyRole=3' },
          { ID: 4, NameMarge: 'Other Relative - Male', Gender: 1, Count: '4', link: 'v2/people?Gender=1&FamilyRole=4' },
          { ID: 4, NameMarge: 'Other Relative - Female', Gender: 2, Count: '2', link: 'v2/people?Gender=2&FamilyRole=4' },
          { ID: 5, NameMarge: 'Non Relative - Female', Gender: 2, Count: '1', link: 'v2/people?Gender=2&FamilyRole=5' },
          { ID: 0, NameMarge: 'Unassigned - Male', Gender: 1, Count: '9', link: 'v2/people?Gender=1&FamilyRole=0' },
          { ID: 0, NameMarge: 'Unassigned - Female', Gender: 2, Count: '4', link: 'v2/people?Gender=2&FamilyRole=0' },
          { ID: 0, NameMarge: 'Unassigned - Unassigned', Gender: 0, Count: '2', link: 'v2/people?Gender=0&FamilyRole=0' },
        ],
      };
      const ClassArray = {
        Title: 'People Classification',
        IconType: 'fa fa-bar-chart-o',
        TableName: 'Classification',
        TableCol_1: '% of People',
        TableCol_2: 'Count',
        Count: 100,
        ListGroup: [
          { NameMarge: 'Member', Count: '27', link: 'v2/people?inActive=false&Classification=1' },
          { NameMarge: 'Regular Attender', Count: '18', link: 'v2/people?inActive=false&Classification=2' },
          { NameMarge: 'Non-Attender', Count: '5', link: 'v2/people?inActive=false&Classification=5' },
          { NameMarge: 'Guest', Count: '4', link: 'v2/people?inActive=false&Classification=3' },
          { NameMarge: 'Candidate for Membership', Count: '2', link: 'v2/people?inActive=false&Classification=4' },
        ],
      };
      const wrapMount = mount(<CountTable {...input} />);
      // const wrapShallow = shallow(<CountTable {...input}/>);
      // console.log(wrapMount.debug());
      wrapMount.unmount();
      const wrapMountArray = mount(<CountTable {...inputArray} />);
      wrapMountArray.unmount();
      const wrapMountClassArray = mount(<CountTable {...ClassArray} />);
      wrapMountClassArray.unmount();
      // console.log(wrapShallow.debug());
      // console.log(wrapMount.find({ title: 'Latest Families'}).debug());
      // expect(wrapShallow.find('title').text()).toBe('ChurchCRM: Welcome to Main St. Cathedral');
      // expect(wrapMount.find('h1').text()).toBe('Welcome to Main St. Cathedral');
    });
  });
});
