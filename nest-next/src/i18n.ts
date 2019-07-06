import NextI18Next from 'next-i18next';
import { initReactI18next } from 'react-i18next';

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['zh'],
  localeSubpaths: 'foreign',
  use: [initReactI18next],
});

NextI18NextInstance.i18n.init({
  lng: 'en',
  fallbackLng: 'en',
});

NextI18NextInstance.i18n.changeLanguage('en');

export default NextI18NextInstance;

/* Optionally, export class methods as named exports */
export const { appWithTranslation, withTranslation } = NextI18NextInstance;
