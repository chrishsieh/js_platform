import * as React from 'react';

class QuickEmail extends React.Component<any> {
  public static async getInitialProps() {
    return {
      namespacesRequired: ['common'],
    };
  }
  public render() {
    return (
      <div className="box box-info">
        <div className="box-header">
          <i className="fa fa-envelope" />
          <h3 className="box-title">Quick Email</h3>

          <div className="pull-right box-tools">
            <button
              className="btn btn-info btn-sm"
              data-widget="remove"
              data-toggle="tooltip"
              title="Remove"
            >
              <i className="fa fa-times" />
            </button>
          </div>
        </div>
        <div className="box-body">
          <form action="#" method="post">
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                name="emailto"
                placeholder="Email to:"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="subject"
                placeholder="Subject"
              />
            </div>
            <div>
              <textarea
                className="textarea"
                placeholder="Message"
                // tslint:disable-next-line: jsx-no-multiline-js
                style={{
                  width: '100%',
                  height: '125px',
                  fontSize: '14px',
                  lineHeight: '18px',
                  border: '1px solid #dddddd',
                  padding: '10px',
                }}
              />
            </div>
          </form>
        </div>
        <div className="box-footer clearfix">
          <button className="pull-right btn btn-default" id="sendEmail">
            Send <i className="fa fa-arrow-circle-right" />
          </button>
        </div>
      </div>
    );
  }
}

export default QuickEmail;
