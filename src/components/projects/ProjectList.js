import React from 'react'
import ProjectSummary from './ProjectSummary';

const ProjectList = ({projects}) => {
	return (
					<div className="project-summary">
						{
							projects && projects.map(project => {								
								return(
									<ProjectSummary project={project}/>
								)
							})
						}
					</div>
	)
}

export default ProjectList;