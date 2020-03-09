import React, { Component } from 'react'
import WrapperComponent from './WrapperComponent';
import UserComponent from './UserComponent';

class DashboardComponent extends Component {
    state = { users: ['Anders Söderberg', 'Anna Söderberg', 'Alice Söderberg', 'Leonora Söderberg'] };
    state = { color: 'blue' };
    state = { value: '' };

    handleChange = this.handleChange.bind(this);
    AddUsers = this.AddUsers.bind(this);

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    AddUsers(event) {
        console.log('Add clicked')
        const newUsers = this.state.value;
        this.setState({ value: newUsers })
        event.preventDefault();
    }

    RemoveUsers() {

    }

    toggleColor = () => {
        console.log(this.state.color)
        const newColor = this.state.color === 'blue' ? 'red' : 'blue'
        this.setState({ color: newColor });
    }

    render() {
        return (
            <React.Fragment>
                <WrapperComponent>
                    <div>
                        {this.state.value}
                        <UserComponent />
                    </div>
                    <div>
                        <li style={{ color: this.state.color }}> {this.state.users} </li>
                    </div>
                    <div>
                        <button onClick={this.toggleColor}>Toggle colors</button>
                    </div>
                </WrapperComponent>
                <WrapperComponent>
                    <div>
                        <form onSubmit={this.AddUsers}>
                            <input type="text" name="users" placeholder="new user.." value={this.state.value} onChange={this.handleChange}>
                            </input>
                            <button className="green" type="submit" value="Submit">Add</button>
                            <button className="red">Remove</button>
                        </form>
                    </div>
                </WrapperComponent>
            </React.Fragment>
        )
    }
}

export default DashboardComponent;