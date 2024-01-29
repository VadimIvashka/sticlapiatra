import'./block.css';
import icon1 from './../../img/icons/icon1.png';
import icon2 from './../../img/icons/icon2.png';
import icon3 from './../../img/icons/icon3.png';
import icon4 from './../../img/icons/icon4.png';
import { useTranslation } from 'react-i18next';

function Block () {
  const { t } = useTranslation();
    return (
        <section className="block">
            <div className="container">
                  <div className="top_name">{t('block1')} <br></br> {t('block2')}</div>
                  <div className="cards">
                  <div className="card">
                    <div className='card_icon'><img className='card_icon' src={icon1} alt="" /></div>
                   <h2 className="card-title">{t('block3')}</h2>
                   <hr />
                  <p className="card-text">
                  {t('block4')}
                    </p>
                  </div>
                  <div className="card">
                  <div className='card_icon'><img className='card_icon' src={icon2} alt="" /></div>
                    <h2 className="card-title">{t('block5')}</h2>
                    <hr />
                    <p className="card-text">
                    {t('block6')}
                    </p>
                  </div>
                  </div>
                <div className="doublecards">
                  <div className="card">
                  <div className='card_icon'><img className='card_icon' src={icon3} alt="" /></div>
                    <h2 className="card-title">{t('block7')}</h2>
                    <hr />
                    <p className="card-text">
                    {t('block8')}
                    </p>
                  </div>
                  <div className="card">
                  <div className='card_icon'><img className='card_icon' src={icon4} alt="" /></div>
                    <h2 className="card-title">{t('block9')}</h2>
                    <hr />
                    <p className="card-text"> 
                    {t('block10')}
                    </p>
                  </div>
                </div>
     </div>
  </section>   
    )
  }
  export default Block;