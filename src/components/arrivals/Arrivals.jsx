import Card from '../card/Card';
import './arrivals.css';
import { NavLink } from 'react-router-dom';
import cat01Img from './../../img/categories/cat-01.jpg';
import cat02Img from './../../img/categories/cat-02.jpg';
import cat03Img from './../../img/categories/cat-03.jpg';
import cat04Img from './../../img/categories/cat-04.jpg';




const Arrivals = () => {
	return (
		<section className="arrivals">
			<div className="container">
				<div className="arrivals__header">
					<h2 className="title-2">НАШИ ПРОДУКТЫ</h2>
				</div>
				<div className="arrivals__cards">
				    <Card title="Товар" img={cat01Img} />
					<Card title="Товар" img={cat02Img} />
					<Card title="Товар" img={cat03Img} />
					<Card title="Товар" img={cat03Img} />
					<Card title="Товар" img={cat03Img} />
				</div>
			</div>
		</section>
	);
};

export default Arrivals;
