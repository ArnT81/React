import React, { useEffect, useState } from 'react';
import WrapperComponent from './WrapperComponent';


function UserComponent(props) {

    // console.log('props in UserComponent ', props.userId)
    console.log('props in UserComponent ', props);
    const [user, setUser] = useState({});
    const [value, setValue] = useState(true);
    const [toggle, setToggle] = useState(false);
    const clickedUser = 6;

    useEffect(() => {
        // fetch('https://api.softhouse.rocks/users/')
        fetch('https://jsonplaceholder.typicode.com/users/' + clickedUser)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setUser(data)
            });
    });

    const toggleAdress = () => {
        setToggle(!toggle);
    }

    return (
        <WrapperComponent>
            {!value ?
                <p>No user selected!</p>
                :
                <div className="card">
                    <img src="https://placekitten.com/250/300" alt="picture" />
                    <h3>{user.username}</h3>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    
                    {toggle ?
                        <div>
                            <p>{user.address.city}</p>
                            <p>{user.address.street}</p>
                            <p>{user.address.suite}</p>
                        </div> : null}
                        <button onClick={toggleAdress}>Show adress</button>
                </div>
            }
        </WrapperComponent>
    );

}

export default UserComponent;

