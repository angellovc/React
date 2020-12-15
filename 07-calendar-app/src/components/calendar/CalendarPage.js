import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Calendar, momentLocalizer} from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import Navbar from '../ui/Navbar';
import CalendarEvent from './CalendarEvent';
import CalendarModal from './CalendarModal';
import { uiOpenModal } from '../../actions/ui';
import { eventClearActive, eventSetActive, startLoadingEvent } from '../../actions/eventsCalendar';
import AddNewFabButton from '../ui/AddNewFabButton';
import DeleteFabButton from '../ui/DeleteFabButton';

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const localizer = momentLocalizer(moment) // or globalizeLocalizer


const CalendarPage = () => {

    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');

    const dispatch = useDispatch();

    const {events, activeEvent} = useSelector(state => state.calendar);
    const {uid} = useSelector(state => state.auth);

    useEffect(() => {
        dispatch(
            startLoadingEvent()
        )
    }, [dispatch]);

    const onDoubleClick = (event) => {
        dispatch(
            uiOpenModal()
        );
    }
    const onSelectEvent = (event) => {
        dispatch(
            eventSetActive(event)
        );
    }
    const onViewChange = (event) => {
        setLastView(event);
        localStorage.setItem('lastView', event);
    }


    const eventStyleGetter = (event, start, end, isSlected) => {
        const style = {
            backgroundColor: (uid === event.user._id)? '#367CF7': '#465660',
            borderRadius: '0px',
            opacity: 0.8,
            display: 'block',
            color: 'white',
        }
        return {style}
    }

    const onSelectSlot = (event) => {
        dispatch(
            eventClearActive()
        );
    }

    return (
        <div className="calendar-page">
            <Navbar />

            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                eventPropGetter={eventStyleGetter}
                components={{
                    event: CalendarEvent
                }}
                onSelectSlot={onSelectSlot}
                selectable={true}
                view={lastView}
                onDoubleClickEvent={onDoubleClick}
                onSelectEvent={onSelectEvent}
                onView={onViewChange}
                
            />

            <CalendarModal />
            {
                (activeEvent) && <DeleteFabButton />
            }
            <AddNewFabButton />
        </div>
    )
}

export default CalendarPage
