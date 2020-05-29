import React, { Component } from 'react'
import WrapperComponent from './WrapperComponent';

/** 
*   Logic to update the virtual DOM when changes in the inputfield occurs,
*   adds users, remove users, and toggle color of the users.
*   Displays the "toggle color-button" in the first wrapper
*   and the "new user" input-field, the add-button and remove-button in the 
*   other wrapper.
*/

class DashboardComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: [],
            color: 'blue',
            value: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.AddUsers = this.AddUsers.bind(this);
        this.RemoveUsers = this.RemoveUsers.bind(this);

        fetch('https://api.softhouse.rocks/users/')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({ users: data })
            });
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    AddUsers(e) {
        const newUser = [...this.state.users, this.state.value];
        this.setState({ users: newUser, value: "" });
        e.preventDefault();
    }

    RemoveUsers(e) {
        let removeUser = this.state.users.slice(1)
        this.setState({ users: removeUser });
        e.preventDefault();
    }

    toggleColor = () => {
        const newColor = this.state.color === 'blue' ? 'red' : 'blue'
        this.setState({ color: newColor });
    }

    onClickeUser = (e) => {
        let foundUser = this.state.users.find(found => {
            if (found.name === e.target.innerHTML) {
                this.props.history.push('/users' + found.id)
                return found
            }
        })
    }

    render() {
        return (
            <React.Fragment >
                <WrapperComponent>
                    {this.state.users.map((user, index) => {
                        return (
                            <div key={index}>
                                <li className="userListItem"

                                    onClick={this.onClickeUser}
                                    style={{ color: this.state.color }}
                                    key={index}
                                >
                                    {user.name}
                                </li>
                            </div>
                        );
                    })}
                    <button
                        onClick={this.toggleColor}>Toggle colors
                    </button>
                </WrapperComponent>
                <WrapperComponent>
                    <div>
                        <form onSubmit={this.AddUsers}>
                            <input
                                type="text"
                                name="users"
                                placeholder="new user.."
                                value={this.state.value}
                                onChange={e => this.handleChange(e)}>
                            </input>
                            <button
                                className="green"
                                type="submit"
                                value="Submit">Add
                            </button>
                            <button
                                className="red"
                                onClick={this.RemoveUsers}>Remove
                            </button>
                        </form>
                    </div>
                </WrapperComponent>
            </React.Fragment >
        )
    }
}

export default DashboardComponent;

