import React, { Component } from 'react'

class WrapperComponent extends Component {
    
    toggleContent = () => {
        this.setState = { showContent: false };
        console.log('clicked')
    }

    constructor(props) {
        super(props);
        this.state = { showContent: true };
        console.log(this.state)
        console.log(this.props)
    }

    render() {
        return (
            <div className="wrapper">
                {this.props.children}
                <hr></hr>
                <button onClick={this.toggleContent}>Show content</button>
            </div>
        )
    }
}

export default WrapperComponent;