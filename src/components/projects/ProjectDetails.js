import React from 'react'

const ProjectDetails = (props) =>  {
    debugger;
    const id = props.match.params.id
    return (
        <div className="container">
            <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                    <span className="card-title">Card Title - {id}</span>
                    <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
                </div>
                <div className="card-action">
                    <a href="#">This is a link</a>
                    <a href="#">This is a link</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
