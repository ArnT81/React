import React from 'react'
import WrapperComponent from '../components/WrapperComponent'

/** 
* Displays all of the single users created in the Dashboard map or 
* "No user selected" if you press the "User" link in Navbar"
*/

const UserComponent = (props) => {

    return (
        <div>
            {!props.user ?
                <WrapperComponent>
                    <p style={{ textAlign: "center" }}>No user selected!</p>
                </WrapperComponent>
                :
                <div>{props.children}</div>
            }
        </div>
    )
}

export default UserComponent