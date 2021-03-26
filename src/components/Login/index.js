import React from 'react'
import { Component } from "react";
import Wrapper from '../Wrapper';
import { Redirect } from 'react-router-dom';

/** 
* Logic to toggle content and redirect if someone enters more than 10 characters in input-field 
* Displays one input-field and two buttons
*/

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '', showContent: true, redirect: false };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleContent = () => {
        this.setState({ showContent: !this.state.showContent });
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.value.length >= 10) {
            this.setState({ redirect: true })
        }
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect push to='/dashboard' />
        }
    }

    render() {
        return (
            <Wrapper>
                {this.renderRedirect()}
                {this.state.showContent ?
                    <div>
                        <form
                            onSubmit={this.handleSubmit}>
                            <input
                                type="text"
                                name="admin"
                                value={this.state.value}
                                onChange={e => this.handleChange(e)}>
                            </input>
                            <button>Login
                        </button>
                        </form>
                    </div>
                    : null}
                <button
                    className="button"
                    onClick={this.toggleContent}>Show content
                </button>
            </Wrapper>
        )
    }
}

export default Login;