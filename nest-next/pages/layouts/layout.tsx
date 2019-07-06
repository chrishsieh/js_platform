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
} from 'semantic-ui-react';
import React from 'react';
import { WithTranslation } from 'react-i18next';

class Layout extends React.Component<any & WithTranslation> {
  render() {
    const { t, children } = this.props;
    const languageOptions = [
      { key: 'Chinese', text: i18n.t('Chinese'), value: 'zh' },
      { key: 'English', text: i18n.t('English'), value: 'en' },
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
          <Menu fixed="top" inverted stackable size="huge">
            <Menu.Item as="a" header position="left">
              ChurchCRM
            </Menu.Item>
            <Menu.Item as="a" icon="world" header position="right" />
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
              <Menu vertical>
                <Menu.Item>
                  <Input placeholder="Search..." />
                </Menu.Item>

                <Menu.Item>
                  <Menu.Menu>
                    <Menu.Item name="search">{i18n.t('Search')}</Menu.Item>
                    <Menu.Item name="add">Add</Menu.Item>
                    <Menu.Item name="about">Remove</Menu.Item>
                  </Menu.Menu>
                </Menu.Item>

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
