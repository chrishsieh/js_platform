import * as React from 'react';
import { i18n } from '../../src/i18n';
// import '../churchcrm.scss';

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
        <h1>{i18n.t(this.props.content)}</h1>
      </section>
    );
  }
}

export default ContentHeader;
