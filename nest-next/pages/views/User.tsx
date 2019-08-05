import * as React from 'react';
import { WithTranslation } from 'react-i18next';
import { withTranslation } from '../../src/i18n';
import { user_usr } from '../../src/shared/entity/user_usr';

interface InitialProps {
  query: Promise<user_usr[]>;
}

interface Props {
  items: user_usr[];
  namespacesRequired: string[];
}

class Person extends React.Component<Props & WithTranslation> {
  public static async getInitialProps({ query }: InitialProps) {
    const res = await query;

    if (res) {
      return {
        items: res,
        namespacesRequired: ['common'],
      };
    }
    return {
      items: { per_LastName: '', per_FirstName: '' },
      namespacesRequired: ['common'],
    };
  }

  public render() {
    const { t } = this.props;
    return (
      <div>User</div>
    );
  }
}

export default withTranslation('common')(Person);
