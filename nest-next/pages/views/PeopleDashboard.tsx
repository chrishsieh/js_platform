import Head from 'next/head';
import { map, merge } from 'ramda';
import * as React from 'react';
import { WithTranslation } from 'react-i18next';
import { i18n } from '../../src/i18n';
import { SmallBoxItem } from '../../src/shared/interface/dashboardlist';
import ContentHeader from '../components/content_header';
import CountTable from '../components/count_table';
import PeopleFun from '../components/people_fun';
import SmallBox from '../components/small_box';
import PeopleReport from '../components/people_report';

interface InitialProps {
  query: {
    smallBoxs: SmallBoxItem[];
    listGender: any;
    AdultsGenderCount: number;
    KidsGenderCount: number;
    AgeCountGroup: number;
  };
}

interface Props {
  query: {
    smallBoxs: SmallBoxItem[];
    listGender: any;
    AdultsGenderCount: number;
    KidsGenderCount: number;
    AgeCountGroup: number;
  };
  namespacesRequired: string[];
  smallbox: any;
  RoleGender: any;
  inputArray: any;
}

class PeopleDashBoard extends React.Component<Props & WithTranslation> {
  public static getInitialProps({ query }: InitialProps) {
    const smallbox = query.smallBoxs.map((value) => {
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
            href: '/', href_string: 'More Info',
            icon: 'fa fa-gg',
            id: '',
          };
      }
    });
    const combyName = (x: any) => {
      if (x.Name === null) {
        x.Name = 'Unassigned';
      }
      return x;
    };
    const NameLink = (x: any) => {
      const link = `v2/people?Gender=` + x.Gender + `&FamilyRole=` + x.ID;
      if (x.Gender === 1) {
        x.Name = x.Name + ' - Male';
      } else if (x.Gender === 2) {
        x.Name = x.Name + ' - Female';
      } else {
        x.Name = x.Name + ' - Unassigned';
      }
      x.link = link;
      return x;
    };
    const RoleGender = merge({
      Title: 'Family Roles',
      IconType: 'fa fa-pie-chart',
      TableName: 'Role / Gender',
      TableCol_1: '% of People',
      TableCol_2: 'Count',
    })({
      Count: query.listGender.Count,
      ListGroup: map(NameLink)(map(combyName)(query.listGender.ListGroup)),
    });
    const inputArray = {
      Title: 'People Classification',
      IconType: 'fa fa-bar-chart-o',
      TableName: 'Classification',
      TableCol_1: '% of People',
      TableCol_2: 'Count',
      Count: 100,
      ListGroup: [
        { Name: 'Member', Count: '27', link: 'v2/people?inActive=false&Classification=1' },
        { Name: 'Regular Attender', Count: '18', link: 'v2/people?inActive=false&Classification=2' },
        { Name: 'Non-Attender', Count: '5', link: 'v2/people?inActive=false&Classification=5' },
        { Name: 'Guest', Count: '4', link: 'v2/people?inActive=false&Classification=3' },
        { Name: 'Candidate for Membership', Count: '2', link: 'v2/people?inActive=false&Classification=4' },
      ],
    };
    return { query, namespacesRequired: ['common'], smallbox, RoleGender, inputArray };
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
          <PeopleFun />
          <SmallBox array={this.props.smallbox} />
          <div className="row">
            <div className="col-lg-6">
              <PeopleReport />
            </div>
            <div className="col-lg-6">
              <CountTable {...this.props.inputArray} />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <CountTable {...this.props.RoleGender} />
            </div>
            <div className="col-lg-6">
              <div className="box box-info">
                <div className="box-header">
                  <i className="fa fa-pie-chart" />
                  <h3 className="box-title">{i18n.t('Gender Demographics')}</h3>
                  <div className="box-tools pull-right">
                    <div id="gender-donut-legend" className="chart-legend" />
                  </div>
                </div>
                {/*<!-- /.box-header -->*/}
                <div className="box-body">
                  <canvas id="gender-donut" style={{ height: '393px', width: '787px' }} height="393" width="787" />
                </div>
              </div>
              <div className="box box-info">
                <div className="box-header">
                  <i className="fa fa-birthday-cake" />
                  <h3 className="box-title">{i18n.t('Age Histogram')}</h3>
                  <div className="box-tools pull-right">
                    <div id="age-stats-bar-legend" className="chart-legend" />
                  </div>
                </div>
                {/*<!-- /.box-header -->*/}
                <div className="box-body">
                  <canvas id="age-stats-bar" style={{ height: '150px', width: '300px' }} height="150" width="300" />
                </div>
              </div>
            </div>
          </div>
        </section >
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.js" />
        <script src="/static/js/peopledashboard.js" />
      </div >
    );
  }
}

export default PeopleDashBoard;
