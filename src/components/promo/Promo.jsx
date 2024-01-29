import './promo.css'
import { useTranslation } from 'react-i18next';
import Promoinput from './../input/promoinput';

const Promo = () => {
	const { t } = useTranslation();
    return (
		<section className="promos">
			<div className="container">
			
				<div className="promo__content">
					<div className="promo__text">
						<div className="promo__title">
							<span>
								<span>{t('promp1')} </span>
							</span>
							{t('promp2')}
							<span class="highlight highlight--yellow">
								<span>{t('promp3')}</span>
							</span>
							<span>{t('promp4')} </span>
						
								<span>{t('promp5')} </span>
							
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

export default Promo;