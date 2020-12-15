import { types } from "../types/types";

const initialState = {
    notes: [],
    active: null,
}

export const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.notesActive:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }
        case types.notesLoad:
            return {
                ...state,
                notes: [
                    ...action.payload
                ]
            }
        case types.notesDesactive:
            return {
                ...state,
                active: null
            }
        case types.notesUpdated:
            return {
                ...state,
                notes: state.notes.map(
                    note => note.id === action.payload.id? action.payload : note
                )
            }
        case types.notesRemove:
            return {
                ...state,
                active: null,
                notes: state.notes.filter(note => note.id !== action.payload.id) 
            }
        case types.notesAddEntry:
            return {
                ...state,
                notes: [action.payload, ...state.notes]
            }
        case types.notesLogoutClean:
            return {
                ...state,
                active: null,
                notes: []
            }
        default:
            return state;
    }
}
