import React from 'react';
import PropTypes from 'prop-types';

import { withTranslation } from '../src/i18n';
import { WithTranslation } from 'react-i18next';

class Error extends React.Component<any & WithTranslation> {
  static defaultProps: { statusCode: null };
  static propTypes: {
    statusCode: PropTypes.Requireable<number>;
    t: PropTypes.Validator<(...args: any[]) => any>;
  };
  static getInitialProps({ res, err }: any) {
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

  render() {
    const { statusCode, t } = this.props;
    return (
      <p>
        {statusCode
          ? t('error-with-status', { statusCode })
          : t('error-without-status')}
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
