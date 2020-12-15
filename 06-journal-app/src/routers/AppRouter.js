import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
  } from "react-router-dom";
import JournalPage from '../components/journal/JournalPage';
import AuthRouter from './AuthRouter';
import {firebase} from '../firebase/firebaseConfig';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import { startLoadinNotes } from '../actions/notes';

const AppRouter = () => {

    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        firebase.auth().onAuthStateChanged(async (user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);
                dispatch(startLoadinNotes(user.uid));
            } else {
                setIsLoggedIn(false);
            }
            setChecking(false);
        });
    }, [dispatch, setChecking, setIsLoggedIn])

    if (checking) {
        return (
            <div className="loading">
                <h2>Loading...</h2>
            </div> 
        )
    }

    return (
        <Router>
            <div>
                <Switch>
                <PublicRoute
                    isAuthenticated={isLoggedIn}
                    path="/auth"
                    component={AuthRouter}
                />
                <PrivateRoute
                    exact
                    isAuthenticated={isLoggedIn}
                    path="/"
                    component={JournalPage}
                />
                <Redirect to="/auth/login" />
                </Switch>
            </div>
      </Router>
    )
}

export default AppRouter
