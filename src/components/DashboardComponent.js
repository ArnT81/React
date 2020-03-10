import React, { Component } from 'react'
import WrapperComponent from './WrapperComponent';
import UserComponent from './UserComponent';

class DashboardComponent extends Component {

    constructor() {
        super()
        this.state = { users: ['Anders Söderberg', 'Anna Söderberg', 'Alice Söderberg', 'Leonora Söderberg'], color: 'blue', value: '' }
        this.handleChange = this.handleChange.bind(this);
        this.AddUsers = this.AddUsers.bind(this);
        this.RemoveUsers = this.RemoveUsers.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    AddUsers(event) {
        const newUsersInput = this.state.value;
        this.setState({ value: newUsersInput })
        this.state.users.push(newUsersInput)
        event.preventDefault();
        this.setState({ value: ""})
    }

    RemoveUsers(event) {
        const newUsersInput = this.state.value;
        this.setState({ value: newUsersInput })
        this.state.users.pop()
        event.preventDefault();
    }

    toggleColor = () => {
        const newColor = this.state.color === 'blue' ? 'red' : 'blue'
        this.setState({ color: newColor });
    }

    render() {
        return (
            <React.Fragment>
                <WrapperComponent>
                    <div>
                        <UserComponent users={this.state.users} color={this.state.color} />
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
                            <button className="red" onClick={this.RemoveUsers} >Remove</button>
                        </form>
                    </div>
                </WrapperComponent>
            </React.Fragment>
        )
    }
}

export default DashboardComponent;