import {projectsAnother} from "../projectList/projectAnother"
import Project3 from './Pro3';
import { useTranslation } from './../../translate/TranslationContext';

const Projectanother = () => {
	const { lang, translate } = useTranslation();
	return (
        <section className="arrivals">
        <div className="container">
        <div className="arrivals__cards">
					{projectsAnother.map((project, index) => {
						return (
							<Project3
								key={index}
								title={translate(project.title)}
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

export default Projectanother;