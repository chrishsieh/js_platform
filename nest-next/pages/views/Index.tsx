import { FamilyContent } from '@server/shared/interface/familylist';
import { PersonContent } from '@server/shared/interface/personlist';
import FamilyList from '@src/components/family_list';
import PersonsList from '@src/components/persons_list';
import SmallBox from '@src/components/small_box';
import Head from 'next/head';
import * as React from 'react';
import { WithTranslation } from 'react-i18next';
import { withTranslation } from '../../src/i18n';
import '../churchcrm.scss';

interface InitialProps {
  query: {
    lastFamilyContent: FamilyContent[];
    updatedFamilyContent: FamilyContent[];
    lastPersonContent: PersonContent[];
    updatedPersonContent: PersonContent[];
  };
}

interface Props {
  query: {
    lastFamilyContent: FamilyContent[];
    updatedFamilyContent: FamilyContent[];
    lastPersonContent: PersonContent[];
    updatedPersonContent: PersonContent[];
  };
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
              content={this.props.query.lastFamilyContent}
            />
          </div>
          <div className="col-lg-6">
            <FamilyList
              title="Updated Families"
              // tslint:disable-next-line: jsx-no-multiline-js
              content={this.props.query.updatedFamilyContent}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <PersonsList
              title="Latest Persons"
              // tslint:disable-next-line: jsx-no-multiline-js
              content={this.props.query.lastPersonContent}
            />
          </div>
          <div className="col-lg-6">
            <PersonsList
              title="Updated Persons"
              // tslint:disable-next-line: jsx-no-multiline-js
              content={this.props.query.updatedPersonContent}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslation('common')(Index);
