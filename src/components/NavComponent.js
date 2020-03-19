import React from 'react';
import DashboardComponent from './DashboardComponent'
import SingleUserComponent from './SingleUserComponent'
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
            <Route path="/" exact component={LoginComponent} />
                <Route path="/login" component={LoginComponent} />
                <Route path="/dashboard" component={DashboardComponent} />
                <Route path="/user" component={SingleUserComponent} />
            </Switch>
        </Router>
    )
}

export default NavComponent