import Head from 'next/head';
import i18n from 'i18next';
import {
  Divider,
  Menu,
  Dropdown,
  Grid,
  Segment,
  Icon,
  Input,
  Label,
} from 'semantic-ui-react';
import React from 'react';

class Layout extends React.Component<any> {
  render() {
    const { children } = this.props;
    const languageOptions = [
      { key: 'English', text: i18n.t('English'), value: 'en' },
      { key: 'Chinese', text: i18n.t('Chinese'), value: 'zh' },
    ];

    return (
      <Divider className="layout">
        <Head>
          <link
            rel="stylesheet"
            href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
          />
          <script src="https://unpkg.com/react@16/umd/react.production.min.js" />
          <script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js" />
        </Head>
        <Divider horizontal>
          <Menu fixed="top" inverted stackable borderless size="huge">
            <Menu.Item header position="left">
              ChurchCRM
            </Menu.Item>
            <Menu.Item icon="world" header position="right" />
            <Dropdown
              className="icon"
              floating
              labeled
              item
              options={languageOptions}
              search
              text={i18n.t('Select Language')}
              onChange={(event, data) => {
                if (data.value) {
                  i18n.changeLanguage(data.value as string);
                }
              }}
            />
            <Dropdown item simple text="Menu">
              <Dropdown.Menu>
                <Dropdown.Item>List Item 1</Dropdown.Item>
                <Dropdown.Item>List Item 2</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu>
        </Divider>
        <Segment>
          <Grid>
            <Grid.Column width={3}>
              <Menu vertical compact>
                <Menu.Item>
                  <Input placeholder="Search..." />
                </Menu.Item>

                <Menu.Item name="dashboard">
                  <Icon name="dashboard" />
                  {i18n.t('Dashboard')}
                </Menu.Item>
                <Menu.Item name="calendar">
                  <Icon name="calendar" />
                  {i18n.t('Calendar')}
                  <span>
                    <Label size="tiny" color="blue">
                      1
                    </Label>
                    <Label size="tiny" color="red">
                      12
                    </Label>
                    <Label size="tiny" color="yellow">
                      3
                    </Label>
                  </span>
                </Menu.Item>
                <Dropdown item pointing text={i18n.t('People')}>
                  <Dropdown.Menu>
                    <Dropdown.Item text={i18n.t('Dashboard')} />
                    <Dropdown.Item text={i18n.t('Add New Person')} />
                    <Dropdown.Item text={i18n.t('View All Persons')} />
                    <Dropdown.Item text={i18n.t('Add New Family')} />
                    <Dropdown.Item text={i18n.t('View Active Families')} />
                    <Dropdown.Item text={i18n.t('View Inactive Families')} />
                    <Dropdown item pointing text={i18n.t('Admin')}>
                      <Dropdown.Menu>
                        <Dropdown.Item
                          text={i18n.t('Classifications Manager')}
                        />
                        <Dropdown.Item text={i18n.t('Family Roles')} />
                        <Dropdown.Item text={i18n.t('Family Properties')} />
                        <Dropdown.Item text={i18n.t('Family Custom Fields')} />
                        <Dropdown.Item text={i18n.t('People Properties')} />
                      </Dropdown.Menu>
                    </Dropdown>
                  </Dropdown.Menu>
                </Dropdown>
                <Menu.Item name="browse">
                  <Icon name="grid layout" />
                  Browse
                </Menu.Item>
                <Menu.Item name="messages">Messages</Menu.Item>

                <Dropdown item text="More">
                  <Dropdown.Menu>
                    <Dropdown.Item icon="edit" text="Edit Profile" />
                    <Dropdown.Item icon="globe" text="Choose Language" />
                    <Dropdown.Item icon="settings" text="Account Settings" />
                  </Dropdown.Menu>
                </Dropdown>
              </Menu>
            </Grid.Column>
            <Grid.Column width={13}>{children}</Grid.Column>
          </Grid>
        </Segment>
      </Divider>
    );
  }
}

export default Layout;
