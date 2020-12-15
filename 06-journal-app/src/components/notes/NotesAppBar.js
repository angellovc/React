import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote, startUploading } from '../../actions/notes';

const NotesAppBar = () => {

    const dispatch = useDispatch();
    const {active:currentNote} = useSelector(state => state.notes); 
    const handleSaveNote = () => {
        dispatch(
            startSaveNote(currentNote)
        );
    }

    const handlePictureUpload = () => {
        document.querySelector("#fileSelector").click();
    }

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            dispatch(
                startUploading(file)
            );
        }
    }

    return (
        <div className="notes__appbar">
            <span>28 de Agosto 2020</span>
            <input
                id="fileSelector"
                type="file"
                name="file"
                style={{display: "none"}}
                onChange={handleFileChange}
            />
            <div>
                <button
                    className="btn"
                    onClick={handlePictureUpload}
                >
                    Picture
                </button>
                <button
                    className="btn"
                    onClick={handleSaveNote}
                >
                    Save
                </button>
            </div>
        </div>
    )
}

export default NotesAppBar