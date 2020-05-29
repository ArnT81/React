import React from 'react'
// import { useParams } from 'react-router-dom'
import WrapperComponent from '../components/WrapperComponent'

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