import Head from 'next/head';
import { i18n } from '../../src/i18n';
import React, { StyleHTMLAttributes } from 'react';
import Logo from '@src/components/logo';
import Navbar from '@src/components/navbar';
import Sidebar from '@src/components/sidebar';
import ContentHeader from '@src/components/content_header';
import SmallBox from '@src/components/small_box';
import CustomTab from '@src/components/custom_tab';
import ChatBox from '@src/components/chat_box';
import TodoList from '@src/components/todo_list';
import QuickEmail from '@src/components/quick_email';
import MapBox from '@src/components/map_box';
import SolidGraph from '@src/components/solid_graph';
import Calendar from '@src/components/calendar';
import Footer from '@src/components/footer';
import ControlSidebar from '@src/components/control_sidebar';
import "../churchcrm.scss";

class Layout extends React.Component<any> {
  public static async getInitialProps() {
    return {
      namespacesRequired: ['common'],
    };
  }
  render() {
    const { children } = this.props;
    const languageOptions = [
      { key: 'English', text: i18n.t('English'), value: 'en' },
      { key: 'Chinese', text: i18n.t('Chinese'), value: 'zh' },
    ];
    const spanStyle: React.CSSProperties = {
      float: 'right',
    };

    return (
      <main>
        <Head>
          <title>AdminLTE 2 | Dashboard</title>
          <meta
            content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
            name="viewport"
          />
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
        <body className="hold-transition skin-blue sidebar-mini">
          <div className="wrapper">
            <header className="main-header">
              <Logo />
              <Navbar />
            </header>
            <Sidebar />
            <div className="content-wrapper">
              <ContentHeader />
              <section className="content">
                <SmallBox />
                <div className="row">
                  <section className="col-lg-7 connectedSortable">
                    <CustomTab />
                    <ChatBox />
                    <TodoList />
                    <QuickEmail />
                  </section>

                  <section className="col-lg-5 connectedSortable">
                    <MapBox />
                    <SolidGraph />
                    <Calendar />
                  </section>
                </div>
              </section>
            </div>
            <Footer />
            <ControlSidebar />
            <div className="control-sidebar-bg" />
          </div>

          <script src="/static/plugins/jQuery/jQuery-2.1.4.min.js" />
          <script src="https://code.jquery.com/ui/1.11.4/jquery-ui.min.js" />
          <script>$.widget.bridge('uibutton', $.ui.button);</script>
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
        </body>
      </main>
    );
  }
}

export default Layout;
