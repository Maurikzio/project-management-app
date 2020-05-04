import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'


const Navigator = styled.div`
    font-size: 20px;
    display: flex;
    justify-content: space-around;
`;
const Logo = styled.div`

`;

const Navbar = () => {
    return (
        <Navigator>
            <Logo>
                <Link to='/'>Project Manager</Link>
            </Logo>
            <SignedOutLinks/>
            <SignedInLinks/>
        </Navigator>
    )
}

export default Navbar;