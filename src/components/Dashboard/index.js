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

    AddUsers() {
        const newUser = {
            name: this.state.value,
            id: this.state.users.length + 1
        }

        if (!this.state.value) return
        else {
            this.setState({ users: [...this.state.users, newUser] })
            this.setState({ value: '' });
        }
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

    onClickedUser = ({ target }) => {
        if (this.state.users.length <= 10) {
            this.props.history.push('/user:' + this.state.users.filter(user => user.name === target.innerHTML)[0].id)
        } else {
            //  For newly created users (sends all new as props instead since json placeholder do not recognize them )
            this.props.history.push('user:' + this.state.users.filter(user => user.name === target.innerHTML)[0].id, this.state.users.filter(user => user.name === target.innerHTML))
        }
    }


    render() {
        return (
            <React.Fragment >
                <Wrapper>
                    {this.state.users.map((user, index) => {
                        return (
                            <div key={index}>
                                <li className={styles.userListItem}
                                    onClick={this.onClickedUser}
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

