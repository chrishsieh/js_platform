import React from 'react';
import Head from 'next/head';
import { Button } from 'semantic-ui-react';

interface InitialProps {
  query: string;
}

interface Props extends InitialProps {}

class Index extends React.Component<Props> {
  public static getInitialProps({ query }: InitialProps) {
    return { query };
  }

  public render() {
    return (
      <div>
        <Head>
          <link
            rel="stylesheet"
            href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
				/>
          <script src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
          <script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
        </Head>
        <Button basic color='teal'>{this.props.query}</Button>
      </div>
    );
  }
}

export default Index;
