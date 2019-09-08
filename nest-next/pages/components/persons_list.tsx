import * as React from 'react';
import { PersonContent } from '../../src/shared/interface/personlist';

interface Personif {
  title: string;
  content: PersonContent[];
}

function hashcode(dataStr: string): number {
  let hash: any = 0;
  let i = 0;
  let chr = 0;
  if (dataStr.length === 0) { return hash; }
  for (i = 0; i < dataStr.length; i++) {
    chr = dataStr.charCodeAt(i);
    hash = (hash * 32 - hash) + chr;
  }
  return hash;
};

class PersonsList extends React.Component<Personif> {
  public static async getInitialProps() {
    return {
      namespacesRequired: ['common'],
    };
  }
  private colors = [
    '#3c763d', '#8a6d3b', '#66512c', '#843534',
    '#ce8483', '#337ab7', '#286090', '#122b40', '#5cb85c',
    '#c9302c'];
  public render() {
    const PersonListContent = this.props.content.map((value) => (
      <li key={value.name_link}>
        <a className="users-list" href={value.name_link} >
          <span
            // tslint:disable-next-line: jsx-no-multiline-js
            style={{
              background: this.colors[
                Math.floor(hashcode(value.name) % this.colors.length)],
              fontFamily: 'Consolas, sans-serif',
              color: 'white',
              padding: '8px 8px 8px 8px',
              fontSize: '3vmax',
              height: 'auto',
              width: 'auto',
              textAlign: 'center',
              borderRadius: '50%',
            }}
          >
            {value.nameshort}
          </span>
          <br />
          {value.name}
        </a>
        <span className="users-list-date">{value.date}</span>
      </li>
    ));
    return (
      <div className="box box-solid">
        <div className="box box-danger">
          <div className="box-header with-border">
            <h3 className="box-title">{this.props.title}</h3>
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
              {PersonListContent}
            </ul>
            {/*<!-- /.users-list -->*/}
          </div>
        </div>
      </div>
    );
  }
}

export default PersonsList;
