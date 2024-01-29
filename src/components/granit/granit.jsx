import './granit.css';
import Video from './../video/video';
import Input from './../input/input';
import Arrivals from './../arrivals/Arrivals';
import Block from './../Block/Block';
import { useTranslation } from 'react-i18next';
import Projects from './../project/projects';
import Promoinput from './../input/promoinput';
const Granit = () => {

     const { t } = useTranslation();

    return ( <> <section className="promo">
    <div className="container">
        <div className="promo__content">
            <div className="promo__text">
                <div className="promo__title">
                {t('granit1')}
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
<h2 className="title-2">{t('home1')}</h2>
        <Projects/>  
        <Block/>
        <Input/>
        </>);
}
 
export default Granit;