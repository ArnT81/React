import React, { useState, useEffect } from 'react';
import Wrapper from '../Wrapper';
import PropTypes from 'prop-types';

/** 
*   Logic fetching selected user with the index recieved in props.match.params,
*   ability to toggle the address information of the users.
*   Displays the selected user´s information
*/

function UserScreen(props) {
    const [user, setUser] = useState()
    const [toggle, setToggle] = useState();
    let id = props.match.params.id

    useEffect(() => {
        if (!user) {
            fetch('https://jsonplaceholder.typicode.com/users/' + id)
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

    const Card = () => {
        let { name, username, email } = user;
        let { city, street, suite } = user.address;

        return (
            <div className="card">
                <img src="https://placekitten.com/250/300" alt="cat" />
                <h3>{username}</h3>
                <p className="grey">{name}</p>
                <p>{email}</p>
                <br />
                {toggle &&
                    <div className="card">
                        <p>{city}</p>
                        <p>{street}</p>
                        <p>{suite}</p>
                    </div>}
                <button onClick={toggleAdress}>Show adress</button>
            </div>
        )
    }


    return (
        <Wrapper>
            {!user ?
                <div>Loading User</div>
                :
                <Card />
            }
        </Wrapper>
    );
}

UserScreen.propTypes = {
    user: PropTypes.object
};

export default UserScreen;

