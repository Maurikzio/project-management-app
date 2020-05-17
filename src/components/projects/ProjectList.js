import React from 'react';
import ProjectSummary from './ProjectSummary'
import styled from 'styled-components';

const ProjectsContainer = styled.div`
    flex-grow: 3;
    border: 1px solid red;
`

const ProjectList = () => {
    return (
        <ProjectsContainer>
            <ProjectSummary/>
            <ProjectSummary/>
        </ProjectsContainer>
    )
}

export default ProjectList;