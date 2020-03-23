import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"


function UserComponent(props) {
    console.log(props)
    const [user, newState] = useState(props.user)

    useEffect(() => {
        console.log('user Effect runs');
        
      });

    /*  fetch('https://jsonplaceholder.typicode.com/users/')
         .then((response) => {
             return response.json();
         })
         .then((data) => {
             setState({ users: data })
             console.log(data)
         }); */

    return (
        <li>
            <Link onClick={() => newState(user)} className="userListItem" style={{ color: props.color }} to="/user">{props.user}</Link>
        </li>
    );
}

export default UserComponent;

