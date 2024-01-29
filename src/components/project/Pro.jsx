import { NavLink } from 'react-router-dom';
import Card from '../card/Card';
import './stylepr.css';
const  Project2 = ({ title, img, index }) => {
    return ( 
 <div className="arrivals__cards">
    <NavLink to={`/projectstek/${index}`}>
     <Card title = {title} img={img} />
    </NavLink>
</div>
);

}
 
export default  Project2;