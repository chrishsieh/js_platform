
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
          <div className="col-lg-6">
            <FamilyList
              title="Latest Families"
              // tslint:disable-next-line: jsx-no-multiline-js
              content={
                [{
                  name: 'Smith',
                  name_link: '/FamilyView?FamilyID=21',
                  address: '123 Main St.',
                  created: '15/04/17 5:19 pm',
                }, {
                  name: 'Larson',
                  name_link: '/FamilyView?FamilyID=16',
                  address: '3866 Edwards Rd',
                  created: '1/03/16 2:19 pm',
                }, {
                  name: 'Kennedy',
                  name_link: '/FamilyView?FamilyID=19',
                  address: '9481 Wycliff Ave',
                  created: '23/11/14 9:17 am',
                }]
              }
            />
          </div>
          <div className="col-lg-6">
            <FamilyList
              title="Updated Families"
              // tslint:disable-next-line: jsx-no-multiline-js
              content={
                [{
                  name: 'Cooper',
                  name_link: '/FamilyView?FamilyID=17',
                  address: '1782 Daisy Dr',
                  created: '26/09/14 12:09 am',
                }, {
                  name: 'Olson',
                  name_link: '/FamilyView?FamilyID=12',
                  address: '1272 Shady Ln Dr',
                  created: '31/08/14 4:21 am',
                }, {
                  name: 'Black',
                  name_link: '/FamilyView?FamilyID=20',
                  address: '4307 Avondale Ave',
                  created: '10/05/14 6:07 am',
                }]
              }
            />
          </div>
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
