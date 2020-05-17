import React from 'react';
import styled from 'styled-components';

const ListContainer = styled.div`
    flex-grow: 3;
    border: 1px solid red;
`

const ProjectList = () => {
    return (
        <ListContainer>
            <div>
                <span>Project Title1</span>
                <p>Posted by: Shadow Ninja</p>
                <p>16th November 2020</p>
            </div>
            <div>
                <span>Project Title2</span>
                <p>Posted by: Shadow Ninja 2</p>
                <p>16th November 2020</p>
            </div>
            <div>
                <span>Project Title3</span>
                <p>Posted by: Shadow Ninja 3</p>
                <p>16th November 2020</p>
            </div>
        </ListContainer>
    )
}

export default ProjectList;