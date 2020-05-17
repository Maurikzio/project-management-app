import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Links = styled.div`
    /* background-color: pink; */
    display: flex;
    align-items: stretch;
    & ul {
        list-style: none;
        padding-left: 0px;
        display: flex;
        /* background: yellow;   */
        margin:0;
        align-items: center;
        & li {
            margin: 0 20px;
            &:last-child{
                a{
                    padding: 10px 6px;
                    border-radius: 50%;
                    background-color: green;
                }
            }
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
                    <NavLink to='/'>MM</NavLink> 
                </li>
            </ul>
        </Links>
    )
}

export default SignedInLinks;