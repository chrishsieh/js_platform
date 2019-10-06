import Head from 'next/head';
import * as React from 'react';
import { WithTranslation } from 'react-i18next';
import { SmallBoxItem } from '../../src/shared/interface/dashboardlist';
import { FamilyContent } from '../../src/shared/interface/familylist';
import { PersonContent } from '../../src/shared/interface/personlist';
import '../churchcrm.scss';
import ContentHeader from '../components/content_header';
import FamilyList from '../components/family_list';
import PersonsList from '../components/persons_list';
import SmallBox from '../components/small_box';

interface InitialProps {
  query: {
    smallBoxs: SmallBoxItem[];
    lastFamilyContent: FamilyContent[];
    updatedFamilyContent: FamilyContent[];
    lastPersonContent: PersonContent[];
    updatedPersonContent: PersonContent[];
  };
}

interface Props {
  query: {
    smallBoxs: SmallBoxItem[];
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
    const smallbox = this.props.query.smallBoxs.map((value) => {
      switch (value.Name) {
        case 'Families':
          return {
            content: value, color: 'small-box bg-aqua',
            href: '/v2/family', href_string: 'See All Families',
            icon: 'fa fa-users',
            id: 'familyCountDashboard',
          };
        case 'People':
          return {
            content: value, color: 'small-box bg-green',
            href: '/SelectList?mode=person', href_string: 'See All People',
            icon: 'fa fa-user',
            id: 'peopleStatsDashboard',
          };
        case 'Sunday School Classes':
          return {
            content: value, color: 'small-box bg-yellow',
            href: '/sundayschool/SundaySchoolDashboard', href_string: 'More Info',
            icon: 'fa fa-child',
            id: 'groupStatsSundaySchool',
          };
        case 'Groups':
          return {
            content: value, color: 'small-box bg-red',
            href: '/GroupList', href_string: 'More Info',
            icon: 'fa fa-gg',
            id: 'groupsCountDashboard',
          };
        default:
          return {
            content: value, color: 'small-box bg-yellow',
            href: '/ListEvents', href_string: 'More Info',
            icon: 'fa fa-gg',
            id: '',
          };
      }
    });
    return (
      <div>
        <ContentHeader content="Welcome to Main St. Cathedral" />
        <section className="content">
          <div>
            <Head>
              <title>ChurchCRM: Welcome to Main St. Cathedral</title>
            </Head>
            <SmallBox array={smallbox} />
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
        </section>
      </div>
    );
  }
}

export default Index;
