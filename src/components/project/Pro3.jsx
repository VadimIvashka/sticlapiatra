import { NavLink } from 'react-router-dom';
import Card from '../card/Card';
import './stylepr.css';
const  Project3 = ({ title, img, index }) => {
    return ( 
 <div className="arrivals__cards">
    <NavLink to={`/projectsanother/${index}`}>
     <Card title = {title} img={img} />
    </NavLink>
</div>
);

}
 
export default  Project3;