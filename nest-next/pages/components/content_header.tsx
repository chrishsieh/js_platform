import * as React from 'react';
import "../churchcrm.scss";

class ContentHeader extends React.Component<any> {
  public static async getInitialProps() {
    return {
      namespacesRequired: ['common'],
    };
  }
  render() {
    return (
      <section className="content-header">
        <h1>Welcome to Main St. Cathedral</h1>
      </section>
    );
  }
}

export default ContentHeader;
