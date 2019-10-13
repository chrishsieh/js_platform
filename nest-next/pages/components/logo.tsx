import * as React from 'react';
// import '../churchcrm.scss';

class Logo extends React.Component<any> {
  public static async getInitialProps() {
    return {
      namespacesRequired: ['common'],
    };
  }
  //    constructor(props) {
  //      super(props);
  //      this.state = {
  //        ...state,
  //        pageNum: 1,
  //      };
  //      this.fetchDataHadler = this.fetchDataHadler.bind(this);
  //    }

  public render() {
    return (
      <a href="Menu" className="logo">
        {/*<!-- mini logo for sidebar mini 50x50 pixels -->*/}
        <span className="logo-mini">
          <b>C</b>RM
        </span>
        {/*<!-- logo for regular state and mobile devices -->*/}
        <span className="logo-lg">
          <b>Church</b>CRM
        </span>
      </a>
    );
  }
}

export default Logo;
