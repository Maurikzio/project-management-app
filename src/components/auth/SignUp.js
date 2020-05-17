import React, { Component } from 'react';

class SignUp extends Component {
    state = {
        firstName:'',
        lastName: '',
        email: '',
        password: ''
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
                <form onSubmit={this.handleSubmit}> {/*  PREVENT DEFAULT HERE*/}
                    <h5>Sign Up</h5>
                    <div>
                        <label htmlFor='firstName'>firstName:</label>
                        <input type='text' id='firstName' onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor='lastName'>lastName:</label>
                        <input type='text' id='lastName' onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor='email'>Email:</label>
                        <input type='email' id='email' onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor='password'>Password:</label>
                        <input type='password' id='password' onChange={this.handleChange}/>
                    </div>
                    <div>
                        <button>Sign Up</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp;