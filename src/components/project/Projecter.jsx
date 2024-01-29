import {useParams} from "react-router-dom";
import {projects} from "../projectList/projectList"
import './details.css'

const Projecter = () => {
	const {id} = useParams();
	const project = projects[id];

    return (		
			<div className="container">
				
					<h1 className="title-1">{project.title}</h1>
                     <div className="img-project">
					<img
						src={project.imgBig}
						alt={project.title}
						className="project-details__cover"
					/>
                    </div>

					<div className="project-details__desc">
						<p>{project.skills}</p>
					</div>

				</div>
	);
}

export default Projecter;