import * as React from 'react';

class PersonsList extends React.Component<any> {
  public static async getInitialProps() {
    return {
      namespacesRequired: ['common'],
    };
  }
  private colors = [
    '#3c763d', '#67b168', '#8a6d3b', '#66512c', '#843534',
    '#ce8483', '#337ab7', '#286090', '#122b40', '#5cb85c',
    '#c9302c'];
  public render() {
    return (
      <div className="box box-solid">
        <div className="box box-danger">
          <div className="box-header with-border">
            <h3 className="box-title">Latest Persons</h3>
            <div className="box-tools pull-right">
              <button type="button" className="btn btn-box-tool" data-widget="collapse">
                <i className="fa fa-minus" />
              </button>
              <button type="button" className="btn btn-box-tool" data-widget="remove">
                <i className="fa fa-times" />
              </button>
            </div>
          </div>
          {/*<!-- /.box-header -->*/}
          <div className="box-body no-padding">
            <ul className="users-list clearfix">
              <li>
                <a className="users-list" href="PersonView.php?PersonID=104">
                  <span
                    // tslint:disable-next-line: jsx-no-multiline-js
                    style={{
                      background: this.colors[Math.floor(Math.random() * this.colors.length)],
                      color: 'white',
                      padding: '6px',
                      fontSize: '50px',
                      height: 'auto',
                      width: 'auto',
                      textAlign: 'center',
                      textDecoration: 'none',
                      margin: 'margin top',
                      borderRadius: '50%',
                    }}
                  >
                    MS
                  </span>
                  <br />
                  Mark Smith
                </a>
                <span className="users-list-date">04/15/2017&nbsp;</span>
              </li>
              <li>
                <a className="users-list" href="PersonView.php?PersonID=105">
                  <span
                    // tslint:disable-next-line: jsx-no-multiline-js
                    style={{
                      background: this.colors[Math.floor(Math.random() * this.colors.length)],
                      color: 'white',
                      padding: '6px',
                      fontSize: '50px',
                      height: 'auto',
                      width: 'auto',
                      textAlign: 'center',
                      textDecoration: 'none',
                      margin: 'margin top',
                      borderRadius: '50%',
                    }}
                  >
                    MS
                  </span>
                  <br />
                  Mary Smith</a>
                <span className="users-list-date">04/15/2017&nbsp;</span>
              </li>
              <li>
                <a className="users-list" href="PersonView.php?PersonID=106">
                  <span
                    // tslint:disable-next-line: jsx-no-multiline-js
                    style={{
                      background: this.colors[Math.floor(Math.random() * this.colors.length)],
                      color: 'white',
                      padding: '6px',
                      fontSize: '50px',
                      height: 'auto',
                      width: 'auto',
                      textAlign: 'center',
                      textDecoration: 'none',
                      margin: 'margin top',
                      borderRadius: '50%',
                    }}
                  >
                    SS
                  </span>
                  <br />
                  Sam Smith</a>
                <span className="users-list-date">04/15/2017&nbsp;</span>
              </li>
              <li>
                <a className="users-list" href="PersonView.php?PersonID=107">
                  <span
                    // tslint:disable-next-line: jsx-no-multiline-js
                    style={{
                      background: this.colors[Math.floor(Math.random() * this.colors.length)],
                      color: 'white',
                      padding: '6px',
                      fontSize: '50px',
                      height: 'auto',
                      width: 'auto',
                      textAlign: 'center',
                      textDecoration: 'none',
                      margin: 'margin top',
                      borderRadius: '50%',
                    }}
                  >
                    TS
                  </span>
                  <br />
                  Tony Smith</a>
                <span className="users-list-date">04/15/2017&nbsp;</span>
              </li>
              <li>
                <a className="users-list" href="PersonView.php?PersonID=4">
                  <span
                    // tslint:disable-next-line: jsx-no-multiline-js
                    style={{
                      background: this.colors[Math.floor(Math.random() * this.colors.length)],
                      color: 'white',
                      padding: '6px',
                      fontSize: '50px',
                      height: 'auto',
                      width: 'auto',
                      textAlign: 'center',
                      textDecoration: 'none',
                      margin: 'margin top',
                      borderRadius: '50%',
                    }}
                  >
                    DC
                  </span>
                  <br />
                  Darren Campbell</a>
                <span className="users-list-date">04/03/2016&nbsp;</span>
              </li>
              <li>
                <a className="users-list" href="PersonView.php?PersonID=76">
                  <span
                    // tslint:disable-next-line: jsx-no-multiline-js
                    style={{
                      background: this.colors[Math.floor(Math.random() * this.colors.length)],
                      color: 'white',
                      padding: '6px',
                      fontSize: '50px',
                      height: 'auto',
                      width: 'auto',
                      textAlign: 'center',
                      textDecoration: 'none',
                      margin: 'margin top',
                      borderRadius: '50%',
                    }}
                  >
                    LL
                  </span>
                  <br />
                  Leroy Larson</a>
                <span className="users-list-date">03/01/2016&nbsp;</span>
              </li>
              <li>
                <a className="users-list" href="PersonView.php?PersonID=80">
                  <span
                    // tslint:disable-next-line: jsx-no-multiline-js
                    style={{
                      background: this.colors[Math.floor(Math.random() * this.colors.length)],
                      color: 'white',
                      padding: '6px',
                      fontSize: '50px',
                      height: 'auto',
                      width: 'auto',
                      textAlign: 'center',
                      textDecoration: 'none',
                      margin: 'margin top',
                      borderRadius: '50%',
                    }}
                  >
                    JC
                  </span>
                  <br />
                  Judy Cooper</a>
                <span className="users-list-date">12/26/2015&nbsp;</span>
              </li>
              <li>
                <a className="users-list" href="PersonView.php?PersonID=55">
                  <span
                    // tslint:disable-next-line: jsx-no-multiline-js
                    style={{
                      background: this.colors[Math.floor(Math.random() * this.colors.length)],
                      color: 'white',
                      padding: '6px',
                      fontSize: '50px',
                      height: 'auto',
                      width: 'auto',
                      textAlign: 'center',
                      textDecoration: 'none',
                      margin: 'margin top',
                      borderRadius: '50%',
                    }}
                  >
                    MN
                  </span>
                  <br />
                  Marie Newman</a>
                <span className="users-list-date">10/04/2015&nbsp;</span>
              </li>
              <li>
                <a className="users-list" href="PersonView.php?PersonID=40">
                  <span
                    // tslint:disable-next-line: jsx-no-multiline-js
                    style={{
                      background: this.colors[Math.floor(Math.random() * this.colors.length)],
                      color: 'white',
                      padding: '6px',
                      fontSize: '50px',
                      height: 'auto',
                      width: 'auto',
                      textAlign: 'center',
                      textDecoration: 'none',
                      margin: 'margin top',
                      borderRadius: '50%',
                    }}
                  >
                    AR
                  </span>
                  <br />
                  Austin Robertson</a>
                <span className="users-list-date">05/27/2015&nbsp;</span>
              </li>
              <li>
                <a className="users-list" href="PersonView.php?PersonID=85">
                  <span
                    // tslint:disable-next-line: jsx-no-multiline-js
                    style={{
                      background: this.colors[Math.floor(Math.random() * this.colors.length)],
                      color: 'white',
                      padding: '6px',
                      fontSize: '50px',
                      height: 'auto',
                      width: 'auto',
                      textAlign: 'center',
                      textDecoration: 'none',
                      margin: 'margin top',
                      borderRadius: '50%',
                    }}
                  >
                    BR
                  </span>
                  <br />
                  Bernard Riley</a>
                <span className="users-list-date">03/05/2015&nbsp;</span>
              </li>
              <li>
                <a className="users-list" href="PersonView.php?PersonID=36">
                  <span
                    // tslint:disable-next-line: jsx-no-multiline-js
                    style={{
                      background: this.colors[Math.floor(Math.random() * this.colors.length)],
                      color: 'white',
                      padding: '6px',
                      fontSize: '50px',
                      height: 'auto',
                      width: 'auto',
                      textAlign: 'center',
                      textDecoration: 'none',
                      margin: 'margin top',
                      borderRadius: '50%',
                    }}
                  >
                    KR
                  </span>
                  <br />
                  Kathryn Robertson</a>
                <span className="users-list-date">02/07/2015&nbsp;</span>
              </li>
              <li>
                <a className="users-list" href="PersonView.php?PersonID=92">
                  <span
                    // tslint:disable-next-line: jsx-no-multiline-js
                    style={{
                      background: this.colors[Math.floor(Math.random() * this.colors.length)],
                      color: 'white',
                      padding: '6px',
                      fontSize: '50px',
                      height: 'auto',
                      width: 'auto',
                      textAlign: 'center',
                      textDecoration: 'none',
                      margin: 'margin top',
                      borderRadius: '50%',
                    }}
                  >
                    BK
                  </span>
                  <br />
                  Bruce Kennedy</a>
                <span className="users-list-date">11/23/2014&nbsp;</span>
              </li>
            </ul>
            {/*<!-- /.users-list -->*/}
          </div>
        </div>
      </div>
    );
  }
}

export default PersonsList;
