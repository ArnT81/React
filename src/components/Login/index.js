import React from 'react'
import { Component } from "react";
import { Redirect } from 'react-router-dom';
//COMPONENT
import Wrapper from '../Wrapper';
import Button from '../Button';

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
                            <Button>
                                Login
                            </Button>
                        </form>
                    </div>
                    : null}
                <Button
                    function={this.toggleContent}
                >
                    Show content
                </Button>
            </Wrapper>
        )
    }
}

export default Login;