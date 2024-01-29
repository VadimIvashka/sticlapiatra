import Video from './../video/video';
import Input from './../input/input';
import Arrivals from './../arrivals/Arrivals';
import Promo from './../promo/Promo';
import Block from './../Block/Block';
import MapComponent from './../googlemap/googlemap';
import Whyme from './../Whyme/Whyme';
import { useTranslation } from 'react-i18next';
import './contact.css'
import Promoinput from './../input/promoinput';

const Contact = () => {

	const { t } = useTranslation();

    return (
        <div>
		<section className="promos">
			<div className="container">
				<div className="promo__content">
					<div className="promo__text">
						<div className="promo__title">
							<span>
								<span>{t('contact1')}</span>
							</span>
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
        <MapComponent/>
		<Block/>
        <Input/>
		

        </div>
	);
}

export default Contact;