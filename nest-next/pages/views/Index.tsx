
import FamilyList from '@src/components/family_list';
import PersonsList from '@src/components/persons_list';
import SmallBox from '@src/components/small_box';
import Head from 'next/head';
import * as React from 'react';
import { WithTranslation } from 'react-i18next';
import { withTranslation } from '../../src/i18n';

import '../churchcrm.scss';

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
          <div className="col-lg-6"><FamilyList /></div>
          <div className="col-lg-6"><FamilyList /></div>
        </div>
        <div className="row">
          <div className="col-lg-6"><PersonsList /></div>
          <div className="col-lg-6"><PersonsList /></div>
        </div>
      </div>
    );
  }
}

export default withTranslation('common')(Index);
