import * as React from 'react';
import { i18n } from '../../src/i18n';
import { SmallBoxItem } from '../../src/shared/interface/dashboardlist';

interface SmallBoxItemif {
  content: SmallBoxItem;
  id: string;
  color: string;
  href: string;
  href_string: string;
  icon: string;
}

interface SmallBoxif {
  array: SmallBoxItemif[];
}

class SmallBox extends React.Component<SmallBoxif> {
  public static async getInitialProps() {
    return {
      namespacesRequired: ['common'],
    };
  }
  public render() {
    const smallbox = this.props.array.map((value) => (
      <div className="col-lg-3 col-xs-6" key={value.content.Name}>
        <div className={value.color}>
          <div className="inner">
            <h3 id={value.id}>{value.content.Count}</h3>
            <p>{i18n.t(value.content.Name)}</p>
          </div>
          <div className="icon">
            <i className={value.icon} />
          </div>
          <a href={value.href} className="small-box-footer">
            {i18n.t(value.href_string)}
            <i className="fa fa-arrow-circle-right" />
          </a>
        </div>
      </div>
    ));
    return (<div className="row">{smallbox}</div>);
  }
}

export default SmallBox;
