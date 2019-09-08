import App from 'next/app';
import * as React from 'react';
import { appWithTranslation } from '../src/i18n';
import Layout from './layouts/layout';

class MyApps extends App {
  public render() {
    const { Component, pageProps } = this.props;
    return (
        <Layout>
          <Component {...pageProps} />
        </Layout>
    );
  }
}

export default appWithTranslation(MyApps);
