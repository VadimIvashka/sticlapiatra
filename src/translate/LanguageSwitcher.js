// LanguageSwitcher.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import './tr.css'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className='tr'>
      <div className='butt_div'><a onClick={() => changeLanguage('ru')}  href="#!" className="buton">RU</a></div>
	  <div className='butt_div'><a onClick={() => changeLanguage('ro')} href="#!" className="buton">RO</a></div>  
  
    </div>
  );
};

export default LanguageSwitcher;