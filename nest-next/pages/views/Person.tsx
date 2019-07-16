import * as React from 'react';
import { withTranslation } from '../../src/i18n';
import { person_per } from '../../src/shared/entity/person_per';
import { WithTranslation } from 'react-i18next';

interface InitialProps {
  query: Promise<person_per[]>;
}

interface Props {
  items: person_per[];
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
      <h1>Hello</h1>
    );
  }
}

export default withTranslation('common')(Person);
