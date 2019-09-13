import Head from 'next/head';
import * as React from 'react';
import { WithTranslation } from 'react-i18next';
import { withTranslation } from '../../src/i18n';
import { FamilyContent } from '../../src/shared/interface/familylist';
import { PersonContent } from '../../src/shared/interface/personlist';
import '../churchcrm.scss';
import FamilyList from '../components/family_list';
import PersonsList from '../components/persons_list';
import SmallBox from '../components/small_box';

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
              icon="fa fa-user-plus"
              // tslint:disable-next-line: jsx-no-multiline-js
              content={this.props.query.lastFamilyContent}
            />
          </div>
          <div className="col-lg-6">
            <FamilyList
              title="Updated Families"
              icon="fa fa-check"
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

export default Index;
