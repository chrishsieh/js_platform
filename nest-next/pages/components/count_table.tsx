import * as React from 'react';
import { i18n } from '../../src/i18n';

class CountTable extends React.Component<any> {
  public static async getInitialProps() {
    return {
      namespacesRequired: ['common'],
    };
  }
  public render() {
    const ListGroup = this.props.ListGroup.map((value: any) => (
      // tslint:disable-next-line: jsx-key
      <tr key={value.link}>
        <td>
          <a href={value.link}>
            {value.NameMarge ? value.NameMarge : i18n.t('Unassigned')}
          </a>
        </td>
        <td>
          <div className="progress progress-xs progress-striped active">
            <div
              className="progress-bar progress-bar-success"
              style={{ width: this.props.Count > 0 ? value.Count * 100 / this.props.Count + '%' : '0%' }}
              title={this.props.Count > 0 ? value.Count * 100 / this.props.Count + '%' : '0%'}
            />
          </div>
        </td>
        <td><span className="badge bg-green">{value.Count}</span></td>
      </tr>
    ));
    return (
      <div className="box box-primary">
        <div className="box-header with-border">
          <i className={this.props.IconType} />
          <h3 className="box-title">{this.props.Title}</h3>
          <div className="box-tools pull-right">
            <button type="button" className="btn btn-box-tool" data-widget="collapse">
              <i className="fa fa-minus" />
            </button>
            <button type="button" className="btn btn-box-tool" data-widget="remove">
              <i className="fa fa-times" />
            </button>
          </div>
        </div>
        <div className="box-body no-padding">
          <table className="table table-condensed">
            <tbody><tr>
              <th>{this.props.TableName}</th>
              <th>{this.props.TableCol_1}</th>
              <th style={{ width: '60px' }}>{this.props.TableCol_2}</th>
            </tr>
              {ListGroup}
            </tbody></table>
        </div>
      </div>
    );
  }
}

export default CountTable;
