import './promo.css'
import Promoinput from './../input/promoinput';
import { useTranslation } from 'react-i18next';

const Promo3 = () => {
	const { t } = useTranslation();
    return (
		<section className="promos">
			<div className="container">
				<div className="promo__content">
					<div className="promo__text">
						<div className="promo__title">
							<span>
								<span>{t('pr2')}</span>
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
	);
}

export default Promo3;