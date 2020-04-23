import React from 'react';
import DashboardComponent from './DashboardComponent'
import UserComponent from './UserComponent'
import LoginComponent from './LoginComponent'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"
import styles from '../styles/navBar.module.css'

function NavComponent() {
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
                            <Link to="user">User</Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <Switch>
                <Route path="/" exact render={props => <LoginComponent {...props} />} />
                <Route path="/login" render={props => <LoginComponent {...props} />} />
                <Route path="/dashboard" render={props => <DashboardComponent {...props} />} />
                <Route path="/user" render={props => <UserComponent {...props} />} />
            </Switch>
        </Router>
    )
}

export default NavComponent