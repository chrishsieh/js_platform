import React from 'react';
import Head from 'next/head';
import { Dropdown, Header, Icon, Menu, Input } from 'semantic-ui-react';
import { person_per } from '@entities/person_per';

interface InitialProps {
  query: Promise<person_per[]>;
}

//interface Props extends InitialProps {}
interface Props {
  items: person_per[];
}

class Person extends React.Component<Props> {
  public static async getInitialProps({ query }: InitialProps) {
    const res = await query;
    //console.log(query);
    if (res) {
      //console.log(res.map(value => value.per_FirstName + ' ' + value.per_LastName));
      return {
        items: res,
      };
    }
    return { items: { per_LastName: '', per_FirstName: '' } };
  }

  public render() {
    return (
      <div>
        {this.props.items.map((item, index) => (
          <li key={index}>
            {item.per_LastName}, {item.per_FirstName}
          </li>
        ))}
      </div>
    );
  }
}

export default Person;
