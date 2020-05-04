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


const SignedOutLinks = () => {
    return (
        <Links>
            <ul>
                <li>
                    <NavLink to='/'>Signup</NavLink>
                </li>
                <li>
                    <NavLink to='/'>Login</NavLink>
                </li>
            </ul>
        </Links>
    )
}

export default SignedOutLinks;