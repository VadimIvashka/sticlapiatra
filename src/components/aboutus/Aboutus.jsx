import Video from './../video/video';
import Input from './../input/input';
import Arrivals from './../arrivals/Arrivals';
import Block from './../Block/Block';
import Promo from './../promo/Promo2';
import { useTranslation } from 'react-i18next';
import './about.css';
import tab1 from './../../img/categories/tabs1.jpg';
import tab2 from './../../img/categories/tabs2.jpg';
import tab3 from './../../img/categories/tabs3.jpg';
import comp from './../../img/categories/company.png';
import Promo2 from './../promo/Promo2';
const About = () => {
    const { t } = useTranslation();
    return ( <>
     <Promo2/>
     <div className='container'>
        <div className="about_text">
            <div className='about'>
            {t('about1')}
            </div>
            <div className='liner'></div>
            <div className='assor'> {t('about2')}</div>
            <div className='tab_dir'>
                <div className='tab'>
                    <div className='name_tab'> {t('about3')}</div>
                    <div className='name_tab'> {t('about4')}</div>
                    <img src={tab1} alt="" />
                </div>
                <div className='tab'>
                    <div className='name_tab'> {t('about5')}</div>
                    <div className='name_tab'> {t('about6')}</div>
                    <img src={tab2} alt="" />
                </div>
                <div className='tab'>
                    <div className='name_tab'> {t('about7')}</div>
                    <div className='name_tab'> {t('about8')}</div>
                    <img src={tab3} alt="" />
                </div>
                <div className='spon'> {t('about9')}</div>
               <div className='comp'> <img src={comp} alt=""/></div>
            </div>
            </div>
     </div>
     <Block/>
        <Input/>

    
    </> );
}
 
export default About;