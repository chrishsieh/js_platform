import * as React from 'react';
import { i18n } from '../../src/i18n';

class CountTable extends React.Component<any> {
  public static async getInitialProps() {
    return {
      namespacesRequired: ['common'],
    };
  }
  public render() {
    const input = {
      Title: 'Family Roles',
      IconType: 'fa fa-address-card',
      TableName: 'Role / Gender',
      TableCol_1: '% of People',
      TableCol_2: 'Count',
      Count: 100,
      GroListGroupup: [
        { ID: 1, Name: 'Head of Household', Gender: 1, Count: '14' },
        { ID: 1, Name: 'Head of Household', Gender: 2, Count: '7' },
        { ID: 2, Name: 'Spouse', Gender: 1, Count: '6' },
        { ID: 2, Name: 'Spouse', Gender: 2, Count: '9' },
        { ID: 3, Name: 'Child', Gender: 1, Count: '23' },
        { ID: 3, Name: 'Child', Gender: 2, Count: '19' },
        { ID: 4, Name: 'Other Relative', Gender: 1, Count: '4' },
        { ID: 4, Name: 'Other Relative', Gender: 2, Count: '2' },
        { ID: 5, Name: 'Non Relative', Gender: 2, Count: '1' },
        { ID: 0, Name: null, Gender: 1, Count: '9' },
        { ID: 0, Name: null, Gender: 2, Count: '4' },
        { ID: 0, Name: null, Gender: 0, Count: '2' },
      ],
    };
    const Testbox = input.GroListGroupup.map((value: any) => (
      // tslint:disable-next-line: jsx-key
      <tr key={value.ID + ':' + value.Gender}>
        <td>
          <a href={`v2/people?Gender=` + value.Gender + `&FamilyRole=` + value.ID}>
            {value.Name ? value.Name : 'Unassigned'} - {value.Gender === 1 ? 'Male' : value.Gender === 2 ? 'Female' : 'Unassigned'}
          </a>
        </td>
        <td>
          <div className="progress progress-xs progress-striped active">
            <div
              className="progress-bar progress-bar-success"
              style={{ width: input.Count > 0 ? value.Count * 100 / input.Count + '%' : '0%' }}
              title={input.Count > 0 ? value.Count * 100 / input.Count + '%' : '0%'}
            />
          </div>
        </td>
        <td><span className="badge bg-green">{value.Count}</span></td>
      </tr>
    ));
    return (
      <div className="box box-primary">
        <div className="box-header with-border">
          <i className={input.IconType} />
          <h3 className="box-title">{i18n.t(input.Title)}</h3>
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
              <th>{i18n.t(input.TableName)}</th>
              <th>{i18n.t(input.TableCol_1)}</th>
              <th style={{ width: '40px' }}>{i18n.t(input.TableCol_2)}</th>
            </tr>
              {Testbox}
            </tbody></table>
        </div>
      </div>
    );
  }
}

export default CountTable;
