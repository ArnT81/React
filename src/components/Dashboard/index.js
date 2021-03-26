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
                    <Button
                        function={this.toggleColor}
                    >
                        Toggle colors
                    </Button>
                </Wrapper>
                <Wrapper>
                    <div>
                        <form>
                            <input
                                type="text"
                                name="users"
                                placeholder="new user.."
                                value={this.state.value}
                                onChange={e => this.handleChange(e)}>
                            </input>
                            <Button
                                function={this.AddUsers}
                                color="linear-gradient(to bottom,  #ffffff, .5%, #239e3d)">
                                Add
                            </Button>


                            <Button
                                function={this.RemoveUsers}
                                color="linear-gradient(to bottom,  #ffffff, .5%, #d62e3b)"
                            >
                                Remove
                            </Button>
                        </form>
                    </div>
                </Wrapper>
            </React.Fragment >
        )
    }
}

export default Dashboard;

