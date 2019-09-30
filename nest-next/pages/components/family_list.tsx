import * as React from 'react';
import { i18n } from '../../src/i18n';
import { FamilyContent } from '../../src/shared/interface/familylist';

interface Familyif {
  title: string;
  icon: string;
  content: FamilyContent[];
}

class FamilyList extends React.Component<Familyif> {
  public static async getInitialProps() {
    return {
      namespacesRequired: ['common'],
    };
  }
  public render() {
    const familyListContent = this.props.content.map((value) => (
      // tslint:disable-next-line: jsx-wrap-multiline
      <tr role="row" className="odd" key={value.name_link}>
        <td tabIndex={0}>
          <a href={value.name_link}>{value.name}</a>
        </td>
        <td>{value.address}</td>
        <td>{value.datetime}</td>
      </tr>
    ));
    return (
      <div className="box box-solid">
        <div className="box-header">
          <i className={this.props.icon} />
          <h3 className="box-title">{i18n.t(this.props.title)}</h3>
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
                      {i18n.t('Family Name')}
                    </th>
                    <th
                      data-field="address"
                      className="sorting_disabled"
                      rowSpan={1}
                      colSpan={1}
                      style={{ width: '204px' }}
                    >
                      {i18n.t('Address')}
                    </th>
                    <th
                      data-field="created"
                      className="sorting_disabled"
                      rowSpan={1}
                      colSpan={1}
                      style={{ width: '199px' }}
                    >
                      {i18n.t('Created')}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {familyListContent}
                </tbody>
              </table></div>
          </div>
        </div>
      </div>
    );
  }
}

export default FamilyList;
