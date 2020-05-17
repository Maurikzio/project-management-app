import React from 'react';

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div>
            <div>
                <span>Project Title - {id}</span>
                <p>lorem ipsun bla bla bla bla bla bla bla </p>
            </div>
            <hr/>
            <div>
                <p>Posted by: Ninja Turtle 1</p>
                <p>16th Nov 2020</p>
            </div>
        </div>
    )
};

export default ProjectDetails;