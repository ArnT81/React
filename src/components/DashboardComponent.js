import React, { Component } from 'react'
import WrapperComponent from './WrapperComponent';
import UserComponent from './UserComponent';
import useParams, { Link } from 'react-router-dom';

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

        fetch('https://jsonplaceholder.typicode.com/users')
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

    targetedUser = (e) => {
        this.props.history.push('/user')
       /*  if (e.target.innerHTML === this.user.name) {
        } */
    }

    render() {
        return (
            <React.Fragment >
                <WrapperComponent>
                    {this.state.users.map((user, i) => {
                        return (
                            <ul>
                                <li
                                    key={i}
                                    className="userListItem"
                                    onClick={this.targetedUser}
                                    style={{ color: this.state.color }}
                                >
                                    {user.name}
                                </li>
                            </ul>
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

