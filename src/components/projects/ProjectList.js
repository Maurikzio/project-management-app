import React from 'react';
import ProjectSummary from './ProjectSummary'
import styled from 'styled-components';

import { Link } from 'react-router-dom';


const ProjectsContainer = styled.div`
    flex-grow: 3;
    border: 1px solid red;
`

const ProjectList = ({projects}) => {
    return (
        <ProjectsContainer>
            { projects && projects.map(project => {
                return (
                    <React.Fragment key={project.id}>
                        <Link to={'/project-management-app/project/' + project.id}>
                            <ProjectSummary project={project} key={project.id}/>
                        </Link>
                    </React.Fragment>
                )
            })}
        </ProjectsContainer>
    )
}

export default ProjectList;