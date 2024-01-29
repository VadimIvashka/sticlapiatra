import vk from './../../img/icons/facebook.png';
import instagram from './../../img/icons/instagram.png';
import ico from './../../img/icons/snapedit.png';
import ico2 from './../../img/icons/snapedit2.png';
import "./footer.css";
import { useTranslation } from 'react-i18next';
const Footer = () => {
    const { t } = useTranslation();
    return (  
    <footer className="footer">
    <div className="container">
       
    <div className='ico'>
        <img src={ico} alt="Link"/>
        <img src={ico2} alt="Link"/>
        
    </div>
    <div className='footer_text'>
        <div>
            <div className=''>sticlapiatra@gmail.com</div>
            <div className=''>+373 (60) 303377</div>
            <div className=''>+373 (60) 866108</div>
        </div>
        <div>
            <div className=''>{t('map2')}</div>
            <div className=''>{t('map2txt')}</div>
            <div className=''>{t('map22txt')}</div>
        </div>
        <div>
            <div className=''>{t('footer1')}</div>
            <div className=''>{t('map3txt')}</div>
            <div className=''>{t('map4txt')}</div>
        </div>
        
    </div>
        <div className="footer__wrapper">
            <ul className="social">
                <li className="social__item">
                    <a href="https://www.facebook.com/profile.php?id=100089657352057&mibextid=LQQJ4d">
                        <img src={vk} alt="Link" />
                    </a>
                </li>
                <li className="social__item">
                    <a href="https://instagram.com/sticla_piatra_balti?igshid=YTQwZjQ0NmI0OA==">
                        <img src={instagram} alt="Link" />
                    </a>
                </li>           
            </ul>
            <div className="copyright">
                <p>© 2023 sticlapiatra.md</p>
            </div>
        </div>
    </div>
</footer>   );
}
export default Footer;
