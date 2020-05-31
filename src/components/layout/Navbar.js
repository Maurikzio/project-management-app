import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';

import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';



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

//we just need the FIREBASE property state to get the auth user info
//we dont need the firestore here

const Navbar = () => {
    return (
        <Navigator>
            <Logo>
                <Link to='/project-management-app'>Project Manager App</Link>
            </Logo>
            <Auth>
                <SignedOutLinks/>
                <SignedInLinks/>
            </Auth>
        </Navigator>
    )
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {

    }
}

export default connect(mapStateToProps, null)(Navbar);