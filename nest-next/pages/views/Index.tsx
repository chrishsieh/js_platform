import * as React from 'react';
import { withTranslation } from '../../src/i18n';
import { WithTranslation } from 'react-i18next';
import SmallBox from '@src/components/small_box';
import CustomTab from '@src/components/custom_tab';
import ChatBox from '@src/components/chat_box';
import TodoList from '@src/components/todo_list';
import QuickEmail from '@src/components/quick_email';
import MapBox from '@src/components/map_box';
import SolidGraph from '@src/components/solid_graph';
import Calendar from '@src/components/calendar';
import '../churchcrm.scss';
import Head from 'next/head';

interface InitialProps {
  query: string;
}

interface Props {
  query: string;
  namespacesRequired: string[];
}

class Index extends React.Component<Props & WithTranslation> {
  public static getInitialProps({ query }: InitialProps) {
    return { query, namespacesRequired: ['common'] };
  }

  public render() {
    return (
      <div>
        <Head>
          <title>ChurchCRM: Welcome to Main St. Cathedral</title>
        </Head>
        <SmallBox />
        <div className="row">
          <section className="col-lg-7 connectedSortable">
            <CustomTab />
            <ChatBox />
            <TodoList />
            <QuickEmail />
          </section>

          <section className="col-lg-5 connectedSortable">
            <MapBox />
            <SolidGraph />
            <Calendar />
          </section>
        </div>
      </div>
    );
  }
}

export default withTranslation('common')(Index);
