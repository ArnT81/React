import React, { Component } from 'react'
import WrapperComponent from './WrapperComponent';
import UserComponent from './UserComponent';

/** 
*   Logic to update the virtual DOM when changes in the inputfield occurs,
*   adds users, remove users, and toggle color of the users.
*   Displays the "toggle color-button" in the first wrapper
*   and the "new user" input-field, the add-button and remove-button in the 
*   other wrapper.
*/

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
        const newUser = [...this.state.users, this.state.value];
        this.setState({ users: newUser });
        this.setState({ value: "" });
        event.preventDefault();
    }

    RemoveUsers(event) {
        let removeUser = this.state.users.slice(1)
        this.setState({ users: removeUser });
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
                    <ul>
                        {this.state.users.map((user, index) => {
                            return (
                                <UserComponent className="userListItem" color={this.state.color} key={index}>
                                    {user}
                                </UserComponent>
                            );
                        })}
                    </ul>
                    <button onClick={this.toggleColor}>Toggle colors</button>
                </WrapperComponent>
                <WrapperComponent>
                    <div>
                        <form onSubmit={this.AddUsers}>
                            <input type="text" name="users" placeholder="new user.." value={this.state.value} onChange={event => this.handleChange(event)}>
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