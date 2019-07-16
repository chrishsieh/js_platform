import * as React from 'react';

class CustomTab extends React.Component<any> {
  public static async getInitialProps() {
    return {
      namespacesRequired: ['common'],
    };
  }
  render() {
    return (
      <div className="nav-tabs-custom">
        <ul className="nav nav-tabs pull-right">
          <li className="active">
            <a href="#revenue-chart" data-toggle="tab">
              Area
            </a>
          </li>
          <li>
            <a href="#sales-chart" data-toggle="tab">
              Donut
            </a>
          </li>
          <li className="pull-left header">
            <i className="fa fa-inbox" /> Sales
          </li>
        </ul>
        <div className="tab-content no-padding">
          <div
            className="chart tab-pane active"
            id="revenue-chart"
            style={{ position: 'relative', height: '300px' }}
          />
          <div
            className="chart tab-pane"
            id="sales-chart"
            style={{ position: 'relative', height: '300px' }}
          />
        </div>
      </div>
    );
  }
}

export default CustomTab;
