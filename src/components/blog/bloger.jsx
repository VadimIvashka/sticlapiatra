import blog01 from "./../../img/images/blog1.jpg";
import blog02 from "./../../img/images/blog2.jpg";
import './blog.css'
import { useTranslation } from 'react-i18next';

const Bloger = () => {
    const { t } = useTranslation();
    return ( 
     <div className="container">
        <div className="blog">
        <div className="bloger">
            <div className="blog-img">
                <img className="cart" src={blog01} alt="" />
            </div>
            <div className="blog-info">
                <div className="blog-main">{t('bloger1')}</div>
                <div className="bl">{t('bloger2')}</div>
            </div>
        </div>
        <div className="bloger">
            <div className="blog-img">
                <img className="cart" src={blog02} alt="" />
            </div>
            <div className="blog-info">
            <div className="blog-main">{t('bloger3')}</div>
                <div className="bl">{t('bloger4')}</div>
            </div>
        </div>
        </div>
    </div> );
}
 
export default Bloger;