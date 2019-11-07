import * as React from 'react';
import { i18n } from '../../src/i18n';

class PeopleReport extends React.Component<any> {
  public static async getInitialProps() {
    return {
      namespacesRequired: ['common'],
    };
  }
  public render() {
    return (
      <div className="box box-info">
        <div className="box-header with-border">
          <h3 className="box-title">{i18n.t('Reports')}</h3>
          <div className="box-tools pull-right">
            <button type="button" className="btn btn-box-tool" data-widget="collapse">
              <i className="fa fa-minus" />
            </button>
            <button type="button" className="btn btn-box-tool" data-widget="remove">
              <i className="fa fa-times" />
            </button>
          </div>
        </div>
        <div className="box-body">
          <p>
            <a className="MediumText" href="members/self-register">{i18n.t('Self Register')} {i18n.t('Reports')}</a>
            <br />{i18n.t('List families that were created via self registration.')}
          </p>
          <p>
            <a className="MediumText" href="GroupReports">{i18n.t('Reports on groups and roles')}</a>
            <br />{i18n.t('Report on group and roles selected (it may be a multi-page PDF).')}
          </p>
          <p><a className="MediumText" href="DirectoryReports">{i18n.t('People Directory')}</a>
            <br />{i18n.t('Printable directory of all people, grouped by family where assigned')}
          </p>
          <p>
            <a className="MediumText" href="LettersAndLabels">{i18n.t('Letters and Mailing Labels')}</a>
            <br />{i18n.t('Generate letters and mailing labels.')}
          </p>
          <p>
            <a className="MediumText" href="USISTAddressVerification">{i18n.t('US Address Verification Report')}</a>
            <br />\n{i18n.t('Generate report comparing all US family addresses with United States Postal Service Standard Address Format.<br>')}\n
          </p>
        </div>
      </div>
    );
  }
}

export default PeopleReport;
