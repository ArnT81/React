import React, { Component } from 'react';
import WrapperComponent from './WrapperComponent';

class SingleUserComponent extends Component {

    constructor(props) {
        super(props)
        this.state = { users: '', showContent: false }
        this.url = 'users/'
        this.index = 5

        console.log(props)

        fetch('https://jsonplaceholder.typicode.com/' + this.url + '/')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                let keys = ['username', 'name', 'email', 'address'],
                    [username, name, email, address] = data.reduce((a, b) => {
                        return keys.map((x, i) => { a[i].push(b[x]) }), a;
                    }, [[], [], [], []]);

                let userInfo = [username[this.index],
                name[this.index],
                email[this.index],
                address[this.index].city,
                address[this.index].street,
                address[this.index].suite]
                this.setState({ users: userInfo })
            });
    }

    toggleContent = () => {
        this.setState({ showContent: !this.state.showContent });
    }

    render() {
        // console.log(username)
        if (!this.state.users) {
            return (
                <div className="loading">Users not loaded yet</div>
            );
        }
        return (
            <WrapperComponent>
                <div className="singleUserModal">
                    <h3>{this.state.users[0]}</h3>
                    <p className="grey">{this.state.users[1]}</p>
                    <p>{this.state.users[2]}</p>
                    <button onClick={this.toggleContent}>Show Address</button>
                    {this.state.showContent ? <div>
                        <p>{this.state.users[3]}</p>
                        <p>{this.state.users[4]}</p>
                        <p>{this.state.users[5]}</p>
                    </div> : null}
                </div>
            </WrapperComponent>
        )
    }
}

export default SingleUserComponent;

/* getJSONUsers() {
    let url = 'users'
    this.getUsersService.getUser(url, this.id)
      .then(response => response.json())
      .then(json => {
        this.user = json;
        console.log(this.user)
      })
  }

  getJSONUsers() {
    let url = 'users'
    this.getUsersService.getUsers(url)
      .then(response => response.json())
      .then(json => {
        this.userList = json;
      })
  }


  getUsers(url) {
    let base_url = 'https://jsonplaceholder.typicode.com/';
    return fetch(base_url + url);
  }

  getUser(url, id) {
    let base_url = 'https://jsonplaceholder.typicode.com/'+url + '/' + id;
    return fetch(base_url);
  } */
