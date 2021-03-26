import React, { Component } from 'react';
import Wrapper from '../Wrapper';
import Button from '../Button';
import styles from './dashboard.module.css';
/** 
*   Logic to update the virtual DOM when changes in the inputfield occurs,
*   adds users, remove users, and toggle color of the users.
*   Displays the "toggle color-button" in the first wrapper
*   and the "new user" input-field, the add-button and remove-button in the 
*   other wrapper.
*/

class Dashboard extends Component {

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

        fetch('https://jsonplaceholder.typicode.com/users/')
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
        this.state.users.find(found => {
            if (found.name === e.target.innerHTML) {
                this.props.history.push('/users' + found.id)
                return found
            }
        })
    }

    render() {
        return (
            <React.Fragment >
                <Wrapper>
                    {this.state.users.map((user, index) => {
                        return (
                            <div key={index}>
                                <li className={styles.userListItem}

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
                </Wrapper>
                <Wrapper>
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
                                className={styles.green}
                                type="submit"
                                value="Submit">Add
                            </button>
                            <button
                                className={styles.red}
                                onClick={this.RemoveUsers}>Remove
                            </button>
                        </form>
                    </div>
                </Wrapper>
            </React.Fragment >
        )
    }
}

export default Dashboard;

