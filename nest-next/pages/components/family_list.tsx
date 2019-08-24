import * as React from 'react';

class FamilyList extends React.Component<any> {
  public static async getInitialProps() {
    return {
      namespacesRequired: ['common'],
    };
  }
  public render() {
    return (
      <div className="box box-solid">
        <div className="box-header">
          <i className="fa fa-user-plus" />
          <h3 className="box-title">Latest Families</h3>
          <div className="box-tools pull-right">
            <button type="button" className="btn btn-box-tool" data-widget="collapse">
              <i className="fa fa-minus" />
            </button>
            <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times" />
            </button>
          </div>
        </div>
        {/*<!-- /.box-header -->*/}
        <div className="box-body clearfix">
          <div className="table-responsive" style={{ overflow: 'hidden' }}>
            <div id="latestFamiliesDashboardItem_wrapper" className="dataTables_wrapper no-footer">
              <table
                className="dataTable table table-striped table-condensed no-footer dtr-inline"
                id="latestFamiliesDashboardItem"
                role="grid"
                style={{ width: '789px' }}
              >
                <thead>
                  <tr role="row">
                    <th
                      data-field="name"
                      className="sorting_disabled"
                      rowSpan={1}
                      colSpan={1}
                      style={{ width: '278px' }}
                    >
                      Family Name
                    </th>
                    <th
                      data-field="address"
                      className="sorting_disabled"
                      rowSpan={1}
                      colSpan={1}
                      style={{ width: '204px' }}
                    >
                      Address
                    </th>
                    <th
                      data-field="city"
                      className="sorting_disabled"
                      rowSpan={1}
                      colSpan={1}
                      style={{ width: '199px' }}
                    >
                      Created
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr role="row" className="odd">
                    <td tabIndex={0}>
                      <a href="/FamilyView?FamilyID=21">Smith</a>
                    </td>
                    <td>123 Main St.</td>
                    <td>15/04/17 5:19 pm</td>
                  </tr>
                  <tr role="row" className="even">
                    <td tabIndex={0}>
                      <a href="/FamilyView?FamilyID=16">Larson</a>
                    </td>
                    <td>3866 Edwards Rd</td>
                    <td>1/03/16 2:19 pm</td>
                  </tr>
                  <tr role="row" className="odd">
                    <td tabIndex={0}>
                      <a href="/FamilyView?FamilyID=19">Kennedy</a>
                    </td>
                    <td>9481 Wycliff Ave</td>
                    <td>23/11/14 9:17 am</td>
                  </tr>
                  <tr role="row" className="even">
                    <td tabIndex={0}>
                      <a href="/FamilyView?FamilyID=17">Cooper</a>
                    </td>
                    <td>1782 Daisy Dr</td>
                    <td>26/09/14 12:09 am</td>
                  </tr>
                  <tr role="row" className="odd">
                    <td tabIndex={0}>
                      <a href="/FamilyView?FamilyID=12">Olson</a>
                    </td>
                    <td>1272 Shady Ln Dr</td>
                    <td>31/08/14 4:21 am</td>
                  </tr>
                  <tr role="row" className="even">
                    <td tabIndex={0}>
                      <a href="/FamilyView?FamilyID=20">Black</a>
                    </td>
                    <td>4307 Avondale Ave</td>
                    <td>10/05/14 6:07 am</td>
                  </tr>
                  <tr role="row" className="odd">
                    <td tabIndex={0}>
                      <a href="/FamilyView?FamilyID=14">Berry</a>
                    </td>
                    <td>1931 Edwards Rd</td>
                    <td>15/10/13 9:25 am</td>
                  </tr>
                  <tr role="row" className="even">
                    <td tabIndex={0}>
                      <a href="/FamilyView?FamilyID=6">Dixon</a>
                    </td>
                    <td>6730 Mockingbird Hill</td>
                    <td>25/07/13 8:18 pm</td>
                  </tr>
                  <tr role="row" className="odd">
                    <td tabIndex={0}>
                      <a href="/FamilyView?FamilyID=9">Diaz</a>
                    </td>
                    <td>1158 Harrison Ct</td>
                    <td>20/04/13 3:01 pm</td>
                  </tr>
                  <tr role="row" className="even">
                    <td tabIndex={0}>
                      <a href="/FamilyView?FamilyID=7">Stewart</a>
                    </td>
                    <td>7045 Wycliff Ave</td>
                    <td>17/08/11 4:00 am</td>
                  </tr>
                  <tr role="row" className="odd">
                    <td tabIndex={0}>
                      <a href="/FamilyView?FamilyID=1">Campbell</a>
                    </td>
                    <td>3259 Daisy Dr</td>
                    <td>25/12/09 7:19 am</td>
                  </tr>
                  <tr role="row" className="even">
                    <td tabIndex={0}>
                      <a href="/FamilyView?FamilyID=2">Hart</a>
                    </td>
                    <td>4878 Valley View Ln</td
                    ><td>13/04/09 1:17 am</td>
                  </tr>
                </tbody>
              </table></div>
          </div>
        </div>
      </div>
    );
  }
}

export default FamilyList;
