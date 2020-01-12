import React from 'react';

const ProjectSummary = ({ project }) => {
    console.log(project);
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.title}</span>
                <p>Posted by the Newton</p>
                <p className="grey-text">2nd October,2019</p>
            </div>
        </div>
    )
}

export default ProjectSummary;