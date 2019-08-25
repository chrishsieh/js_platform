import * as React from 'react';

class Footer extends React.Component<any> {
  public static async getInitialProps() {
    return {
      namespacesRequired: ['common'],
    };
  }
  public render() {
    return (
      <footer className="main-footer">
        <div className="pull-right">
          <b>Version</b>
          3.4.1
        </div>
        <strong>Copyright © 2019
          <a href="http://www.churchcrm.io" target="_blank">
            <b>Church</b>
            CRM
          </a>.
        </strong> All rights reserved.|
        <a href="https://twitter.com/church_crm" target="_blank">
          <i className="fa fa-twitter" /> Follow us on Twitter
        </a>
      </footer>
    );
  }
}

export default Footer;
