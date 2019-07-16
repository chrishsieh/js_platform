import * as React from 'react';
import { withTranslation } from '../../src/i18n';
import { WithTranslation } from 'react-i18next';

interface InitialProps {
  query: string;
}

interface Props {
  query: string;
  namespacesRequired: string[];
}

class Index extends React.Component<Props & WithTranslation> {
  public static getInitialProps({ query }: InitialProps) {
    return { query, namespacesRequired: ['common'] };
  }

  public render() {
    return <h1>Hellos</h1>;
  }
}

export default withTranslation('common')(Index);
