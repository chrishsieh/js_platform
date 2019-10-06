import * as React from 'react';
import '../churchcrm.scss';

interface ContentHeaderif {
  content: string;
}

class ContentHeader extends React.Component<ContentHeaderif> {
  public static async getInitialProps() {
    return {
      namespacesRequired: ['common'],
    };
  }
  public render() {
    return (
      <section className="content-header">
        <h1>{this.props.content}</h1>
      </section>
    );
  }
}

export default ContentHeader;
