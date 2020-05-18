import React from 'react';
import ProjectSummary from './ProjectSummary'
import styled from 'styled-components';

const ProjectsContainer = styled.div`
    flex-grow: 3;
    border: 1px solid red;
`

const ProjectList = ({projects}) => {
    return (
        <ProjectsContainer>
            { projects && projects.map(project => {
                return (
                    <ProjectSummary project={project} key={project.id}/>
                )
            })}
        </ProjectsContainer>
    )
}

export default ProjectList;