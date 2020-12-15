import React from 'react'
import { useSelector } from 'react-redux';

const CalendarEvent = ({event}) => {
    const {title, id, user} = event;
    const {activeEvent} = useSelector(state => state.calendar);
    return (
        <div className={(id === activeEvent?.id)? "event-active": ""}>
            <strong> {title} </strong>
            <span>- {user.name}</span>
        </div>
    )
}

export default CalendarEvent
