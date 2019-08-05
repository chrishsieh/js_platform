import * as React from 'react';

class MapBox extends React.Component<any> {
  public static async getInitialProps() {
    return {
      namespacesRequired: ['common'],
    };
  }
  public render() {
    return (
      <div className="box box-solid bg-light-blue-gradient">
        <div className="box-header">
          <div className="pull-right box-tools">
            <button
              className="btn btn-primary btn-sm daterange pull-right"
              data-toggle="tooltip"
              title="Date range"
            >
              <i className="fa fa-calendar" />
            </button>
            <button
              className="btn btn-primary btn-sm pull-right"
              data-widget="collapse"
              data-toggle="tooltip"
              title="Collapse"
              style={{ marginRight: '5px' }}
            >
              <i className="fa fa-minus" />
            </button>
          </div>

          <i className="fa fa-map-marker" />
          <h3 className="box-title">Visitors</h3>
        </div>
        <div className="box-body">
          <div id="world-map" style={{ height: '250px', width: '100%' }} />
        </div>
        <div className="box-footer no-border">
          <div className="row">
            <div
              className="col-xs-4 text-center"
              style={{ borderRight: '1px solid #f4f4f4' }}
            >
              <div id="sparkline-1" />
              <div className="knob-label">Visitors</div>
            </div>
            <div
              className="col-xs-4 text-center"
              style={{ borderRight: '1px solid #f4f4f4' }}
            >
              <div id="sparkline-2" />
              <div className="knob-label">Online</div>
            </div>
            <div className="col-xs-4 text-center">
              <div id="sparkline-3" />
              <div className="knob-label">Exists</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MapBox;
