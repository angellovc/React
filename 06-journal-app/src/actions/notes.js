import { db } from "../firebase/firebaseConfig";
import Swal from 'sweetalert2';
import { loadNotes } from "../hepers/loadNotes";
import { types } from "../types/types";
import { fileUpload } from "../hepers/fileUpload";

export const addNewNote = (id, note) => ({
    type: types.notesAddEntry,
    payload: {
        id,
        ...note
    }

})

export const startNewNote = () => {

    return async (dispatch, getState) => {
        const {uid} = getState().auth;
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }
        const docRef = await db.collection(`${uid}/journal/notes`).add(newNote);
        dispatch( activeNote(docRef.id, newNote) );
        dispatch(addNewNote(docRef.id, newNote));
    }
}

export const activeNote = (id, note) => ({
    type: types.notesActive,
    payload: {
        id,
        ...note
    }
})

export const desactiveNote = () => ({
    type: types.notesDesactive
})

export const startLoadinNotes = (uid) => {
    return async (dispatch) => {
        const notes = await loadNotes(uid);
        dispatch( setNotes(notes) );
    }

}

export const setNotes = (notes) => ({
    type: types.notesLoad,
    payload: notes,
})

export const startSaveNote = (note) => {
    return async (dispatch, getState) => {
        if (!note.url) {
            delete note.url
        }
        const {uid} = getState().auth;
        const noteToFireStore = {...note};
        delete noteToFireStore.id;
        await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFireStore);
        dispatch(refreshLocalNote(note.id, {...noteToFireStore}));
        Swal.fire('Saved', note.title, 'success');
    }
}

export const refreshLocalNote = (id, note) => ({
    type: types.notesUpdated,
    payload: {
        id,
        ...note
    }
})

export const startUploading = (file) => {
    return async (dispatch, getState) => {
        const {active: activeNote} = getState().notes;
        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait...',
            allowOutsideClick: false,
            showConfirmButton: false,
            willOpen: () => {
                Swal.showLoading();
            }
        })
        const fileUrl = await fileUpload(file);
        activeNote.url = fileUrl;
        dispatch(startSaveNote(activeNote));
        Swal.close();
    }
}

export const startDeleting = (id) => {
    return async (dispatch, getState) => {
        const {uid} = getState().auth;
        await db.doc(`${uid}/journal/notes/${id}`).delete();
        dispatch(
            deleteNote(id)
        );
    }
}

export const deleteNote = (id) => ({
    type: types.notesRemove,
    payload: {id: id}
})

export const noteLogout = () => ({
    type: types.notesLogoutClean
})