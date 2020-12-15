import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from "react-router-dom";
import { startChecking } from '../actions/auth';
import LoginPage from '../components/auth/LoginPage';
import CalendarPage from '../components/calendar/CalendarPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
  
const AppRouter = () => {

    const dispatch = useDispatch();
    const {checking, uid} = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(startChecking());
    }, [dispatch]);

    if (checking) {
        return (
            <div className="loading">
                <h5 >Loading...</h5>
            </div>
        ) 
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        exact
                        path="/login"
                        component={LoginPage}
                        isAuthenticated={!!uid}
                    />
                    <PrivateRoute
                        exact
                        path="/"
                        component={CalendarPage}
                        isAuthenticated={!!uid}
                    />
                    <Redirect to="/login" />
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter
