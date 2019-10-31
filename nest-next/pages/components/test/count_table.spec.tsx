import { mount, shallow } from 'enzyme';
import * as React from 'react';
import CountTable from '../count_table';

describe('Pages Components', () => {
  describe('CountTable', () => {
    it('should render without throwing an error', () => {
      const wrapMount = mount(<CountTable />);
      // const wrapShallow = shallow(<CountTable />);
      // console.log(wrapMount.debug());
      // console.log(wrapShallow.debug());
      // console.log(wrapMount.find({ title: 'Latest Families'}).debug());
      // expect(wrapShallow.find('title').text()).toBe('ChurchCRM: Welcome to Main St. Cathedral');
      // expect(wrapMount.find('h1').text()).toBe('Welcome to Main St. Cathedral');
    });
  });
});
