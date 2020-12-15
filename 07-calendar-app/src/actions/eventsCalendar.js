import Swal from "sweetalert2";
import { fetchWithToken } from "../helpers/fetch";
import { prepareEvents } from "../helpers/prepareEvents";
import types from "../types/types";

export const startAddNewEvent = (event) => {
    return async (dispatch, getState) => {

        const {uid, name} = getState().auth;

        try {
            const response = await fetchWithToken('events', event, 'POST');
            const bodyResponse = await response.json();
            if (bodyResponse.ok) {
                event.id = bodyResponse.event.id;
                event.user = {
                    _id: uid,
                    name: name
                }
                dispatch(
                    eventAddNew(event)
                );
            }
        } catch (error) {
            console.log(error);
        }
    }
}

export const startLoadingEvent = () => {
    return async (dispatch) => {
        try {
            const response = await fetchWithToken('events');
            const bodyResponse = await response.json();
            const events = prepareEvents(bodyResponse.event);
            dispatch(
                eventLoaded(events)
            )
        } catch (error) {
            console.log(error);
        }
    }
}

export const startUpdateEvent = (event) => {
    return async (dispatch) => {
        try {
            const response = await fetchWithToken(`events/${event.id}`, event, 'PUT');
            const bodyResponse = await response.json();
            if (bodyResponse.ok) {
                dispatch(
                    eventUpdate(event)
                )
            } else {
                Swal.fire('Error', bodyResponse.msg, 'error');
            }
        } catch (error) {
            console.log(error);
        }
    }
}

export const startDeleteEvent = () => {
    return async (dispatch, getState) => {
        const {id} = getState().calendar.activeEvent;
        try {
            const response = await fetchWithToken(`events/${id}`, {}, 'DELETE');
            const bodyResponse = await response.json();
            if (bodyResponse.ok) {
                dispatch(
                    eventDelete()
                )
            } else {
                Swal.fire('Error', bodyResponse.msg, 'error');
            }
        } catch (error) {
            console.log(error);
        }
    }
}

const eventLoaded = (events) => ({
    type: types.eventLoaded,
    payload: events
})

const eventAddNew = (event) => ({
    type: types.eventAddNew,
    payload: event
});

const eventUpdate = (event) => ({
    type: types.eventUpdate,
    payload: event
});

const eventDelete = () => ({
    type: types.eventDelete
});


export const eventSetActive = (event) => ({
    type: types.eventSetActive,
    payload: event
});

export const eventClearActive = () => ({
    type: types.eventClearActive
});


export const eventClearOnLogout = () => ({
    type: types.eventClearOnLogout
})