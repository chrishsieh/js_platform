import React from 'react';
import Head from 'next/head';
import {
  Dropdown,
  Header,
  Icon,
  Menu,
  Input,
  Table,
  Label,
  Checkbox,
} from 'semantic-ui-react';
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
        <Head>
          <link
            rel="stylesheet"
            href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
          />
          <script src="https://unpkg.com/react@16/umd/react.production.min.js" />
          <script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js" />
        </Head>
        <Table compact celled definition color="purple" inverted>
          <Table.Header fullWidth>
            <Table.Row>
              <Table.HeaderCell />
              <Table.HeaderCell>Id</Table.HeaderCell>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.props.items.map((item, index) => (
              <Table.Row key={index}>
                <Table.Cell collapsing>
                  <Checkbox slider />
                </Table.Cell>
                <Table.Cell>{index}</Table.Cell>
                <Table.Cell>
                  {item.per_LastName}, {item.per_FirstName}
                </Table.Cell>
                <Table.Cell>{item.per_Email}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell />
              <Table.HeaderCell colSpan="3">
                <Menu floated="right" pagination>
                  <Menu.Item as="a" icon>
                    <Icon name="chevron left" />
                  </Menu.Item>
                  <Menu.Item as="a">1</Menu.Item>
                  <Menu.Item as="a">2</Menu.Item>
                  <Menu.Item as="a">3</Menu.Item>
                  <Menu.Item as="a">4</Menu.Item>
                  <Menu.Item as="a" icon>
                    <Icon name="chevron right" />
                  </Menu.Item>
                </Menu>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </div>
    );
  }
}

export default Person;
