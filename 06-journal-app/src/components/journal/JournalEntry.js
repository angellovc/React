import React from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { activeNote, desactiveNote } from '../../actions/notes';

const JournalEntry = ({id, date, title, body, url}) => {

    const noteDate = moment(date);
    const {active} = useSelector(state => state.notes);
    const dispatch = useDispatch();
    const handlerActive = () => {
        if (active && active.id === id) {
            dispatch( desactiveNote() );
        } else {
            dispatch( activeNote(id, {id, date, title, body, url}) );
        }
    }

    return (
        <div
            className={
                id === active?.id?
                    'journal__entry pointer journal__entry-active':
                    'journal__entry pointer'
        }
            onClick={handlerActive}
        >
            <div style={{display: "flex"}}>
            {
                url &&
                <div
                    className="journal__entry-picture"
                    style={{
                        backgroundSize: "cover",
                        backgroundImage: `url(${url})`
                    }}
                ></div>
            }
            <div className="journal__entry-body" style={{overflow: "hidden"}}>
                <p className="journal__entry-title">
                    {title}
                </p>
                <p className="journal__entry-content">
                    {body}
                </p>
            </div>
            </div>
            <div className="journal__entry-date-box">
                <span>{noteDate.format('dddd')}</span>
                <h4>{noteDate.format('Do')}</h4>
            </div>
        </div>
    )
}

export default JournalEntry
