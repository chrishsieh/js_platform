import React from 'react';
import { Header } from 'semantic-ui-react';
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
    return <Header>{this.props.query}</Header>;
  }
}

export default Index;
