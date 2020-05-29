import React from 'react';
import DashboardComponent from './DashboardComponent'
import UserComponent from './UserComponent'
import LoginComponent from './LoginComponent'
import UserScreen from './UserScreen'
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
                            <Link to="users">User</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <Switch>
                <Route path="/" exact render={props => <LoginComponent {...props} />} />
                <Route path="/login" exact render={props => <LoginComponent {...props} />} />
                <Route path="/dashboard" exact render={props => <DashboardComponent {...props} />} />
                <Route path="/users" exact render={props => <UserComponent {...props} />} />
                <Route path="/users:id" exact render={props => <UserScreen {...props} />} />
            </Switch>
        </Router>
    )
}

export default NavComponent