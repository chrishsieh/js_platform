import * as React from 'react';
import { i18n } from '../../src/i18n';

class SmallBox extends React.Component<any> {
  public static async getInitialProps() {
    return {
      namespacesRequired: ['common'],
    };
  }
  public render() {
    return (
      <div className="row">
        <div className="col-lg-3 col-xs-6">
          {/*<!-- small box Families --> */}
          <div className="small-box bg-aqua">
            <div className="inner">
              <h3 id="familyCountDashboard">18</h3>
              <p>Families</p>
            </div>
            <div className="icon">
              <i className="fa fa-users" />
            </div>
            <a href="/v2/family" className="small-box-footer">
              See all Families
              <i className="fa fa-arrow-circle-right" />
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-xs-6">
          {/*<!-- small box People --> */}
          <div className="small-box bg-green">
            <div className="inner">
              <h3 id="peopleStatsDashboard">92</h3>
              <p>{i18n.t('People')}</p>
            </div>
            <div className="icon">
              <i className="fa fa-user" />
            </div>
            <a href="/SelectList?mode=person" className="small-box-footer">
              See All People
                <i className="fa fa-arrow-circle-right" />
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-xs-6">
          {/*<!-- small box Sunday School Classes --> */}
          <div className="small-box bg-yellow">
            <div className="inner">
              <h3 id="groupStatsSundaySchool">6</h3>
              <p>Sunday School Classes</p>
            </div>
            <div className="icon">
              <i className="fa fa-child" />
            </div>
            <a href="/sundayschool/SundaySchoolDashboard" className="small-box-footer">
              More info
              <i className="fa fa-arrow-circle-right" />
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-xs-6">
          {/*<!-- small box SGroups --> */}
          <div className="small-box bg-red">
            <div className="inner">
              <h3 id="groupsCountDashboard">4</h3>
              <p>Groups</p>
            </div>
            <div className="icon">
              <i className="fa fa-gg" />
            </div>
            <a href="/GroupList" className="small-box-footer">
              More info
              <i className="fa fa-arrow-circle-right" />
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-xs-6">
          {/*<!-- small box Attendees Checked In --> */}
          <div className="small-box bg-yellow">
            <div className="inner">
              <h3>1</h3>
              <p>Attendees Checked In</p>
            </div>
            <div className="icon">
              <i className="fa fa-gg" />
            </div>
            <a href="/ListEvents" className="small-box-footer">
              More info
              <i className="fa fa-arrow-circle-right" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default SmallBox;
