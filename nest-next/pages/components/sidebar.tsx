import * as React from 'react';
import { i18n } from '../../src/i18n';

class Sidebar extends React.Component<any> {
  public static async getInitialProps() {
    return {
      namespacesRequired: ['common'],
    };
  }
  public render() {
    return (
      <aside className="main-sidebar">
        {/*<!-- Left side column. contains the sidebar -->*/}
        <section className="sidebar">
          {/*<!-- search form -->*/}
          <form action="#" method="get" className="sidebar-form">
            <select
              className="form-control multiSearch select2-hidden-accessible"
              data-select2-id="1"
              tabIndex={-1}
              aria-hidden="true"
            />
            <span
              className="select2 select2-container select2-container--default"
              dir="ltr"
              data-select2-id="2"
              style={{ width: '208px' }}
            />
            <span className="selection">
              <span
                className="select2-selection select2-selection--single"
                role="combobox"
                aria-haspopup="true"
                aria-expanded="false"
                tabIndex={0}
                aria-labelledby="select2-ge7c-container"
              />
              <span
                className="select2-selection__rendered"
                id="select2-ge7c-container"
                role="textbox"
                aria-readonly="true"
              />
              <span
                className="select2-selection__arrow"
                role="presentation"
              />
              <b role="presentation" />
            </span>
            <span
              className="dropdown-wrapper"
              aria-hidden="true"
            />
          </form >

          {/*<!-- sidebar menu: : style can be found in sidebar.less --> */}
          < ul className="sidebar-menu" data-widget="tree" >
            {/*<!-- sidebar Dashboard --> */}
            < li >
              <a href="/Menu">
                <i className="fa fa-dashboard" /> <span>{i18n.t('Dashboard')}</span>
              </a>
            </li >
            {/*<!-- sidebar Calendar --> */}
            < li >
              <a href="/v2/calendar">
                <i className="fa fa-calendar" /> <span>{i18n.t('Calendar')}</span>
                <span className="pull-right-container">
                  <small className="label pull-right bg-blue" id="AnniversaryNumber">0</small>
                  <small className="label pull-right bg-red" id="BirthdateNumber">0</small>
                  <small className="label pull-right bg-yellow" id="EventsNumber">3</small>
                </span>
              </a>
            </li >
            {/*<!-- sidebar People --> */}
            < li className="treeview" >
              <a href="#">
                <i className="fa fa-users" />
                <span>{i18n.t('People')}</span>
                <i className="fa fa-angle-left pull-right" />
              </a>
              <ul className="treeview-menu">
                <li>
                  <a href="/PeopleDashboard">
                    <i className="fa fa-angle-double-right" />
                    <span>{i18n.t('Dashboard')}</span>
                  </a>
                </li>
                <li>
                  <a href="/PersonEditor">
                    <i className="fa fa-angle-double-right" />
                    <span>{i18n.t('Add New Person')}</span>
                  </a>
                </li>
                <li>
                  <a href="/SelectList">
                    <i className="fa fa-angle-double-right" />
                    <span>{i18n.t('View All Persons')}</span>
                  </a>
                </li>
                <li>
                  <a href="/FamilyEditor">
                    <i className="fa fa-angle-double-right" />
                    <span>{i18n.t('Add New Family')}</span>
                  </a>
                </li>
                <li>
                  <a href="/v2/family">
                    <i className="fa fa-angle-double-right" />
                    <span>{i18n.t('View Active Families')}</span>
                  </a>
                </li>
                <li>
                  <a href="/v2/family">
                    <i className="fa fa-angle-double-right" />
                    <span>{i18n.t('View Inactive Families')}</span>
                  </a>
                </li>
                <li className="treeview ">
                  <a href="#">
                    <i className="fa fa-angle-double-right" />
                    <span>{i18n.t('Admin')}</span>
                    <i className="fa fa-angle-left pull-right" />
                  </a>
                  <ul className="treeview-menu ">
                    <li>
                      <a href="/OptionManager?mode=classes">
                        <i className="fa fa-angle-double-right" />
                        <span>{i18n.t('Classifications Manager')}</span>
                      </a>
                    </li>
                    <li>
                      <a href="/OptionManager?mode=famroles">
                        <i className="fa fa-angle-double-right" />
                        <span>{i18n.t('Family Roles')}</span>
                      </a>
                    </li>
                    <li>
                      <a href="/PropertyList?Type=f">
                        <i className="fa fa-angle-double-right" />
                        <span>{i18n.t('Family Properties')}</span>
                      </a>
                    </li>
                    <li>
                      <a href="/FamilyCustomFieldsEditor">
                        <i className="fa fa-angle-double-right" />
                        <span>{i18n.t('Family Custom Fields')}</span>
                      </a>
                    </li>
                    <li>
                      <a href="/PropertyList?Type=p">
                        <i className="fa fa-angle-double-right" />
                        <span>{i18n.t('People Properties')}</span>
                      </a>
                    </li>
                    <li>
                      <a href="/PersonCustomFieldsEditor">
                        <i className="fa fa-angle-double-right" />
                        <span>{i18n.t('Person Custom Fields')}</span>
                      </a>
                    </li>
                    <li>
                      <a href="/VolunteerOpportunityEditor">
                        <i className="fa fa-angle-double-right" />
                        <span>{i18n.t('Volunteer Opportunities')}</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li >
            {/*<!-- sidebar Groups --> */}
            < li className="treeview" >
              <a href="#">
                <i className="fa fa-tag" />
                <span>{i18n.t('Groups')}</span>
                <i className="fa fa-angle-left pull-right" />
              </a>
              <ul className="treeview-menu" style={{ display: 'block' }}>
                <li>
                  <a href="/GroupList">
                    <i className="fa fa-angle-double-right" />
                    <span>{i18n.t('List Groups')}</span>
                  </a>
                </li>
                <li>
                  <a href="/SelectList?mode=groupassign">
                    <i className="fa fa-angle-double-right" />
                    <span>{i18n.t('Group Assignment Helper')}</span>
                  </a>
                </li>
                <li className="treeview ">
                  <a href="#">
                    <i className="fa fa-tag" />
                    <span>{i18n.t('Ministry')}</span>
                    <i className="fa fa-angle-left pull-right" />
                  </a>
                  <ul className="treeview-menu ">
                    <li>
                      <a href="/GroupView?GroupID=10">
                        <i className="fa fa-user" />
                        <span>{i18n.t('Worship Service')}</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="treeview ">
                  <a href="#">
                    <i className="fa fa-tag" />
                    <span>{i18n.t('Unassigned')}</span>
                    <i className="fa fa-angle-left pull-right" />
                  </a>
                  <ul className="treeview-menu ">
                    <li>
                      <a href="/GroupView?GroupID=7">
                        <i className="fa fa-user" />
                        <span>{i18n.t('Boys Scouts')}</span>
                      </a>
                    </li>
                    <li>
                      <a href="/GroupView?GroupID=9">
                        <i className="fa fa-user" />
                        <span>{i18n.t('Church Board')}</span>
                      </a>
                    </li>
                    <li>
                      <a href="/GroupView?GroupID=8">
                        <i className="fa fa-user" />
                        <span>{i18n.t('Girl Scouts')}</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="treeview ">
                  <a href="#">
                    <i className="fa fa-angle-double-right" />
                    <span>{i18n.t('Admin')}</span>
                    <i className="fa fa-angle-left pull-right" />
                  </a>
                  <ul className="treeview-menu ">
                    <li>
                      <a href="/PropertyList?Type=g">
                        <i className="fa fa-angle-double-right" />
                        <span>{i18n.t('Group Properties')}</span>
                      </a>
                    </li>
                    <li>
                      <a href="/OptionManager?mode=grptypes">
                        <i className="fa fa-angle-double-right" />
                        <span>{i18n.t('Group Types')}</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li >
            {/*<!-- sidebar Sunday School --> */}
            < li className="treeview " >
              <a href="#">
                <i className="fa fa-child" />
                <span>{i18n.t('Sunday School')}</span>
                <i className="fa fa-angle-left pull-right" />
              </a>
              <ul className="treeview-menu ">
                <li>
                  <a href="/sundayschool/SundaySchoolDashboard">
                    <i className="fa fa-angle-double-right" />
                    <span>{i18n.t('Dashboard')}</span>
                  </a>
                </li>
                <li className="treeview ">
                  <a href="#">
                    <i className="fa fa-tag" />
                    <span>{i18n.t('Classes')}</span>
                    <i className="fa fa-angle-left pull-right" />
                  </a>
                  <ul className="treeview-menu ">
                    <li>
                      <a href="/sundayschool/SundaySchoolClassView?groupId=1">
                        <i className="fa fa-user" />
                        <span>Angels class</span>
                      </a>
                    </li>
                    <li>
                      <a href="/sundayschool/SundaySchoolClassView?groupId=2">
                        <i className="fa fa-user" />
                        <span>Class 1-3</span>
                      </a>
                    </li>
                    <li>
                      <a href="/sundayschool/SundaySchoolClassView?groupId=3">
                        <i className="fa fa-user" />
                        <span>Class 4-5</span>
                      </a>
                    </li>
                    <li>
                      <a href="/sundayschool/SundaySchoolClassView?groupId=4">
                        <i className="fa fa-user" />
                        <span>Class 6-7</span>
                      </a>
                    </li>
                    <li>
                      <a href="sundayschool/SundaySchoolClassView?groupId=5">
                        <i className="fa fa-user" />
                        <span>{i18n.t('High School Class')}</span>
                      </a>
                    </li>
                    <li>
                      <a href="/sundayschool/SundaySchoolClassView?groupId=6">
                        <i className="fa fa-user" />
                        <span>{i18n.t('Youth Meeting')}</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li >
            {/*<!-- sidebar Email --> */}
            < li >
              <a href="/v2/email/dashboard">
                <i className="fa fa-envelope" />
                <span>{i18n.t('Email')}</span>
              </a>
            </li >
            {/*<!-- sidebar Events --> */}
            < li className="treeview " >
              <a href="#">
                <i className="fa fa-ticket" />
                <span>{i18n.t('Events')}</span>
                <i className="fa fa-angle-left pull-right" />
              </a>
              <ul className="treeview-menu ">
                <li>
                  <a href="/EventEditor">
                    <i className="fa fa-angle-double-right" />
                    <span>{i18n.t('Add Church Event')}</span>
                  </a>
                </li>
                <li>
                  <a href="/ListEvents">
                    <i className="fa fa-angle-double-right" />
                    <span>{i18n.t('List Church Events')}</span>
                  </a>
                </li>
                <li>
                  <a href="/EventNames">
                    <i className="fa fa-angle-double-right" />
                    <span>{i18n.t('List Event Types')}</span>
                  </a>
                </li>
                <li>
                  <a href="/Checkin">
                    <i className="fa fa-angle-double-right" />
                    <span>{i18n.t('Check-in and Check-out')}</span>
                  </a>
                </li>
                <li>
                  <a href="/EventAttendance">
                    <i className="fa fa-angle-double-right" />
                    <span>{i18n.t('Event Attendance Reports')}</span>
                  </a>
                </li>
              </ul>
            </li >
            {/*<!-- sidebar Deposit --> */}
            <li className="treeview ">
              <a href="#">
                <i className="fa fa-bank" />
                <span>{i18n.t('Deposit')}
                  <span className="pull-right-container">
                    <small className="label bg-green pull-right" id="iCurrentDeposit">0</small>
                  </span>
                </span>
              </a>
              <ul className="treeview-menu ">
                <li>
                  <a href="/FindDepositSlip">
                    <i className="fa fa-angle-double-right" />
                    <span>{i18n.t('View All Deposits')}</span>
                  </a>
                </li>
                <li>
                  <a href="/FinancialReports">
                    <i className="fa fa-angle-double-right" />
                    <span>{i18n.t('Deposit Reports')}</span>
                  </a>
                </li>
                <li>
                  <a href="/DepositSlipEditor?DepositSlipID=0">
                    <i className="fa fa-angle-double-right" />
                    <span>{i18n.t('Edit Deposit Slip')}</span>
                  </a>
                </li>
                <li className="treeview ">
                  <a href="#">
                    <i className="fa fa-angle-double-right" />
                    <span>{i18n.t('Admin')}</span>
                    <i className="fa fa-angle-left pull-right" />
                  </a>
                  <ul className="treeview-menu ">
                    <li>
                      <a href="/ManageEnvelopes">
                        <i className="fa fa-angle-double-right" />
                        <span>{i18n.t('Envelope Manager')}</span>
                      </a>
                    </li>
                    <li>
                      <a href="/DonationFundEditor">
                        <i className="fa fa-angle-double-right" />
                        <span>{i18n.t('Donation Funds')}</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            {/*<!-- sidebar Fundraiser --> */}
            <li className="treeview ">
              <a href="#">
                <i className="fa fa-money" />
                <span>{i18n.t('Fundraiser')}<span className="pull-right-container">
                  <small className="label pull-right bg-blue" id="iCurrentFundraiser">0</small>
                </span>
                </span>
              </a>
              <ul className="treeview-menu ">
                <li>
                  <a href="/FundRaiserEditor?FundRaiserID=-1">
                    <i className="fa fa-angle-double-right" />
                    <span>{i18n.t('Create New Fundraiser')}</span>
                  </a>
                </li>
                <li>
                  <a href="/FindFundRaiser">
                    <i className="fa fa-angle-double-right" />
                    <span>{i18n.t('View All Fundraisers')}</span>
                  </a>
                </li>
                <li>
                  <a href="/FundRaiserEditor">
                    <i className="fa fa-angle-double-right" />
                    <span>{i18n.t('Edit Fundraiser')}</span>
                  </a>
                </li>
                <li>
                  <a href="/AddDonors">
                    <i className="fa fa-angle-double-right" />
                    <span>{i18n.t('Add Donors to Buyer List')}</span>
                  </a>
                </li>
                <li>
                  <a href="/PaddleNumList">
                    <i className="fa fa-angle-double-right" />
                    <span>{i18n.t('View Buyers')}</span>
                  </a>
                </li>
              </ul>
            </li>
            {/*<!-- sidebar Data/Reports --> */}
            <li className="treeview ">
              <a href="#">
                <i className="fa fa-file-pdf-o" />
                <span>{i18n.t('Data/Reports')}</span>
                <i className="fa fa-angle-left pull-right" />
              </a>
              <ul className="treeview-menu ">
                <li>
                  <a href="/CanvassAutomation">
                    <i className="fa fa-angle-double-right" />
                    <span>{i18n.t('Canvass Automation')}</span>
                  </a>
                </li>
                <li>
                  <a href="/QueryList">
                    <i className="fa fa-angle-double-right" />
                    <span>{i18n.t('Query Menu')}</span>
                  </a>
                </li>
              </ul>
            </li>
            {/*<!-- sidebar Admin --> */}
            <li className="treeview ">
              <a href="#">
                <i className="fa fa-gears" />
                <span>{i18n.t('Admin')}</span>
                <i className="fa fa-angle-left pull-right" />
              </a>
              <ul className="treeview-menu ">
                <li>
                  <a href="/SystemSettings">
                    <i className="fa fa-angle-double-right" />
                    <span>{i18n.t('Edit General Settings')}</span>
                  </a>
                </li>
                <li>
                  <a href="/UserList">
                    <i className="fa fa-angle-double-right" />
                    <span>{i18n.t('System Users')}</span>
                  </a>
                </li>
                <li>
                  <a href="/PropertyTypeList">
                    <i className="fa fa-angle-double-right" />
                    <span>{i18n.t('Property Types')}</span>
                  </a>
                </li>
                <li>
                  <a href="/RestoreDatabase">
                    <i className="fa fa-angle-double-right" />
                    <span>{i18n.t('Restore Database')}</span>
                  </a>
                </li>
                <li>
                  <a href="/BackupDatabase">
                    <i className="fa fa-angle-double-right" />
                    <span>{i18n.t('Backup Database')}</span>
                  </a>
                </li>
                <li>
                  <a href="/CSVImport">
                    <i className="fa fa-angle-double-right" />
                    <span>{i18n.t('CSV Import')}</span>
                  </a>
                </li>
                <li>
                  <a href="/CSVExport">
                    <i className="fa fa-angle-double-right" />
                    <span>{i18n.t('CSV Export Records')}</span>
                  </a>
                </li>
                <li>
                  <a href="/KioskManager">
                    <i className="fa fa-angle-double-right" />
                    <span>{i18n.t('Kiosk Manager')}</span>
                  </a>
                </li>
                <li>
                  <a href="/v2/admin/debug">
                    <i className="fa fa-angle-double-right" />
                    <span>{i18n.t('Debug')}</span>
                  </a>
                </li>
                <li>
                  <a href="/v2/admin/menus">
                    <i className="fa fa-angle-double-right" />
                    <span>{i18n.t('Custom Menus')}</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul >
        </section >
      </aside >
    );
  }
}
export default Sidebar;
