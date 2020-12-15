import types from '../types/types';

// {
//     id: new Date().getDate(),
//     title: 'Boss birth',
//     start: moment().toDate(),
//     end: moment().add(2, 'hour').toDate(),
//     bgcolor: '#fafafa',
//     user: {
//         _id: '123',
//         name: 'Angello',
//     }
// }

const initialState = {
    events: [],
    activeEvent: null
}

const calendarReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.eventSetActive:
            return {
                ...state,
                activeEvent: action.payload
            };
        case types.eventAddNew:
            return {
                ...state,
                events: [...state.events, action.payload]
            };
        case types.eventClearActive:
            return {
                ...state,
                activeEvent: null
            }
        case types.eventUpdate:
            return {
                ...state,
                events: state.events.map(
                    event => (event.id === action.payload.id) ? action.payload : event 
                )
            }
        case types.eventDelete:
            console.log(action);
            return {
                ...state,
                events: state.events.filter(
                    event => (event.id !== state.activeEvent.id) 
                ),
                activeEvent: null
            }
        case types.eventLoaded:
            return {
                ...state,
                events: [...action.payload]
            }
        case types.eventClearOnLogout:
            return {...initialState}
        default:
            return state;
    }
}

export default calendarReducer;