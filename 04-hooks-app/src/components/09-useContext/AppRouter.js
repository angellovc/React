import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import AboutPage from './AboutPage';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import NavBar from './NavBar';

const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar />
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/about" component={AboutPage} />
                        <Route exact path="/login" component={LoginPage} />
                        <Redirect to="/" />
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default AppRouter
