import Head from 'next/head';
import { map, merge } from 'ramda';
import * as React from 'react';
import { WithTranslation } from 'react-i18next';
import { i18n } from '../../src/i18n';
import { SmallBoxItem } from '../../src/shared/interface/dashboardlist';
import ContentHeader from '../components/content_header';
import CountTable from '../components/count_table';
import SmallBox from '../components/small_box';

interface InitialProps {
  query: {
    smallBoxs: SmallBoxItem[];
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
}

class PeopleDashBoard extends React.Component<Props & WithTranslation> {
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
        x.NameMarge = i18n.t(x.Name) + ' - ' + i18n.t('Male');
      } else if (x.Gender === 2) {
        x.NameMarge = i18n.t(x.Name) + ' - ' + i18n.t('Female');
      } else {
        x.NameMarge = i18n.t(x.Name) + ' - ' + i18n.t('Unassigned');
      }
      x.link = link;
      return x;
    };
    const RoleGender = merge({
      Title: i18n.t('Family Roles'),
      IconType: 'fa fa-pie-chart',
      TableName: i18n.t('Role / Gender'),
      TableCol_1: '% ' + i18n.t('of People'),
      TableCol_2: i18n.t('Count'),
    })({
      Count: this.props.query.listGender.Count,
      ListGroup: map(NameLink)(map(combyName)(this.props.query.listGender.ListGroup)),
    });
    const inputArray = {
      Title: i18n.t('People Classification'),
      IconType: 'fa fa-bar-chart-o',
      TableName: i18n.t('Classification'),
      TableCol_1: '% ' + i18n.t('of People'),
      TableCol_2: i18n.t('Count'),
      Count: 100,
      ListGroup: [
        { NameMarge: 'Member', Count: '27', link: 'v2/people?inActive=false&Classification=1' },
        { NameMarge: 'Regular Attender', Count: '18', link: 'v2/people?inActive=false&Classification=2' },
        { NameMarge: 'Non-Attender', Count: '5', link: 'v2/people?inActive=false&Classification=5' },
        { NameMarge: 'Guest', Count: '4', link: 'v2/people?inActive=false&Classification=3' },
        { NameMarge: 'Candidate for Membership', Count: '2', link: 'v2/people?inActive=false&Classification=4' },
      ],
    };
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
              <h3 className="box-title">{i18n.t('People Functions')}</h3>
            </div>
            <div className="box-body">
              <a href="/master/v2/people" className="btn btn-app"><i className="fa fa-user" />{i18n.t('All People')}</a>
              <a href="/master/v2/people/verify" className="btn btn-app">
                <i className="fa fa-check-square-o" />{i18n.t('Verify People')}</a>
              <div className="btn-group">
                <a className="btn btn-app" href="mailto:mathew.campbell%40example.com%2Calbert.garcia%40example.com%2Cconstance.hart%40example.com%2Cmarion.sutton%40example.com%2Cherminia.bennett%40example.com%2Cjean.williams%40example.com%2Ctom.gardner%40example.com%2Cisabella.murphy%40example.com%2Channah.dean%40example.com%2Civan.hayes%40example.com%2Cnathan.lewis%40example.com%2Cpaul.robertson%40example.com%2Calvin.stewart%40example.com%2Cjon.olson%40example.com%2Csandra.vasquez%40example.com%2Cbrianna.berry%40example.com%2Csalvador.robertson%40example.com%2Csalvador.steward%40example.com%2Cnorman.cooper%40example.com%2Cjudy.douglas%40example.com%2Cisobel.jimenez%40example.com%2Cjesse.morales%40example.com%2Crandall.riley%40example.com%2Cbernard.shaw%40example.com%2Cbruce.kennedy%40example.com%2Ckatie.hoffman%40example.com%2Ctony.wade%40example.com%2Cvivan.stone%40example.com%2Calicia.wood%40example.com%2Crafael.dixon%40example.com%2Ckenzi.fields%40example.com%2Csherri.gordon%40example.com%2Cleroy.larson%40example.com%2Cnatalie.lynch%40example.com%2Ccharlene.holmes%40example.com%2Cscott.curtis%40example.com%2Ccecil.brooks%40example.com%2Ccharlie.steward%40example.com%2Ctomothy.morris%40example.com%2Clydia.beck%40example.com%2Camanda.black%40example.com%2Clena.walker%40example.com%2Csamantha.duncan%40example.com%2Cserenity.banks%40example.com%2Cnatalie.diaz%40example.com%2Crhonda.mcdonalid%40example.com%2Ckurt.hernandez%40example.com%2Clorraine.craig%40example.com%2Cdarren.freeman%40example.com%2Cedwin.adams%40example.com%2Cbradley.spencer%40example.com%2Ccarrie.knight%40example.com">
                  <i className="fa fa-send-o" />{i18n.t('Email All')}</a>
                <button type="button" className="btn btn-app dropdown-toggle" data-toggle="dropdown">
                  <span className="caret" />
                  <span className="sr-only">{i18n.t('Toggle Dropdown')}</span>
                </button>
                <ul className="dropdown-menu" role="menu">
                  <li> <a href="mailto:mathew.campbell%40example.com%2Calbert.garcia%40example.com%2Cconstance.hart%40example.com%2Cmarion.sutton%40example.com%2Cherminia.bennett%40example.com%2Cjean.williams%40example.com%2Ctom.gardner%40example.com%2Cisabella.murphy%40example.com%2Channah.dean%40example.com%2Civan.hayes%40example.com%2Cnathan.lewis%40example.com%2Cpaul.robertson%40example.com%2Calvin.stewart%40example.com%2Cjon.olson%40example.com%2Csandra.vasquez%40example.com%2Cbrianna.berry%40example.com%2Csalvador.robertson%40example.com%2Csalvador.steward%40example.com%2Cnorman.cooper%40example.com%2Cjudy.douglas%40example.com%2Cisobel.jimenez%40example.com%2Cjesse.morales%40example.com%2Crandall.riley%40example.com%2Cbernard.shaw%40example.com%2Cbruce.kennedy%40example.com%2Ckatie.hoffman%40example.com">Member</a></li>
                  <li> <a href="mailto:tony.wade%40example.com%2Cvivan.stone%40example.com%2Calicia.wood%40example.com%2Crafael.dixon%40example.com%2Ckenzi.fields%40example.com%2Csherri.gordon%40example.com%2Cleroy.larson%40example.com%2Cnatalie.lynch%40example.com%2Ccharlene.holmes%40example.com%2Cscott.curtis%40example.com%2Ccecil.brooks%40example.com%2Ccharlie.steward%40example.com%2Ctomothy.morris%40example.com%2Clydia.beck%40example.com%2Camanda.black%40example.com%2Clena.walker%40example.com%2Csamantha.duncan%40example.com%2Cserenity.banks%40example.com">Regular Attender</a></li>
                  <li> <a href="mailto:natalie.diaz%40example.com%2Crhonda.mcdonalid%40example.com%2Ckurt.hernandez%40example.com%2Clorraine.craig%40example.com">Guest</a></li>
                  <li> <a href="mailto:darren.freeman%40example.com%2Cedwin.adams%40example.com%2Cbradley.spencer%40example.com%2Ccarrie.knight%40example.com">Non-Attender</a></li>
                </ul>
              </div>
              <div className="btn-group">
                <a className="btn btn-app" href="mailto:?bcc=mathew.campbell%40example.com%2Calbert.garcia%40example.com%2Cconstance.hart%40example.com%2Cmarion.sutton%40example.com%2Cherminia.bennett%40example.com%2Cjean.williams%40example.com%2Ctom.gardner%40example.com%2Cisabella.murphy%40example.com%2Channah.dean%40example.com%2Civan.hayes%40example.com%2Cnathan.lewis%40example.com%2Cpaul.robertson%40example.com%2Calvin.stewart%40example.com%2Cjon.olson%40example.com%2Csandra.vasquez%40example.com%2Cbrianna.berry%40example.com%2Csalvador.robertson%40example.com%2Csalvador.steward%40example.com%2Cnorman.cooper%40example.com%2Cjudy.douglas%40example.com%2Cisobel.jimenez%40example.com%2Cjesse.morales%40example.com%2Crandall.riley%40example.com%2Cbernard.shaw%40example.com%2Cbruce.kennedy%40example.com%2Ckatie.hoffman%40example.com%2Ctony.wade%40example.com%2Cvivan.stone%40example.com%2Calicia.wood%40example.com%2Crafael.dixon%40example.com%2Ckenzi.fields%40example.com%2Csherri.gordon%40example.com%2Cleroy.larson%40example.com%2Cnatalie.lynch%40example.com%2Ccharlene.holmes%40example.com%2Cscott.curtis%40example.com%2Ccecil.brooks%40example.com%2Ccharlie.steward%40example.com%2Ctomothy.morris%40example.com%2Clydia.beck%40example.com%2Camanda.black%40example.com%2Clena.walker%40example.com%2Csamantha.duncan%40example.com%2Cserenity.banks%40example.com%2Cnatalie.diaz%40example.com%2Crhonda.mcdonalid%40example.com%2Ckurt.hernandez%40example.com%2Clorraine.craig%40example.com%2Cdarren.freeman%40example.com%2Cedwin.adams%40example.com%2Cbradley.spencer%40example.com%2Ccarrie.knight%40example.com">
                  <i className="fa fa-send" />{i18n.t('Email All (BCC)')}</a>
                <button type="button" className="btn btn-app dropdown-toggle" data-toggle="dropdown">
                  <span className="caret" />
                  <span className="sr-only">{i18n.t('Toggle Dropdown')}</span>
                </button>
                <ul className="dropdown-menu" role="menu">
                  <li> <a href="mailto:?bcc=mathew.campbell%40example.com%2Calbert.garcia%40example.com%2Cconstance.hart%40example.com%2Cmarion.sutton%40example.com%2Cherminia.bennett%40example.com%2Cjean.williams%40example.com%2Ctom.gardner%40example.com%2Cisabella.murphy%40example.com%2Channah.dean%40example.com%2Civan.hayes%40example.com%2Cnathan.lewis%40example.com%2Cpaul.robertson%40example.com%2Calvin.stewart%40example.com%2Cjon.olson%40example.com%2Csandra.vasquez%40example.com%2Cbrianna.berry%40example.com%2Csalvador.robertson%40example.com%2Csalvador.steward%40example.com%2Cnorman.cooper%40example.com%2Cjudy.douglas%40example.com%2Cisobel.jimenez%40example.com%2Cjesse.morales%40example.com%2Crandall.riley%40example.com%2Cbernard.shaw%40example.com%2Cbruce.kennedy%40example.com%2Ckatie.hoffman%40example.com">Member</a></li>
                  <li> <a href="mailto:?bcc=tony.wade%40example.com%2Cvivan.stone%40example.com%2Calicia.wood%40example.com%2Crafael.dixon%40example.com%2Ckenzi.fields%40example.com%2Csherri.gordon%40example.com%2Cleroy.larson%40example.com%2Cnatalie.lynch%40example.com%2Ccharlene.holmes%40example.com%2Cscott.curtis%40example.com%2Ccecil.brooks%40example.com%2Ccharlie.steward%40example.com%2Ctomothy.morris%40example.com%2Clydia.beck%40example.com%2Camanda.black%40example.com%2Clena.walker%40example.com%2Csamantha.duncan%40example.com%2Cserenity.banks%40example.com">Regular Attender</a></li>
                  <li> <a href="mailto:?bcc=natalie.diaz%40example.com%2Crhonda.mcdonalid%40example.com%2Ckurt.hernandez%40example.com%2Clorraine.craig%40example.com">Guest</a></li>
                  <li> <a href="mailto:?bcc=darren.freeman%40example.com%2Cedwin.adams%40example.com%2Cbradley.spencer%40example.com%2Ccarrie.knight%40example.com">Non-Attender</a></li>
                </ul>
              </div>
              <br />
              <a href="/master/v2/family" className="btn btn-app"><i className="fa fa-users" />{i18n.t('All Families')}</a>
              <a href="GeoPage.php" className="btn btn-app"><i className="fa fa-globe" />{i18n.t('Family Geographic')}</a>
              < a href="MapUsingGoogle.php?GroupID=-1" className="btn btn-app" >
                <i className="fa fa-map" />{i18n.t('Family Map')}</a>
              < a href="UpdateAllLatLon.php" className="btn btn-app" >
                <i className="fa fa-map-pin" />{i18n.t('Update All Family Coordinates')}</a>
            </div>
          </div>
          <SmallBox array={smallbox} />
          <div className="row">
            <div className="col-lg-6">
              <div className="box box-info">
                <div className="box-header with-border">
                  <h3 className="box-title">Reports</h3>
                  <div className="box-tools pull-right">
                    <button type="button" className="btn btn-box-tool" data-widget="collapse">
                      <i className="fa fa-minus" />
                    </button>
                    <button type="button" className="btn btn-box-tool" data-widget="remove">
                      <i className="fa fa-times" />
                    </button>
                  </div>
                </div>
                <div className="box-body">
                  <p>
                    <a className="MediumText" href="members/self-register.php">Self Register Reports</a>
                    <br />
                    List families that were created via self registration.
                    </p>
                  <p>
                    <a className="MediumText" href="GroupReports.php">Reports on groups and roles</a>
                    <br />
                    Report on group and roles selected (it may be a multi-page PDF).
                    </p>
                  <p><a className="MediumText" href="DirectoryReports.php">People Directory</a>
                    <br />
                    Printable directory of all people, grouped by family where assigned
                    </p>
                  <p>
                    <a className="MediumText" href="LettersAndLabels.php">Letters and Mailing Labels</a>
                    <br />
                    Generate letters and mailing labels.
                    </p>
                  <p>
                    <a className="MediumText" href="USISTAddressVerification.php">US Address Verification Report</a>
                    <br />
                    Generate report comparing all US family addresses with United States
                    Postal Service Standard Address Format.
                        <br />
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <CountTable {...inputArray} />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <CountTable {...RoleGender} />
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
