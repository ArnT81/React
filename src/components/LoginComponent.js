import React from 'react'
import { Component } from "react";
import WrapperComponent from './WrapperComponent'
import { Redirect } from 'react-router-dom'

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = { value: '', showContent: true, redirect: false };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleContent = () => {
        this.setState({ showContent: !this.state.showContent });
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
        console.log(this.state.redirect)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.value.length >= 10) {
            this.setState({ redirect: true })
        }
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/dashboard' />
        }
    }

    render() {
        return (
            <WrapperComponent>
                {this.renderRedirect()}
                {this.state.showContent ? <div>
                    <form
                        onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            name="admin"
                            value={this.state.value}
                            onChange={e => this.handleChange(e)}>
                        </input>
                        <button
                            className="green">Login
                        </button>
                    </form>
                </div> : null}
                <button className="button" onClick={this.toggleContent}>Show content</button>
            </WrapperComponent>
        )
    }
}

export default LoginComponent