const {response} = require('express');
const Event = require('../models/EventModel');
const jwt = require('jsonwebtoken');

const getEvents = async (request, response = response) => {
    const events = await Event.find().populate('user', 'name');
    return response.json({
        ok: true,
        event: events
    });
    // const token = request.header('x-web-token');
    // try {
    //     const payload = jwt.verify(
    //          token,
    //          process.env.SECRET_JWT_SEED
    //     );
    //     const {uid} = payload;
    //     const events = await Event.find().where('user').equals(uid).populate('user', 'name');
    //     return response.json({
    //         ok: true,
    //         event: events
    //     });
    // } catch (error) {
    //     console.log(error);
    //     return response.status(500).json({
    //         ok: false,
    //         msg: 'Contact the admin'
    //     });    
    // }
}

const createEvent = async (request, response = response) => {

    const event = new Event(request.body);
    try {
        event.user = request.uid;
        const savedEvent = await event.save();
        return response.json({
            ok: true,
            event: savedEvent
        });
    } catch (error) {
        console.log(error);
        return response.status(500).json({
            ok: false,
            msg: 'Contact the admin'
        });
    }
}

const updateEvent = async (request, response = response) => {

    const eventId = request.params.id;
    const uid = request.uid;

    try {
        const event = await Event.findById(eventId);
        if (!event) {
            return response.status(404).json({
                ok: false,
                msg: 'There is no event related with this id'
            });
        }
        if (event.user.toString() !== uid) {
            return response.status(401).json({
                ok: false,
                msg: 'User dont have privileges to edit this event'
            });
        }
        const newEvent = {
            ...request.body,
            user: uid
        }
        const updatedEvent = await Event.findByIdAndUpdate(eventId, newEvent, {new:true});
        return response.json({
            ok: true,
            event: updatedEvent
        });


    } catch (error) {
        console.log(error);
        return response.status(500).json({
            ok: false,
            msg: 'Contact the admin'
        });
    }
}

const deleteEvent = async (request, response = response) => {

    const eventId = request.params.id;
    const uid = request.uid;

    try {
        const event = await Event.findById(eventId);
        if (!event) {
            return response.status(404).json({
                ok: false,
                msg: 'There is no event related with this id'
            });
        }
        if (event.user.toString() !== uid) {
            return response.status(401).json({
                ok: false,
                msg: 'User dont have privileges to edit this event'
            });
        }
        await Event.findByIdAndDelete(eventId);
        return response.json({
            ok: true,
            event: {}
        });
    } catch (error) {
        console.log(error);
        return response.status(500).json({
            ok: false,
            msg: 'Contact the admin'
        });
    }
}

module.exports = {
    getEvents,
    createEvent,
    updateEvent,
    deleteEvent
}

