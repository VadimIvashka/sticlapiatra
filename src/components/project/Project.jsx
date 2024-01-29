import { NavLink } from 'react-router-dom';
import Card from '../card/Card';
import './stylepr.css';
const  Project = ({ title, img, index }) => {
    return ( 
 <div className="arrivals__cards">
    <NavLink to={`/project/${index}`}>
     <Card title = {title} img={img} />
    </NavLink>
</div>

);

}
 
export default  Project;