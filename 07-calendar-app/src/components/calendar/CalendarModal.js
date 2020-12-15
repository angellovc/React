import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Modal from 'react-modal';
import moment from 'moment';
import DateTimePicker from 'react-datetime-picker';
import Swal from 'sweetalert2';
import { uiCloseModal } from '../../actions/ui';
import { eventClearActive, startAddNewEvent, startUpdateEvent } from '../../actions/eventsCalendar';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
};
Modal.setAppElement('#root')
const now = moment().minutes(0).seconds(0).add(1, 'hours');
const initialEvent = {
    title: '',
    notes: '',
    start: now.toDate(),
    end: now.add(1, 'hours').toDate(),
}



const CalendarModal = () => {

    /* States */
    const [startDate, setStartDate] = useState(now.toDate());
    const [endDate, setEndtDate] = useState(now.add(1, 'hours').toDate());
    const [formValues, setFormValues] = useState(initialEvent);

    /* Desestructured objects */
    const {title, notes, start, end} = formValues;
    
    /* Redux States */
    const {modalOpen} = useSelector(state => state.ui);
    const {activeEvent} = useSelector(state => state.calendar);

    /* Effects */
    useEffect(() => {
        if (activeEvent) {
            setFormValues(activeEvent);
        } else {
            setFormValues(initialEvent);
        }
    }, [activeEvent]);

    /* Redux operations or Redux handlers */
    const dispatch = useDispatch();
    const closeModal = () => {
        dispatch(
            uiCloseModal()
        );
        dispatch(
            eventClearActive()
        );
        setFormValues(initialEvent);
    }

    /* Handlers */
    const handlerChangeForm = ({target}) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        })
    }

    const handleStartDate = (event) => {
        setStartDate(event);
        setFormValues({
            ...formValues,
            start: event
        });
    }
    const handlerEndDate = (event) => {
        setEndtDate(event);
        setFormValues({
            ...formValues,
            end: event
        });
    }

    const handlerSubmitForm = (event) => {
        event.preventDefault();
        const momentStart = moment(start);
        const momentEnd = moment(end);

        if (momentStart.isSameOrAfter(momentEnd)) {
            Swal.fire('Error', 'End Date must be greater than Start Date', 'error');
            return;
        } else if (title.trim().length < 2) {
            Swal.fire('Error', 'Title is mandatory', 'error');
            return;
        }
        if (activeEvent) {
            dispatch(
                startUpdateEvent(formValues)
            )
        } else {
            dispatch(
                startAddNewEvent(formValues)
            );
        }
        closeModal();
    }

    return (
        <Modal
            className="modal"
            overlayClassName="modal-fondo"
            closeTimeoutMS={200}
            isOpen={modalOpen}
            //   onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <h1>{(activeEvent)? "Edit Event": "New Event"}</h1>
            <hr />
            <form
                className="container"
                onSubmit={handlerSubmitForm}
            >
                
                <div className="form-group">
                    <label>Start Date</label>
                    <DateTimePicker
                        className="form-control"
                        onChange={handleStartDate}
                        value={startDate}
                    />
                </div>
                
                <div className="form-group">
                    <label>End Date</label>
                    <DateTimePicker
                        className="form-control"
                        minDate={startDate}
                        onChange={handlerEndDate}
                        value={endDate}
                    />
                </div>
                <hr />
                <div className="form-group">
                    <label>Titulo y notas</label>
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder="Título del evento"
                        name="title"
                        autoComplete="off"
                        onChange={handlerChangeForm}
                        value={title}
                    />
                    <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                </div>
                
                <div className="form-group">
                    <textarea 
                        type="text" 
                        className="form-control"
                        placeholder="Notas"
                        rows="5"
                        name="notes"
                        onChange={handlerChangeForm}
                        value={notes}
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                </div>
                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>
            </form>
        </Modal>
    )
}

export default CalendarModal
