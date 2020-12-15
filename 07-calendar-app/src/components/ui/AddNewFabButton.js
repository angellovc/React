import React from 'react';
import { useDispatch } from 'react-redux';
import { eventClearActive } from '../../actions/eventsCalendar';
import { uiOpenModal } from '../../actions/ui';

const AddNewFabButton = () => {

    const dispatch = useDispatch();
    const handlerOpenModal = () => {
        dispatch(
            eventClearActive()
        );
        dispatch(
            uiOpenModal()
        );
    }

    return (
        <button
            className="btn btn-primary fab"
            onClick={handlerOpenModal}
        >
            <i className="fas fa-plus"></i>
        </button>
    )
}

export default AddNewFabButton
