import React from 'react'
import { useDispatch } from 'react-redux'
import { startDeleteEvent } from '../../actions/eventsCalendar';

const DeleteFabButton = () => {

    const dispatch = useDispatch();

    const handlerDelete = () => {
        dispatch(
            startDeleteEvent()
        );
    }
    return (
        <button
            className="btn btn-danger fab-danger"
            onClick={handlerDelete}
        >
            <i className="fas fa-trash"></i>
            <span>Delete</span>
        </button>
    )
}

export default DeleteFabButton
