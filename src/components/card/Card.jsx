import styles from './Card.module.css'
import cat01Img from './../../img/categories/cat-01.jpg';
import arrowImg from './../../img/icons/arrow.svg';
import './cards.css'

const Card = ({title, img}) => {

    return (
		<div className='container'>
			<div className='con'>
		<div className={styles.card}>
			<a href="#!" className={styles.card__link}></a>
			<img
				className={styles.card__img}
				src={img}
				alt="Category ..."
			/>

			<div className={styles.card__body}>
				<div className={styles.card__text}>
					<div className={styles.card__title}>
						{title}
					</div>
					<div className={styles.card__muted}>Mai mult</div>
				</div>
				<div className={styles.card__icon}>
					<img src={arrowImg} alt="Open" />
				</div>
			</div>
		  </div>
		</div>
	</div>
	);
}

export default Card;