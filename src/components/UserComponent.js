import React from 'react';

function UserComponent(props) {
    return (
        <li className="userListItem" style={{ color: props.color }}>
            {props.children}
        </li>
    );
}

export default UserComponent;

