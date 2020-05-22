import React, { useState, useEffect } from 'react'

const Usercomponent = (props) => {
    console.log(props)
    const [getUser, setGetUser] = useState(false)

    useEffect(() => {
        // console.log(props.match.params)

        if (!getUser) {
            // fetch('https://api.softhouse.rocks/users/')
            fetch('https://jsonplaceholder.typicode.com/users/1' /* props.match.params.id */)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    setGetUser(data)
                });
            setGetUser(true)
        }
    });

    const toUserScreen = (props) => {
        this.props.history.push('/user/:id')
    }

    return (
        <div className="userListItem" onClick={()=>{this.props.history.push('/user/:id')}} onClick={() => { toUserScreen(/* user.id */) }}>
            {props.children}
        </div>
    )


}

export default Usercomponent