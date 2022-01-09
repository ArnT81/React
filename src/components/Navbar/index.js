import React from 'react';
import Dashboard from '../Dashboard';
import Users from '../Users';
import Login from '../Login';
import UserScreen from '../UserScreen';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
//STYLES
import styles from './navbar.module.css';

/** 
* Logic for the apps Routing
*/

function Navbar() {
    return (
        <Router>
            <div className={styles.NavBar}>
                <nav>
                    <ul>
                        <li className={styles.NavLi}>
                            <Link to="/login">Login</Link>
                        </li>
                        <li className={styles.NavLi}>
                            <Link to="dashboard">Dashboard</Link>
                        </li>
                        <li className={styles.NavLi}>
                            <Link to="users">User</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <Switch>
                <Route path="/" exact render={props => <Login {...props} />} />
                <Route path="/login" exact render={props => <Login {...props} />} />
                <Route path="/dashboard" exact render={props => <Dashboard {...props} />} />
                <Route path="/users" exact render={props => <Users {...props} />} />
                <Route path="/user:id" exact render={props => <UserScreen {...props} />} />
            </Switch>
        </Router>
    )
}

export default Navbar;