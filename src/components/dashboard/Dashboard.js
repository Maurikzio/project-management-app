import React, { Component } from 'react';
import styled from 'styled-components';
import Notifications from './Notifications';
import ProjectsList from '../projects/ProjectList';
import { connect } from 'react-redux';

import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux';


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

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        projects: state.firestore.ordered.projects
    }
};


export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(Dashboard);

//compose(connect, firestoreConnect) whats gonna do is, whne this component is active, the collection i want listen
//to is 'projects' and whenever this component first loads or whenever the firestore data is changed in the database
//online  we now induce the firestore reducer to sync the STORE state with that PROJECTS collection in firestore, 
//co whenever the database changes, like if a new item is added, changed or deleted this component Dashboard will
//hear that because we're connected to that collection and in turn it will trigger the fire to reducer to update the 
//state to reflect that change
//So, the 'firestore' property in the state in the app (rootreducer) when this component DASHBOARD is active on page 
//is gonna be synced with the projects collection in firestore