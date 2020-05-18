import React from 'react';

const ProjectSummary = ({ project }) => {
    return (
        <div style={{ borderBottom:'1px solid black', marginBottom:'5px'}}>
            <span>{project.title}</span>
            <p>{project.content}</p>
            <p>16th November 2020</p>
        </div>
    )
}
export default ProjectSummary;