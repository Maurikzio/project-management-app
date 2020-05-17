import React, { Component } from 'react';
import styled from 'styled-components';
import Notifications from './Notifications';
import ProjectsList from '../projects/ProjectList'

const DashboardContainer = styled.div`
    display: flex;
`;


class Dashboard extends Component {
    render(){
        return(
            <DashboardContainer>
                <ProjectsList/>
                <Notifications/>
            </DashboardContainer>
        )
    }
}

export default Dashboard;