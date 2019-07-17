import * as React from 'react';
import '../churchcrm.scss';

class Navbar extends React.Component<any> {
  public static async getInitialProps() {
    return {
      namespacesRequired: ['common'],
    };
  }
  render() {
    return (
      <nav className="navbar navbar-static-top" role="navigation">
        {/*<!-- Sidebar toggle button-->*/}
        <a
          href="#"
          className="sidebar-toggle"
          data-toggle="push-menu"
          role="button"
        >
          <span className="sr-only">Toggle navigation</span>
        </a>

        <div className="navbar-custom-menu">
          <ul className="nav navbar-nav">
            {/*<!-- Cart Functions: style can be found in dropdown.less -->*/}
            <li id="CartBlock" className="dropdown notifications-menu">
              <a
                href="#"
                className="dropdown-toggle"
                data-toggle="dropdown"
                title="Your Cart"
              >
                <i className="fa fa-shopping-cart" />
                <span id="iconCount" className="label label-success">
                  0
                </span>
              </a>
              <ul className="dropdown-menu" id="cart-dropdown-menu" />
            </li>

            {/*<!-- User Account: style can be found in dropdown.less -->*/}
            <li className="dropdown user user-menu">
              <a
                href="#"
                className="dropdown-toggle"
                id="dropdown-toggle"
                data-toggle="dropdown"
                title="Your settings and more"
              >
                <img
                  src="/static/dist/img/user2-160x160.jpg"
                  className="user-image initials-image"
                  alt="User Image"
                />
                <span className="hidden-xs">Church Admin</span>
              </a>

              <ul className="hidden-xxs dropdown-menu">
                <li
                  className="user-header"
                  id="yourElement"
                  style={{ height: '205px' }}
                >
                  <table style={{ border: 0, width: '100%' }}>
                    <tr style={{ borderBottom: '1pt solid white' }}>
                      <td style={{ verticalAlign: 'middle', width: 110 }}>
                        <img
                          width="80"
                          src="/static/dist/img/user2-160x160.jpg"
                          className="initials-image img-circle no-border"
                          alt="User Image"
                        />
                      </td>
                      <td
                        style={{ verticalAlign: 'middle', textAlign: 'left' }}
                      >
                        <a href="PersonView?PersonID=0" className="item_link">
                          <p>
                            <i className="fa fa-home" /> Profile
                          </p>
                        </a>
                        <a href="UserPasswordChange" className="item_link">
                          <p>
                            <i className="fa fa-key" /> Change Password
                          </p>
                        </a>
                        <a href="SettingsIndividual" className="item_link">
                          <p>
                            <i className="fa fa-gear" /> Change Settings
                          </p>
                        </a>
                        <a href="Login?session=Lock" className="item_link">
                          <p>
                            <i className="fa fa-pause" /> Lock
                          </p>
                        </a>
                        <a href="Logoff" className="item_link">
                          <p>
                            <i className="fa fa-sign-out" /> Sign out
                          </p>
                        </a>
                      </td>
                    </tr>
                  </table>
                  <p style={{ color: '#fff' }}>
                    <b>Church Admin</b>
                  </p>
                </li>
              </ul>
            </li>

            {/*<!-- Help & Support -->*/}
            <li className="dropdown">
              <a
                href="#"
                className="dropdown-toggle"
                id="dropdown-toggle"
                data-toggle="dropdown"
                title="Help & Support"
              >
                <i className="fa fa-support" />
              </a>
              <ul className="dropdown-menu">
                <li className="hidden-xxs">
                  <a
                    href="<?= SystemURLs::getSupportURL() ?>"
                    target="_blank"
                    title="Help & Manual"
                  >
                    <i className="fa fa-question-circle" /> Help & Manual
                  </a>
                </li>
                <li className="hidden-xxs">
                  <a
                    href="#"
                    data-toggle="modal"
                    data-target="#IssueReportModal"
                    title="Report an issue"
                  >
                    <i className="fa fa-bug" /> Report an issue
                  </a>
                </li>
                <li className="hidden-xxs">
                  <a
                    href="https://gitter.im/ChurchCRM/CRM"
                    target="_blank"
                    title="Developer Chat"
                  >
                    <i className="fa fa-commenting-o" /> Developer Chat
                  </a>
                </li>
                <li className="hidden-xxs">
                  <a
                    href="https://github.com/ChurchCRM/CRM/wiki/Contributing"
                    target="_blank"
                    title="Contributing"
                  >
                    <i className="fa fa-github" /> Contributing
                  </a>
                </li>
              </ul>
            </li>

            {/*<!-- Tasks -->*/}
            <li className="dropdown settings-dropdown">
              <a href="#" data-toggle="control-sidebar" title="Your tasks">
                <i className="fa fa-tasks" />
                <span className="label label-danger">5</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
