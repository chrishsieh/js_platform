import * as React from 'react';

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

  render() {
    return (
      <a href="index2.html" className="logo">
        <span className="logo-mini">
          <b>A</b>LT
        </span>
        <span className="logo-lg">
          <b>Admin</b>LTE
        </span>
      </a>
    );
  }
}

export default Logo;
