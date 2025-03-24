import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  console.log('LanguageSwitcher component rendered');
  console.log('Current language:', i18n.language);
  console.log('Available languages:', i18n.languages);

  return (
    <div className="language-switcher">
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('es')}>Español</button>
    </div>
  );
};

export default LanguageSwitcher;