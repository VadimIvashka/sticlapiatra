import Project from './Project';
import {projects} from "../projectList/projectList"

const Projects = () => {
	
	return (
        <section className="arrivals">
        <div className="container">
        <div className="arrivals__cards">
					{projects.map((project, index) => {
						return (
							<Project
								key={index}
								title={project.title}
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

export default Projects;