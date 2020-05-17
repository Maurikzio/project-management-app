import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'


const Navigator = styled.div`
    font-size: 20px;
    display: flex;
    background-color: orange;
    padding: 5px 0px;
    a{
        text-decoration: none;
    }
`;
const Logo = styled.div`
    display: flex;
    justify-content: center;
    flex-grow: 1;
    /* background-color: pink; */
    & a {
        font-size: 50px;
    }
`;
const Auth = styled.div`
    display: flex;
    flex-grow: 2;
    justify-content: center;
`;

const Navbar = () => {
    return (
        <Navigator>
            <Logo>
                <Link to='/'>Project Manager App</Link>
            </Logo>
            <Auth>
                <SignedOutLinks/>
                <SignedInLinks/>
            </Auth>
        </Navigator>
    )
}

export default Navbar;