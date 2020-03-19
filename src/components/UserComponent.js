import React from 'react';
import {
    /* BrowserRouter as Router,
    Switch,
    Route, */
    Link
} from "react-router-dom"


function UserComponent(props) {
    console.log(props.user)

    return (
        <li>
            <Link className="userListItem" style={{ color: props.color }} to="/user">{props.user} </Link>
        </li>
    );
}

export default UserComponent;

