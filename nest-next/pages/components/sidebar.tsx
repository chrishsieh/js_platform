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
            <li>
              <a href="/Menu">
                <i className="fa fa-dashboard" /> <span>Dashboard</span>
              </a>
            </li>
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
                    <span>
                      Dashboard                                    </span>
                  </a>
                </li>
                <li>
                  <a href="/PersonEditor">
                    <i className="fa fa-angle-double-right" />
                    <span>
                      Add New Person                                    </span>
                  </a>
                </li>
                <li>
                  <a href="/SelectList">
                    <i className="fa fa-angle-double-right" />
                    <span>
                      View All Persons                                    </span>
                  </a>
                </li>
                <li>
                  <a href="/FamilyEditor">
                    <i className="fa fa-angle-double-right" />
                    <span>
                      Add New Family                                    </span>
                  </a>
                </li>
                <li>
                  <a href="/v2/family">
                    <i className="fa fa-angle-double-right" />
                    <span>
                      View Active Families                                    </span>
                  </a>
                </li>
                <li>
                  <a href="/v2/family">
                    <i className="fa fa-angle-double-right" />
                    <span>
                      View Inactive Families                                    </span>
                  </a>
                </li>
                <li className="treeview ">
                  <a href="#">
                    <i className="fa fa-angle-double-right" />
                    <span>
                      Admin                                    </span>
                    <i className="fa fa-angle-left pull-right" />
                  </a>
                  <ul className="treeview-menu ">
                    <li>
                      <a href="/OptionManager?mode=classes">
                        <i className="fa fa-angle-double-right" />
                        <span>
                          Classifications Manager                                    </span>
                      </a>
                    </li>
                    <li>
                      <a href="/OptionManager?mode=famroles">
                        <i className="fa fa-angle-double-right" />
                        <span>
                          Family Roles                                    </span>
                      </a>
                    </li>
                    <li>
                      <a href="/PropertyList?Type=f">
                        <i className="fa fa-angle-double-right" />
                        <span>
                          Family Properties                                    </span>
                      </a>
                    </li>
                    <li>
                      <a href="/FamilyCustomFieldsEditor">
                        <i className="fa fa-angle-double-right" />
                        <span>
                          Family Custom Fields                                    </span>
                      </a>
                    </li>
                    <li>
                      <a href="/PropertyList?Type=p">
                        <i className="fa fa-angle-double-right" />
                        <span>
                          People Properties                                    </span>
                      </a>
                    </li>
                    <li>
                      <a href="/PersonCustomFieldsEditor">
                        <i className="fa fa-angle-double-right" />
                        <span>
                          Person Custom Fields                                    </span>
                      </a>
                    </li>
                    <li>
                      <a href="/VolunteerOpportunityEditor">
                        <i className="fa fa-angle-double-right" />
                        <span>
                          Volunteer Opportunities                                    </span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="sidebar-menu">
            <li>
              <a href="pages/widgets.html">
                <i className="fa fa-th" /> <span>Widgets</span>{' '}
                <small className="label pull-right bg-green">new</small>
              </a>
            </li>
            <li className="treeview">
              <a href="#">
                <i className="fa fa-pie-chart" />
                <span>Charts</span>
                <i className="fa fa-angle-left pull-right" />
              </a>
              <ul className="treeview-menu">
                <li>
                  <a href="pages/charts/chartjs.html">
                    <i className="fa fa-circle-o" /> ChartJS
                  </a>
                </li>
                <li>
                  <a href="pages/charts/morris.html">
                    <i className="fa fa-circle-o" /> Morris
                  </a>
                </li>
                <li>
                  <a href="pages/charts/flot.html">
                    <i className="fa fa-circle-o" /> Flot
                  </a>
                </li>
                <li>
                  <a href="pages/charts/inline.html">
                    <i className="fa fa-circle-o" /> Inline charts
                  </a>
                </li>
              </ul>
            </li>
            <li className="treeview">
              <a href="#">
                <i className="fa fa-laptop" />
                <span>UI Elements</span>
                <i className="fa fa-angle-left pull-right" />
              </a>
              <ul className="treeview-menu">
                <li>
                  <a href="pages/UI/general.html">
                    <i className="fa fa-circle-o" /> General
                  </a>
                </li>
                <li>
                  <a href="pages/UI/icons.html">
                    <i className="fa fa-circle-o" /> Icons
                  </a>
                </li>
                <li>
                  <a href="pages/UI/buttons.html">
                    <i className="fa fa-circle-o" /> Buttons
                  </a>
                </li>
                <li>
                  <a href="pages/UI/sliders.html">
                    <i className="fa fa-circle-o" /> Sliders
                  </a>
                </li>
                <li>
                  <a href="pages/UI/timeline.html">
                    <i className="fa fa-circle-o" /> Timeline
                  </a>
                </li>
                <li>
                  <a href="pages/UI/modals.html">
                    <i className="fa fa-circle-o" /> Modals
                  </a>
                </li>
              </ul>
            </li>
            <li className="treeview">
              <a href="#">
                <i className="fa fa-edit" /> <span>Forms</span>
                <i className="fa fa-angle-left pull-right" />
              </a>
              <ul className="treeview-menu">
                <li>
                  <a href="pages/forms/general.html">
                    <i className="fa fa-circle-o" /> General Elements
                  </a>
                </li>
                <li>
                  <a href="pages/forms/advanced.html">
                    <i className="fa fa-circle-o" /> Advanced Elements
                  </a>
                </li>
                <li>
                  <a href="pages/forms/editors.html">
                    <i className="fa fa-circle-o" /> Editors
                  </a>
                </li>
              </ul>
            </li>
            <li className="treeview">
              <a href="#">
                <i className="fa fa-table" /> <span>Tables</span>
                <i className="fa fa-angle-left pull-right" />
              </a>
              <ul className="treeview-menu">
                <li>
                  <a href="pages/tables/simple.html">
                    <i className="fa fa-circle-o" /> Simple tables
                  </a>
                </li>
                <li>
                  <a href="pages/tables/data.html">
                    <i className="fa fa-circle-o" /> Data tables
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="pages/calendar.html">
                <i className="fa fa-calendar" /> <span>Calendar</span>
                <small className="label pull-right bg-red">3</small>
              </a>
            </li>
            <li>
              <a href="pages/mailbox/mailbox.html">
                <i className="fa fa-envelope" /> <span>Mailbox</span>
                <small className="label pull-right bg-yellow">12</small>
              </a>
            </li>
            <li className="treeview">
              <a href="#">
                <i className="fa fa-folder" /> <span>Examples</span>
                <i className="fa fa-angle-left pull-right" />
              </a>
              <ul className="treeview-menu">
                <li>
                  <a href="pages/examples/invoice.html">
                    <i className="fa fa-circle-o" /> Invoice
                  </a>
                </li>
                <li>
                  <a href="pages/examples/profile.html">
                    <i className="fa fa-circle-o" /> Profile
                  </a>
                </li>
                <li>
                  <a href="pages/examples/login.html">
                    <i className="fa fa-circle-o" /> Login
                  </a>
                </li>
                <li>
                  <a href="pages/examples/register.html">
                    <i className="fa fa-circle-o" /> Register
                  </a>
                </li>
                <li>
                  <a href="pages/examples/lockscreen.html">
                    <i className="fa fa-circle-o" /> Lockscreen
                  </a>
                </li>
                <li>
                  <a href="pages/examples/404.html">
                    <i className="fa fa-circle-o" /> 404 Error
                  </a>
                </li>
                <li>
                  <a href="pages/examples/500.html">
                    <i className="fa fa-circle-o" /> 500 Error
                  </a>
                </li>
                <li>
                  <a href="pages/examples/blank.html">
                    <i className="fa fa-circle-o" /> Blank Page
                  </a>
                </li>
              </ul>
            </li>
            <li className="treeview">
              <a href="#">
                <i className="fa fa-share" /> <span>Multilevel</span>
                <i className="fa fa-angle-left pull-right" />
              </a>
              <ul className="treeview-menu">
                <li>
                  <a href="#">
                    <i className="fa fa-circle-o" /> Level One
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-circle-o" /> Level One{' '}
                    <i className="fa fa-angle-left pull-right" />
                  </a>
                  <ul className="treeview-menu">
                    <li>
                      <a href="#">
                        <i className="fa fa-circle-o" /> Level Two
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-circle-o" /> Level Two{' '}
                        <i className="fa fa-angle-left pull-right" />
                      </a>
                      <ul className="treeview-menu">
                        <li>
                          <a href="#">
                            <i className="fa fa-circle-o" /> Level Three
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-circle-o" /> Level Three
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-circle-o" /> Level One
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="documentation/index.html">
                <i className="fa fa-book" /> <span>Documentation</span>
              </a>
            </li>
            <li className="header">LABELS</li>
            <li>
              <a href="#">
                <i className="fa fa-circle-o text-red" /> <span>Important</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-circle-o text-yellow" />{' '}
                <span>Warning</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-circle-o text-aqua" />{' '}
                <span>Information</span>
              </a>
            </li>
          </ul>
        </section>
      </aside>
    );
  }
}

export default Sidebar;
