import React from 'react';
import { Link } from "react-router-dom"


export default function UserComponent(props) {
    console.log(props)

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
            <Link className="userListItem" style={{ color: props.color }} to="/user">{props.user}</Link>
        </li>
    );
}

// export default UserComponent;

