import React, { Component } from 'react';

class CreateProject extends Component {
    state = {
        title: '',
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}> 
                    <h5>Create New Project</h5>
                    <div>
                        <label htmlFor='title'>Title:</label>
                        <input type='text' id='title' onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor='content'>Project Content:</label>
                        <textarea id='content' onChange={this.handleChange}/>
                    </div>
                    <div>
                        <button>Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateProject;