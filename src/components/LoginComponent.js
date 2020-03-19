import React from 'react'
import { Component } from "react";
import WrapperComponent from './WrapperComponent'

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = { value: '', showContent: true }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    toggleContent = () => {
        this.setState({ showContent: !this.state.showContent });
    }

    handleChange(e) {
        console.log(this.state.value)
        this.setState({ value: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }

    render() {
        return (
            <WrapperComponent>
                {this.state.showContent ? <div>
                    <form
                        onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            name="admin">
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