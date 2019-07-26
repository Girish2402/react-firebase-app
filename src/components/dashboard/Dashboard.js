import React, { Component } from 'react';
import Notification from './Notification'
import ProjectList from '../projects/ProjectList'
import {connect} from 'react-redux'

class Dashboard extends Component {

    render(props){
        debugger;
        const projects = this.props.projects
        return(
            <div className="container dashboard">
                <div className="row">
                    <div className="col s12 m6 l6">
                        <ProjectList projects={projects}/>
                    </div>
                    <div className="col s12 m6 l6">
                        <Notification />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        projects: state.project.projects
    }
}

export default connect(mapStateToProps)(Dashboard);