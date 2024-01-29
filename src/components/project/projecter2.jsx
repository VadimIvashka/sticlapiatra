import {useParams} from "react-router-dom";
import {projectStek} from "../projectList/projectStek"
import './details.css'

const Projecter2 = () => {
	const {id} = useParams();
	const projects = projectStek[id];

    return (		
			<div className="container">
				
					<h1 className="title-1">{projects.title}</h1>
                     <div className="img-project">
					<img
						src={projects.imgBig}
						alt={projects.title}
						className="project-details__cover"
					/>
                    </div>

					<div className="project-details__desc">
						<p>{projects.skills}</p>
					</div>

				</div>
	);
}
export default Projecter2;