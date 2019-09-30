import NextI18Next from 'next-i18next';

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['zh'],
//  browserLanguageDetection: false,
});

export default NextI18NextInstance;

/* Optionally, export class methods as named exports */
export const {
  Trans,
  Link,
  Router,
  i18n,
  appWithTranslation,
  withTranslation,
} = NextI18NextInstance;
