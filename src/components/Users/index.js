import React from 'react';
//COMPONENTS
import Wrapper from '../Wrapper';

/** 
* Displays all of the single users created in the Dashboard map or 
* "No user selected" if you press the "User" link in Navbar"
*/

const Users = (props) => <div>{!props.user ? <Wrapper><p style={{ textAlign: "center" }}>No user selected!</p></Wrapper> : <>{ props.children }</>}</div>

export default Users;