import Head from 'next/head';
import React from 'react';
import '../churchcrm.scss';
import ContentHeader from '../components/content_header';
import ControlSidebar from '../components/control_sidebar';
import Footer from '../components/footer';
import Logo from '../components/logo';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';

class Layout extends React.Component<any> {
  public static async getInitialProps() {
    return {
      namespacesRequired: ['common'],
    };
  }
  public render() {
    const { children } = this.props;

    return (
      <div className="hold-transition skin-blue sidebar-mini">
        <Head>
          <title>ChurchCRM</title>
          <meta
            content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
            name="viewport"
          />
          <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
          <link
            rel="stylesheet"
            href="/static/bootstrap/css/bootstrap.min.css"
          />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"
          />
          <link
            rel="stylesheet"
            href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
          />
          <link rel="stylesheet" href="/static/dist/css/AdminLTE.min.css" />
          <link
            rel="stylesheet"
            href="/static/dist/css/skins/_all-skins.min.css"
          />
          <link rel="stylesheet" href="/static/plugins/iCheck/flat/blue.css" />
          <link rel="stylesheet" href="/static/plugins/morris/morris.css" />
          <link
            rel="stylesheet"
            href="/static/plugins/jvectormap/jquery-jvectormap-1.2.2.css"
          />
          <link
            rel="stylesheet"
            href="/static/plugins/datepicker/datepicker3.css"
          />
          <link
            rel="stylesheet"
            href="/static/plugins/daterangepicker/daterangepicker-bs3.css"
          />
          <link
            rel="stylesheet"
            href="/static/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css"
          />
        </Head>
        <div className="wrapper">
          <header className="main-header">
            <Logo />
            <Navbar />
          </header>
          <Sidebar />
          <div className="content-wrapper">
            <ContentHeader />
            <section className="content">{children}</section>
          </div>
          <Footer />
          <ControlSidebar />
          <div className="control-sidebar-bg" />
        </div>

        <script src="/static/plugins/jQuery/jQuery-2.1.4.min.js" />
        <script src="https://code.jquery.com/ui/1.11.4/jquery-ui.min.js" />
        {/*<script dangerouslySetInnerHTML={{ __html: `$.widget.bridge('uibutton', $.ui.button);` }}/>*/}
        <script src="/static/bootstrap/js/bootstrap.min.js" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js" />
        <script src="/static/plugins/morris/morris.min.js" />
        <script src="/static/plugins/sparkline/jquery.sparkline.min.js" />
        <script src="/static/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js" />
        <script src="/static/plugins/jvectormap/jquery-jvectormap-world-mill-en.js" />
        <script src="/static/plugins/knob/jquery.knob.js" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.2/moment.min.js" />
        <script src="/static/plugins/daterangepicker/daterangepicker.js" />
        <script src="/static/plugins/datepicker/bootstrap-datepicker.js" />
        <script src="/static/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js" />
        <script src="/static/plugins/slimScroll/jquery.slimscroll.min.js" />
        <script src="/static/plugins/fastclick/fastclick.min.js" />
        <script src="/static/dist/js/app.min.js" />
        <script src="/static/dist/js/pages/dashboard.js" />
        <script src="/static/dist/js/demo.js" />
      </div>
    );
  }
}

export default Layout;
