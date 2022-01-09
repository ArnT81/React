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
    let id = props.match.params.id.replace(':', '')


    useEffect(() => {
        if (!user && id <= 10) {
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
        return (
            <div className="card">
                <img src="https://placekitten.com/250/300" alt="cat" />
                <h3>{user?.username || 'no username added'}</h3>
                <p className="grey">{user?.name || props.location.state[0].name}</p>
                <p>{user?.email || 'no email added'}</p>
                <br />
                {toggle &&
                    <div className="card">
                        <p>{user?.address.city || 'no city added'}</p>
                        <p>{user?.address.street || 'no street added'}</p>
                        <p>{user?.address.suite || 'no suite added'}</p>
                    </div>}
                <button onClick={toggleAdress}>Show adress</button>
            </div>
        )
    }

    //  For created users
    if (props.location.state) {
        return (
            <Wrapper>
                <Card />
            </Wrapper>
        )
    }

    //  Regular users (from json placeholder)
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

