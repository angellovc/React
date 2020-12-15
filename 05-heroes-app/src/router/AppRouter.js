import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
} from "react-router-dom";
import AuthContext from '../auth/AuthContext';
import LoginPage from '../components/login/LoginPage';
import DashBoardRoutes from './DashBoardRoutes';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AppRouter = () => {
    const {user: {logged}} = useContext(AuthContext);
    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        exact
                        path="/login"
                        component={LoginPage}
                        isAuthenticated={logged}
                    />
                    <PrivateRoute
                        path="/"
                        component={DashBoardRoutes}
                        isAuthenticated={logged}
                    />
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter
