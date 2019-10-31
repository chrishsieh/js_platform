import { mount, shallow } from 'enzyme';
import * as React from 'react';
import { i18n } from '../../../src/i18n';
import Index from '../Index';

describe('Pages', () => {
  describe('Index', () => {
    it('should render without throwing an error', () => {
      const query = {
        smallBoxs: [{ Name: 'Hello', Count: 4 }],
        lastFamilyContent: [{ name: 'LastFamily', name_link: 'link_LastFamily', address: 'addr_LastFamily', datetime: 'datetime_LastFamily' }],
        updatedFamilyContent: [{ name: 'updatedFamily', name_link: 'link_updatedFamily', address: 'addr_updatedFamily', datetime: 'datetime_updatedFamily' }],
        lastPersonContent: [{ name: 'LastPerson', name_link: 'link_LastPerson', nameshort: 'LP', date: 'date_LastPerson' }],
        updatedPersonContent: [{ name: 'updatedPerson', name_link: 'link_updatedPerson', nameshort: 'UP', date: 'date_updatedPerson' }],
      };
      const wrapMount = mount(<Index query={query} namespacesRequired={['common']} i18n={i18n} t={i18n.t} tReady={true} />);
      const wrapShallow = shallow(<Index query={query} namespacesRequired={['common']} i18n={i18n} t={i18n.t} tReady={true} />);
      // console.log(wrapMount.debug());
      // console.log(wrapShallow.debug());
      // console.log(wrapMount.find({ title: 'Latest Families'}).debug());
      expect(wrapShallow.find('title').text()).toBe('ChurchCRM: Welcome to Main St. Cathedral');
      expect(wrapMount.find('h1').text()).toBe('Welcome to Main St. Cathedral');
    });
  });
});
