import React, { useState } from 'react';
import DashboardComponent from './DashboardComponent'
import UserComponent from './UserComponent'
import LoginComponent from './LoginComponent'
import { StoreContext } from './StoreContext'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"
import styles from '../styles/navBar.module.css'

function NavComponent() {
    const [admin, setAdmin] = useState(null)
    const [id, setId] = useState(null);
    const [user, setUser] = useState({})

    const store = {
        id: { get: id, set: setId },
        admin: { get: admin, set: setAdmin },
        user: { get: user, set: setUser }
    }

    return (
        <StoreContext.Provider value={store}>
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
                    <Route path="/user" component={UserComponent} />
                </Switch>
            </Router>
        </StoreContext.Provider>
    )
}

export default NavComponent