import React from 'react';
import { withTranslation } from '../../src/i18n';
import { person_per } from '../../entities/person_per';
import { Icon, Menu, Table, Checkbox } from 'semantic-ui-react';
import { WithTranslation } from 'react-i18next';

interface InitialProps {
  query: Promise<person_per[]>;
}

interface Props {
  items: person_per[];
  namespacesRequired: string[];
}

class Person extends React.Component<Props & WithTranslation> {
  public static async getInitialProps({ query }: InitialProps) {
    const res = await query;

    if (res) {
      return {
        items: res,
        namespacesRequired: ['common'],
      };
    }
    return {
      items: { per_LastName: '', per_FirstName: '' },
      namespacesRequired: ['common'],
    };
  }

  public render() {
    const { t } = this.props;
    return (
      <Table compact celled definition color="purple">
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
    );
  }
}

export default withTranslation('common')(Person);
