import React from 'react'

const ProjectSummary = ({project}) => {
    return (
        <div className="card grey darken-1" key={project.id}>
            <div className="card-content white-text">
                <span className="card-title">{project.title}</span>
                <p>{project.context}</p>
            </div>
            <div className="card-action">
                <a href="#">This is a link</a>
                <a href="#">This is a link</a>
            </div>
        </div>
    )
}

export default ProjectSummary;