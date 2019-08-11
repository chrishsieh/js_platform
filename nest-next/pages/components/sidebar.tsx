import * as React from 'react';

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
            <select className="form-control multiSearch" />
          </form>

          {/*<!-- sidebar menu: : style can be found in sidebar.less --> */}
          <ul className="sidebar-menu" data-widget="tree">
            {/*<!-- sidebar Dashboard --> */}
            <li>
              <a href="/Menu">
                <i className="fa fa-dashboard" /> <span>Dashboard</span>
              </a>
            </li>
            {/*<!-- sidebar Calendar --> */}
            <li>
              <a href="/v2/calendar">
                <i className="fa fa-calendar" /> <span>Calendar</span>
                <span className="pull-right-container">
                  <small className="label pull-right bg-blue" id="AnniversaryNumber">0</small>
                  <small className="label pull-right bg-red" id="BirthdateNumber">0</small>
                  <small className="label pull-right bg-yellow" id="EventsNumber">3</small>
                </span>
              </a>
            </li>
            {/*<!-- sidebar People --> */}
            <li className="treeview">
              <a href="#">
                <i className="fa fa-users" />
                <span>People</span>
                <i className="fa fa-angle-left pull-right" />
              </a>
              <ul className="treeview-menu">
                <li>
                  <a href="/PeopleDashboard">
                    <i className="fa fa-angle-double-right" />
                    <span>Dashboard</span>
                  </a>
                </li>
                <li>
                  <a href="/PersonEditor">
                    <i className="fa fa-angle-double-right" />
                    <span>Add New Person</span>
                  </a>
                </li>
                <li>
                  <a href="/SelectList">
                    <i className="fa fa-angle-double-right" />
                    <span>View All Persons</span>
                  </a>
                </li>
                <li>
                  <a href="/FamilyEditor">
                    <i className="fa fa-angle-double-right" />
                    <span>Add New Family</span>
                  </a>
                </li>
                <li>
                  <a href="/v2/family">
                    <i className="fa fa-angle-double-right" />
                    <span>View Active Families</span>
                  </a>
                </li>
                <li>
                  <a href="/v2/family">
                    <i className="fa fa-angle-double-right" />
                    <span>View Inactive Families</span>
                  </a>
                </li>
                <li className="treeview ">
                  <a href="#">
                    <i className="fa fa-angle-double-right" />
                    <span>Admin</span>
                    <i className="fa fa-angle-left pull-right" />
                  </a>
                  <ul className="treeview-menu ">
                    <li>
                      <a href="/OptionManager?mode=classes">
                        <i className="fa fa-angle-double-right" />
                        <span>Classifications Manager</span>
                      </a>
                    </li>
                    <li>
                      <a href="/OptionManager?mode=famroles">
                        <i className="fa fa-angle-double-right" />
                        <span>Family Roles</span>
                      </a>
                    </li>
                    <li>
                      <a href="/PropertyList?Type=f">
                        <i className="fa fa-angle-double-right" />
                        <span>Family Properties</span>
                      </a>
                    </li>
                    <li>
                      <a href="/FamilyCustomFieldsEditor">
                        <i className="fa fa-angle-double-right" />
                        <span>Family Custom Fields</span>
                      </a>
                    </li>
                    <li>
                      <a href="/PropertyList?Type=p">
                        <i className="fa fa-angle-double-right" />
                        <span>People Properties</span>
                      </a>
                    </li>
                    <li>
                      <a href="/PersonCustomFieldsEditor">
                        <i className="fa fa-angle-double-right" />
                        <span>Person Custom Fields</span>
                      </a>
                    </li>
                    <li>
                      <a href="/VolunteerOpportunityEditor">
                        <i className="fa fa-angle-double-right" />
                        <span>Volunteer Opportunities</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            {/*<!-- sidebar Groups --> */}
            <li className="treeview">
              <a href="#">
                <i className="fa fa-tag" />
                <span>Groups</span>
                <i className="fa fa-angle-left pull-right" />
              </a>
              <ul className="treeview-menu" style={{ display: 'block' }}>
                <li>
                  <a href="/GroupList">
                    <i className="fa fa-angle-double-right" />
                    <span>List Groups</span>
                  </a>
                </li>
                <li>
                  <a href="/SelectList?mode=groupassign">
                    <i className="fa fa-angle-double-right" />
                    <span>Group Assignment Helper</span>
                  </a>
                </li>
                <li className="treeview ">
                  <a href="#">
                    <i className="fa fa-tag" />
                    <span>Ministry</span>
                    <i className="fa fa-angle-left pull-right" />
                  </a>
                  <ul className="treeview-menu ">
                    <li>
                      <a href="/GroupView?GroupID=10">
                        <i className="fa fa-user" />
                        <span>Worship Service</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="treeview ">
                  <a href="#">
                    <i className="fa fa-tag" />
                    <span>Unassigned</span>
                    <i className="fa fa-angle-left pull-right" />
                  </a>
                  <ul className="treeview-menu ">
                    <li>
                      <a href="/GroupView?GroupID=7">
                        <i className="fa fa-user" />
                        <span>Boys Scouts</span>
                      </a>
                    </li>
                    <li>
                      <a href="/GroupView?GroupID=9">
                        <i className="fa fa-user" />
                        <span>Church Board</span>
                      </a>
                    </li>
                    <li>
                      <a href="/GroupView?GroupID=8">
                        <i className="fa fa-user" />
                        <span>Girl Scouts</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="treeview ">
                  <a href="#">
                    <i className="fa fa-angle-double-right" />
                    <span>Admin</span>
                    <i className="fa fa-angle-left pull-right" />
                  </a>
                  <ul className="treeview-menu ">
                    <li>
                      <a href="/PropertyList?Type=g">
                        <i className="fa fa-angle-double-right" />
                        <span>Group Properties</span>
                      </a>
                    </li>
                    <li>
                      <a href="/OptionManager?mode=grptypes">
                        <i className="fa fa-angle-double-right" />
                        <span>Group Types</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            {/*<!-- sidebar Sunday School --> */}
            <li className="treeview ">
              <a href="#">
                <i className="fa fa-child" />
                <span>Sunday School</span>
                <i className="fa fa-angle-left pull-right" />
              </a>
              <ul className="treeview-menu ">
                <li>
                  <a href="/sundayschool/SundaySchoolDashboard">
                    <i className="fa fa-angle-double-right" />
                    <span>Dashboard</span>
                  </a>
                </li>
                <li className="treeview ">
                  <a href="#">
                    <i className="fa fa-tag" />
                    <span>Classes</span>
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
                        <span>High School Class</span>
                      </a>
                    </li>
                    <li>
                      <a href="/sundayschool/SundaySchoolClassView?groupId=6">
                        <i className="fa fa-user" />
                        <span>Youth Meeting</span>
                      </a>
                    </li>
                  </ul>
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
