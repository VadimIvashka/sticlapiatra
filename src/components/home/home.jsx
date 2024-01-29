import Video from './../video/video';
import Input from './../input/input';
import Promo from './../promo/Promo';
import Block from './../Block/Block';
import Projects from './../project/projects';
import Whyme from './../Whyme/Whyme';
import './home.css'
import { useTranslation } from 'react-i18next';
const Home = () => {
    const { t } = useTranslation();
    return (  
        <>
         <Promo/> 
		    <h2 className="title-2">{t('home1')}</h2> 
        <Projects/>
        <Input/>
        <Block/>
        <Whyme/>
           
        </>
    

    );
}
 
export default Home;