import React, { Component } from 'react';
import WrapperComponent from './WrapperComponent';

class SingleUserComponent extends Component {

    constructor(props) {
        super(props)
        this.state = { users: '' }
        this.url = 'users/'
        this.i = 1

        fetch('https://jsonplaceholder.typicode.com/' + this.url + '/' + this.i)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({ users: data })
            });
    }

    render() {
        if (!this.state.users) {
            return (
                <div style={{color: 'red', textAlign: "center"}}>Users not loaded yet</div>
            );
        }
        return (
            <div className="singleUserModal">
                <WrapperComponent>
                    {/* <img src="" /> */}
                    {this.state.users.username}<br />
                    {this.state.users.name}<br />
                    {this.state.users.email}
                    <button>Show Address</button>
                </WrapperComponent>
            </div>
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
