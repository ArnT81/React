import React, { useState, Fragment } from 'react';
import WrapperComponent from './WrapperComponent';
import PropTypes from 'prop-types';
// import { StoreContext } from './StoreContext'


function UserScreen(props) {

    const [user, setUser] = useState(false)
    const [value, setValue] = useState(true);
    const [toggle, setToggle] = useState(false);


    console.log(props.match.params.id)

    const toggleAdress = () => {
        setToggle(!toggle);
    }

    return (
        <Fragment>
            {!props.user ?
                <WrapperComponent>
                    <p>No user selected!</p>
                </WrapperComponent>
                : value ?
                    <div>{props.children}</div>
                    :
                    <div className="card">
                        <img src="https://placekitten.com/250/300" alt="cat" />
                        <h3>{props.user.username}</h3>
                        <p className="grey">{props.user.name}</p>
                        <p>{props.user.email}</p>
                        <br />
                        {toggle ?
                            <div className="card">
                                <p>{props.user.address.city}</p>
                                <p>{props.user.address.street}</p>
                                <p>{props.user.address.suite}</p>
                            </div> : null}
                        <button onClick={toggleAdress}>Show adress</button>
                    </div>
            }
        </Fragment>
    );

}

UserScreen.propTypes = {
    user: PropTypes.object
};

export default UserScreen;

