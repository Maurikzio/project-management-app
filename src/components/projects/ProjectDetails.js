import React from 'react';

import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux';

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    const { project } = props;
    console.log('my project:');
    console.log(project);

    if(!project){ //ya que al activarse el componente aun no se tiene los datos desde firebase
        return (
            <div>
                <p>Loading...</p>
            </div>
        )
    }else{
        return (
            <div>
                <div>
                    <span>Project Title - {project.title}</span>
                    <p>{project.content} </p>
                </div>
                <hr/>
                <div>
                    <p>Posted by: {project.authorFirstName} {project.authorLastName}</p>
                    <p>{project.createdAt.seconds.toString() ?? String(new Date())}</p>
                </div>
            </div>
        )
    }
};

const mapStateToProps = ( state, ownProps ) => {
    // console.log(ownProps);
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null; //getting an specific project to show
    return {
        project: project
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'projects'}
    ])
)(ProjectDetails);