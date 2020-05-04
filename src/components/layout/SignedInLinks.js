import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Links = styled.div`
    & ul {
        list-style: none;
        padding-left: 0px;
        display: flex;
        margin: 0;
        & li {
            margin: 0 5px;
        }
    }
`;


const SignedInLinks = () => {
    return (
        <Links>
            <ul>
                <li>
                    <NavLink to='/'>New Project</NavLink>
                </li>
                <li>
                    <NavLink to='/'>Log Out</NavLink>
                </li>
                <li>
                    <NavLink to='/'>NN</NavLink>
                </li>
            </ul>
        </Links>
    )
}

export default SignedInLinks;