import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activeNote, startDeleting } from '../../actions/notes';
import useForm from '../../hooks/useForm';
import NotesAppBar from './NotesAppBar';

const NotePage = () => {
    const dispatch = useDispatch();

    const {active} = useSelector(state => state.notes);

    const [formState, handlerForm, resetForm] = useForm(active);

    const {title, body} = formState;
    const notePageId = useRef(active.id);
    useEffect(() => {
        if (active.id !== notePageId.current) {
            resetForm(active);
            notePageId.current = active.id;
        }
    }, [active, resetForm]);

    useEffect(() => {
        dispatch(activeNote(formState.id, {...formState}));
    }, [formState, dispatch]);


    const handleDelete = () => {
        dispatch(startDeleting(active.id));
    }

    return (
        <div className="notes__main-content animate__animated animate__fadeIn animate__faster">
            <NotesAppBar />
            <div className="notes__content">
                <input
                    type="text"
                    autoComplete="off"
                    placeholder="Some title"
                    className="notes__title-input"
                    onChange={handlerForm}
                    name="title"
                    value={title}
                >
                </input>
                <textarea
                    placeholder="text..."
                    className="notes__textarea"
                    onChange={handlerForm}
                    name="body"
                    value={body}
                >
                </textarea>
                {
                    active.url &&
                    <div className="notes__image">
                        <img
                            src={active.url}
                            alt="house"
                        />
                    </div>
                    
                }
            </div>
            <button
                className="btn btn-danger"
                onClick={handleDelete}
            >
                Delete
            </button>
        </div>
    )
}

export default NotePage
