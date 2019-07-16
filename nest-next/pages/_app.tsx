import * as React from 'react';
import App, { Container } from 'next/app';
import { appWithTranslation } from '../src/i18n';
import Layout from './layouts/layout';

class MyApps extends App {
//  static async getInitialProps({ Component, ctx }: any) {
//    let pageProps = {};
//
//    if (Component.getInitialProps) {
//      pageProps = await Component.getInitialProps(ctx);
//    }
//
//    return { pageProps };
//  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    );
  }
}

export default appWithTranslation(MyApps);
