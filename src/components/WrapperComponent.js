import React, { Component } from 'react'
import button from './wrapper.model.css' 

class WrapperComponent extends Component {

    constructor(props) {
        super(props)
        this.state = { showContent: true };
    }

    toggleContent = () => {
        this.setState({ showContent: !this.state.showContent });
    }

    render() {
        return (
            <div className="wrapper">
                {this.state.showContent ? <div>{this.props.children}</div> : null}
                <hr />
                <button className={button} onClick={this.toggleContent}>Show content</button>
            </div>
        )
    }
}

export default WrapperComponent;