import React from 'react';
import './whyme.css'
import { useTranslation } from 'react-i18next';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import aboutus01 from "./../../img/icons/aboutus1.png";
import aboutus02 from "./../../img/icons/aboutus2.png";
import aboutus03 from "./../../img/icons/aboutus3.png";
import aboutus04 from "./../../img/icons/aboutus4.png";

const Whyme = () => {
  const { t } = useTranslation();
  return (
    <div className='container'>
       <div className="split-container">
      <div className="left-side">
        <div className='main_text'>{t('whyme1')}</div>
      <div className='block_why'>
        <div className='one_block'>
            <div className='icon1'>
            <img src={aboutus01} alt="" /> 
            </div>

        <div className='ggg'>
         <div className='maptext'>{t('whyme2')}</div>
         <div className='maptext'>{t('whyme3')}</div>
            </div>
       
        
        </div>
      </div>
      <div className='main_text'></div>
      <div className='block_why'>
        <div className='one_block'>
            <div className='icon'>
            <img src={aboutus02} alt="" /> 
            </div>

        <div className='ggg'>
         <div className='maptext'>{t('cum1')}</div>
         <div className='maptext'>{t('cum2')}</div>
            </div>
       
        
        </div>
      </div>
      </div>
      
      <div className="right-side">
      <div className='main_text'></div>
      <div className='block_why'>
        <div className='one_block'>
            <div className='icon'>
            <img src={aboutus03} alt="" />  
            </div>

        <div className='ggg'>
         <div className='maptext'>{t('cum3')}</div>
         <div className='maptext'>{t('cum4')}</div>
            </div>
       
        
        </div>
      </div>
      <div className='main_text'></div>
      <div className='block_why'>
        <div className='one_block'>
            <div className='icon'>
            <img src={aboutus04} alt="" /> 
            </div>

        <div className='ggg'>
         <div className='maptext'>{t('cum5')}</div>
         <div className='maptext'>{t('cum6')}</div>
            </div>
       
        
        </div>
      </div>
      </div>
    </div>
    </div>
  );
};

export default Whyme;