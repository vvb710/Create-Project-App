import React, { Component } from 'react';
import ProjectList from '../projects/ProjectList';

class Dashboard extends Component {
    render() {

        return (
            <div className="dashboard container">
                <div className="row">
                    <ProjectList />
                </div>
            </div>
        )
    }
}

export default Dashboard;