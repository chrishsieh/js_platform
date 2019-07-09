import Head from 'next/head';
import { i18n } from '../../src/i18n';
import {
  Divider,
  Menu,
  Dropdown,
  Grid,
  Segment,
  Icon,
  Input,
  Label,
  Header,
} from 'semantic-ui-react';
import React from 'react';

class Layout extends React.Component<any> {
  render() {
    const { children } = this.props;
    const languageOptions = [
      { key: 'English', text: i18n.t('English'), value: 'en' },
      { key: 'Chinese', text: i18n.t('Chinese'), value: 'zh' },
    ];
    const spanStyle: React.CSSProperties = {
      float: 'right',
    };

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
        <Segment.Group>
          <Segment>
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
              <Dropdown item simple text={i18n.t('Menu')}>
                <Dropdown.Menu>
                  <Dropdown.Item>List Item 1</Dropdown.Item>
                  <Dropdown.Item>List Item 2</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu>
          </Segment>
          <Segment>
            <Grid>
              <Grid.Column width={3}>
                <Menu vertical compact>
                  <Menu.Item>
                    <Input placeholder="Search..." />
                  </Menu.Item>
                  <Menu.Item name="dashboard">
                    <span>
                      <Icon name="dashboard" />
                      {i18n.t('Dashboard')}
                    </span>
                  </Menu.Item>
                  <Menu.Item name="calendar">
                    <span>
                      <Icon name="calendar" />
                      {i18n.t('Calendar')}
                      <span style={spanStyle}>
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
                    </span>
                  </Menu.Item>
                  <Dropdown
                    item
                    trigger={
                      <span>
                        <Icon name="users" />
                        {i18n.t('People')}
                      </span>
                    }
                  >
                    <Dropdown.Menu>
                      <Dropdown.Item text={i18n.t('Dashboard')} />
                      <Dropdown.Item text={i18n.t('Add New Person')} />
                      <Dropdown.Item text={i18n.t('View All Persons')} />
                      <Dropdown.Item text={i18n.t('Add New Family')} />
                      <Dropdown.Item text={i18n.t('View Active Families')} />
                      <Dropdown.Item text={i18n.t('View Inactive Families')} />
                      <Dropdown.Divider />
                      <Dropdown
                        item
                        trigger={
                          <span>
                            <Icon name="user" />
                            {i18n.t('Admin')}
                          </span>
                        }
                      >
                        <Dropdown.Menu>
                          <Dropdown.Item
                            text={i18n.t('Classifications Manager')}
                          />
                          <Dropdown.Item text={i18n.t('Family Roles')} />
                          <Dropdown.Item text={i18n.t('Family Properties')} />
                          <Dropdown.Item
                            text={i18n.t('Family Custom Fields')}
                          />
                          <Dropdown.Item text={i18n.t('People Properties')} />
                          <Dropdown.Item
                            text={i18n.t('People Custom Fields')}
                          />
                          <Dropdown.Item
                            text={i18n.t('Volunteer Opportunities')}
                          />
                        </Dropdown.Menu>
                      </Dropdown>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown
                    item
                    trigger={
                      <span>
                        <Icon name="tags" />
                        {i18n.t('Groups')}
                      </span>
                    }
                  >
                    <Dropdown.Menu>
                      <Dropdown.Item text={i18n.t('List Groups')} />
                      <Dropdown.Item text={i18n.t('Group Assignment Help')} />
                      <Dropdown.Divider />
                      <Dropdown
                        item
                        trigger={
                          <span>
                            <Icon name="tag" />
                            {i18n.t('Ministry')}
                          </span>
                        }
                      >
                        <Dropdown.Menu>
                          <Dropdown.Item
                            content={
                              <span>
                                <Icon name="user" />
                                {i18n.t('Worship Service')}
                              </span>
                            }
                          />
                        </Dropdown.Menu>
                      </Dropdown>
                      <Dropdown.Divider />
                      <Dropdown
                        item
                        trigger={
                          <span>
                            <Icon name="tag" />
                            {i18n.t('Unassigned')}
                          </span>
                        }
                      >
                        <Dropdown.Menu>
                          <Dropdown.Item
                            content={
                              <span>
                                <Icon name="user" />
                                {i18n.t('Boys Scouts')}
                              </span>
                            }
                          />
                          <Dropdown.Item
                            content={
                              <span>
                                <Icon name="user" />
                                {i18n.t('Church Board')}
                              </span>
                            }
                          />
                          <Dropdown.Item
                            content={
                              <span>
                                <Icon name="user" />
                                {i18n.t('Girl Scouts')}
                              </span>
                            }
                          />
                        </Dropdown.Menu>
                      </Dropdown>
                      <Dropdown.Divider />
                      <Dropdown
                        item
                        trigger={
                          <span>
                            <Icon name="user" />
                            {i18n.t('Admin')}
                          </span>
                        }
                      >
                        <Dropdown.Menu>
                          <Dropdown.Item text={i18n.t('Group Properties')} />
                          <Dropdown.Item text={i18n.t('Group Types')} />
                        </Dropdown.Menu>
                      </Dropdown>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown
                    item
                    trigger={
                      <span>
                        <Icon name="child" />
                        {i18n.t('Sunday School')}
                      </span>
                    }
                  >
                    <Dropdown.Menu>
                      <Dropdown.Item text={i18n.t('Dashboard')} />
                      <Dropdown.Divider />
                      <Dropdown
                        item
                        trigger={
                          <span>
                            <Icon name="tags" />
                            {i18n.t('Classes')}
                          </span>
                        }
                      >
                        <Dropdown.Menu>
                          <Dropdown.Item
                            content={
                              <span>
                                <Icon name="user" />
                                {i18n.t('Angels class')}
                              </span>
                            }
                          />
                        </Dropdown.Menu>
                      </Dropdown>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Menu.Item name="Email">
                    <span>
                      <Icon name="mail" />
                      {i18n.t('Email')}
                    </span>
                  </Menu.Item>
                  <Dropdown
                    item
                    trigger={
                      <span>
                        <Icon name="ticket" />
                        {i18n.t('Events')}
                      </span>
                    }
                  >
                    <Dropdown.Menu>
                      <Dropdown.Item text={i18n.t('Add Church Event')} />
                      <Dropdown.Item text={i18n.t('List Church Events')} />
                      <Dropdown.Item text={i18n.t('List Event Types')} />
                      <Dropdown.Item text={i18n.t('Check-in and Check-out')} />
                      <Dropdown.Item
                        text={i18n.t('Event Attendance Reports')}
                      />
                    </Dropdown.Menu>
                  </Dropdown>
                  <Menu.Item name="deposit">
                    <span>
                      <Icon name="university" />
                      {i18n.t('Deposit')}
                      <span style={spanStyle}>
                        <Label size="tiny" color="green">
                          6
                        </Label>
                      </span>
                    </span>
                  </Menu.Item>
                  <Menu.Item name="fundraiser">
                    <span>
                      <Icon name="money" />
                      {i18n.t('Fundraiser')}
                      <span style={spanStyle}>
                        <Label size="tiny" color="blue">
                          0
                        </Label>
                      </span>
                    </span>
                  </Menu.Item>
                  <Dropdown
                    item
                    trigger={
                      <span>
                        <Icon name="file pdf outline" />
                        {i18n.t('Data/Reports')}
                      </span>
                    }
                  >
                    <Dropdown.Menu>
                      <Dropdown.Item text={i18n.t('Canvass Automation')} />
                      <Dropdown.Item text={i18n.t('Query Menu')} />
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown
                    item
                    trigger={
                      <span>
                        <Icon name="setting" />
                        {i18n.t('Admin')}
                      </span>
                    }
                  >
                    <Dropdown.Menu>
                      <Dropdown.Item text={i18n.t('Edit General Settings')} />
                      <Dropdown.Item text={i18n.t('System Users')} />
                      <Dropdown.Item text={i18n.t('Property Types')} />
                      <Dropdown.Item text={i18n.t('Restore Database')} />
                      <Dropdown.Item text={i18n.t('Backup Database')} />
                      <Dropdown.Item text={i18n.t('CSV Import')} />
                      <Dropdown.Item text={i18n.t('CSV Export Records')} />
                      <Dropdown.Item text={i18n.t('Kiosk Manager')} />
                      <Dropdown.Item text={i18n.t('Debug')} />
                      <Dropdown.Item text={i18n.t('Custom Menus')} />
                    </Dropdown.Menu>
                  </Dropdown>
                </Menu>
              </Grid.Column>
              <Grid.Column width={13}>{children}</Grid.Column>
            </Grid>
          </Segment>
        </Segment.Group>
      </Divider>
    );
  }
}

export default Layout;
