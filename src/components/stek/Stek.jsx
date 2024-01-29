import Video from './../video/video';
import Input from './../input/input';
import Arrivals from './../arrivals/Arrivals';
import Promo from './../promo/Promo';
import Block from './../Block/Block';
import Projectstek from './../project/project_stek';
import Whyme from './../Whyme/Whyme';
import Promoinput from './../input/promoinput';

import { useTranslation } from 'react-i18next';
import './stek.css';
const Stek = () => {

    const { t } = useTranslation();
    
    return ( <div>
     <section className="promor">
    <div className="container">
        <div className="promo__content">
            <div className="promo__text">
                <div className="promo__title">
                {t('stek1')}
                </div>
                <div className="promo__desc">
                   {t('promo2')}
                </div>
                <div className='line'></div>
                <div className="promo__desc">
                {t('promo')}
                </div>
                <Promoinput/>
            </div>
        </div>
    </div>
</section> 
 <h2 className="title-2">{t('home2')}</h2>
 <Projectstek/> 
 <Input/>
 <Block/>

 <Whyme/>
</div>
 );
}
 
export default Stek;