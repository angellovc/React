import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { startLogout } from '../../actions/auth';
import { eventClearOnLogout } from '../../actions/eventsCalendar';

const Navbar = () => {

    const {name} = useSelector(state => state.auth);

    const dispatch = useDispatch();


    const handlerLogout = () => {
        dispatch(
            startLogout()
        );
        dispatch(
            eventClearOnLogout()
        );
    }
    return (
        <div className="navbar navbar-dark bg-dark mb-4">
            <span className="navbar-brand">
                {name}
            </span>
            <button
                className="btn btn-outline-danger"
                onClick={handlerLogout}
            >
                <i className="fas fa-sign-out-alt" />
                <span> Exit</span>
            </button>
        </div>
    )
}

export default Navbar
