import React from 'react';

function UserComponent(props) {
    return (
        <div>
            {props.users.map((user, index) => (
                <li className="userListItem" style={{ color: props.color }} key={index}> {user} </li>
            ))}
        </div>
    );
}

export default UserComponent;

