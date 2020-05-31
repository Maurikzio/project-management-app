import React, { Component } from 'react';
import { connect } from 'react-redux';

import { signIn } from '../../store/actions/authActions'

class SignIn extends Component {
    state = {
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
        this.props.sigIn(this.state);
    }

    render(){
        const { authError} = this.props;
        return (
            <div>
                <form onSubmit={this.handleSubmit}> {/*  PREVENT DEFAULT HERE*/}
                    <h5>Sign In</h5>
                    <div>
                        <label htmlFor='email'>Email:</label>
                        <input type='email' id='email' onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor='password'>Password:</label>
                        <input type='password' id='password' onChange={this.handleChange}/>
                    </div>
                    <div>
                        <button>Login</button>
                    </div>
                </form>
                { authError ? <p>{authError}</p> : null}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sigIn: (credentials) => dispatch(signIn(credentials))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignIn);