import PropTypes from 'prop-types';
import * as React from 'react';
import { WithTranslation } from 'react-i18next';
import { withTranslation } from '../src/i18n';

class Error extends React.Component<any & WithTranslation> {
  public static defaultProps: { statusCode: null };
  public static propTypes: {
    statusCode: PropTypes.Requireable<number>;
    t: PropTypes.Validator<(...args: any[]) => any>;
  };
  public static getInitialProps({ res, err }: any) {
    let statusCode = null;
    if (res) {
      ({ statusCode } = res);
    } else if (err) {
      ({ statusCode } = err);
    }
    return {
      namespacesRequired: ['common'],
      statusCode,
    };
  }

  public render() {
    const { statusCode, t } = this.props;
    return (
      <p>
        {statusCode ? t('error-with-status', { statusCode }) : t('error-without-status')}
      </p>
    );
  }
}

Error.defaultProps = {
  statusCode: null,
};

Error.propTypes = {
  statusCode: PropTypes.number,
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(Error);
