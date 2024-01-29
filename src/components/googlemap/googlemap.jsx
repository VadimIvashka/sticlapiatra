import React from 'react';
import './googlemap.css'
import { useTranslation } from 'react-i18next';

const MapComponent = () => {
  const { t } = useTranslation();
  return (
    <div className='container'>
      <div className='maps'>
    <div><iframe className='mapper' src="https://yandex.ru/map-widget/v1/?um=constructor%3A49b05f75d36f5a17fb05ebac1535fe55b5b2b6427f141af67d97128ca9cf9f1f&amp;source=constructor" width="600" height="400" frameborder="0"></iframe></div>
    <div className='mapcontent'>
        <div className='mapmaintext'>{t('map1')}</div>
        <div className='txt'>
          <div className='mapdouble'>
          <div className='maptext'>{t('map2')}</div>
          <div className='maptext2'>{t('map2txt')}</div>
          </div>
          <div className='mapdouble'>
            <div className='maptext'>{t('map3')}</div>
             <div className='mapdouble'>
              <div className='maptext2'>{t('map3txt')}</div>
             <div className='maptext2'>{t('map4txt')}</div>
            </div>
          </div>
         
          <div className='mapdouble'>
          <div className='maptext'>{t('map4')}</div>
          <div className='maptext2'> +373 (60) 303377</div>
          <div className='maptext2'> +373 (60) 866108</div>
          </div>
          <div className='mapdouble'>
          <div className='maptext'>{t('map5')}</div>
          <div className='maptext2'>sticlapiatra@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MapComponent;