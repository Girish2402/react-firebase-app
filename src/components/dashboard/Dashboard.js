import React, { Component } from 'react';
import Notification from './Notification'
import ProjectList from '../projects/ProjectList'

class Dashboard extends Component {

    render(){
        return(
            <div className="container dashboard">
                <div className="row">
                    <div className="col s12 m6 l6">
                        <ProjectList />
                    </div>
                    <div className="col s12 m6 l6">
                        <Notification />
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;