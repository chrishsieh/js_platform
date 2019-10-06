import Head from 'next/head';
import * as React from 'react';
import { WithTranslation } from 'react-i18next';
import '../churchcrm.scss';
import ContentHeader from '../components/content_header';

interface InitialProps {
  query: {
    //    smallBoxs: SmallBoxItem[];
  };
}

interface Props {
  query: {
    //    smallBoxs: SmallBoxItem[];
  };
  namespacesRequired: string[];
}

class PeopleDashBoard extends React.Component<Props & WithTranslation> {
  public static getInitialProps({ query }: InitialProps) {
    return { query, namespacesRequired: ['common'] };
  }

  public render() {
    return (
      < div >
        <ContentHeader content="People Dashboard" />
        <Head>
          <title>ChurchCRM: People Dashboard</title>
        </Head>
        <section className="content">
          {/*<!-- Default box -->*/}
          <div className="box">
            <div className="box-header with-border">
              <h3 className="box-title">People Functions</h3>
            </div>
          </div>
        </section>
      </div >
    );
  }
}

export default PeopleDashBoard;
