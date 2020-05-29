import React, { useState, useEffect } from 'react';
import WrapperComponent from './WrapperComponent';
import PropTypes from 'prop-types';

/** 
*   Logic fetching selected user with the index recieved in props.match.params,
*   ability to toggle the address information of the users.
*   Displays the selected user´s information
*/

function UserScreen(props) {

    const [user, setUser] = useState(false)
    const [toggle, setToggle] = useState(false);
    let id = props.match.params.id

    useEffect(() => {
        if (!user) {
            fetch('https://api.softhouse.rocks/users/' + id)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    setUser(data)
                });
        }
    });

    const toggleAdress = () => {
        setToggle(!toggle);
    }

    return (
        <WrapperComponent>
            {!user ?
                <div>Loading User</div>
                :
                <div className="card">
                    <img src="https://placekitten.com/250/300" alt="cat" />
                    <h3>{user.username}</h3>
                    <p className="grey">{user.name}</p>
                    <p>{user.email}</p>
                    <br />
                    {toggle ?
                        <div className="card">
                            <p>{user.address.city}</p>
                            <p>{user.address.street}</p>
                            <p>{user.address.suite}</p>
                        </div> : null}
                    <button onClick={toggleAdress}>Show adress</button>
                </div>}
        </WrapperComponent>
    );
}

UserScreen.propTypes = {
    user: PropTypes.object
};

export default UserScreen;

