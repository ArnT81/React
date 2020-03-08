import React, { Component } from 'react'
import WrapperComponent from './WrapperComponent';

class DashboardComponent extends Component {
    users = ['Anders Söderberg', 'Anna Söderberg', 'Alice Söderberg', 'Leonora Söderberg']
    
    AddUsers() {
       
    }

    RemoveUsers() {
       
    }

    render() {
        return (
            <React.Fragment>
                <WrapperComponent>
                    <div>
                        <button>Toggle colors</button>
                    </div>
                </WrapperComponent>
                <WrapperComponent>
                    <div>
                        <input></input>
                        <button className="green">Add</button>
                        <button className="red">Remove</button>
                    </div>
                </WrapperComponent>
            </React.Fragment>
        )
    }
}

export default DashboardComponent;