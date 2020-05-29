import React, { Component } from 'react'

/**
* Logic and a button to toggle visability of the content recieved from its children.
* Recieves css for button from wrapper.model.css.
*/

class WrapperComponent extends Component {

    render() {
        return (
            <div className="wrapper">
                <div>{this.props.children}</div>
                <hr />
            </div>
        )
    }
}

export default WrapperComponent;