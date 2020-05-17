import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Links = styled.div`
    /* background-color: aqua; */
    & ul {
        list-style: none;
        padding-left: 0px;
        display: flex;
        & li {
            margin: 0 20px;
            & a{
                /* color: white; */
            }
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