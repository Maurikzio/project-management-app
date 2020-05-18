import React, { Component } from 'react';
import styled from 'styled-components';
import Notifications from './Notifications';
import ProjectsList from '../projects/ProjectList';
import { connect } from 'react-redux';


const DashboardContainer = styled.div`
    display: flex;
`;


class Dashboard extends Component {
    render(){
        const {projects} = this.props;
        return(
            <DashboardContainer>
                <ProjectsList projects={projects}/>
                <Notifications/>
            </DashboardContainer>
        )
    }
}

const mapStateToProps = (state) => ({
    projects: state.project.projects
});


export default connect(mapStateToProps)(Dashboard);