/*
    Event Routes
    /api/events
*/

const {
    getEvents,
    createEvent,
    updateEvent,
    deleteEvent
} = require("../controllers/eventsController");
const {Router} = require('express');
const {check} = require('express-validator');
const validateJWT = require("../middlewares/validateJWT");
const validateFields = require("../middlewares/validateFields");
const isDate = require("../helpers/isDate");

/* CRUD of the calendar application */
const router = Router();

/* Each request needs to have a JWT, next line is used to 
secure that token is present when a request below is made

router will use the validateJWT function to validate every
action below of it
*/
router.use(validateJWT);

// get events
router.get('/', getEvents);

// create a new event
router.post(
    '/',
    [
        check('title', 'Title is mandatory').not().isEmpty(),
        check('start', 'Start Date is mandatory').custom(isDate),
        check('end', 'Start Date is mandatory').custom(isDate),
        validateFields
    ],
    createEvent
);

//update event
router.put('/:id', updateEvent);

//delete event
router.delete('/:id', deleteEvent);

module.exports = router;
