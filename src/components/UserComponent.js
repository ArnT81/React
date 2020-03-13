import React from 'react';

/** 
* Recieves color and single user. 
* Displays the user with recieved current color. 
*/

function UserComponent(props) {
    return (
        <li className="userListItem" style={{ color: props.color }}>
            {props.children}
        </li>
    );
}

export default UserComponent;

