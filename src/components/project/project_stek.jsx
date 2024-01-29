import {projectStek} from "../projectList/projectStek"
import Project2 from './Pro';
import { useTranslation } from 'react-i18next'


const Projectstek = () => {
		const { t } = useTranslation();
	return (
        <section className="arrivals">
        <div className="container">
        <div className="arrivals__cards">
					{projectStek.map((project, index) => {
						return (
							<Project2
								key={index}
								title={t(project.title)}
								img={project.img}
								index={index}
							/> 
						);
					})}
	        </div>
           
        </div>	
</section> 
	);
};

export default Projectstek;