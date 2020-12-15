/* rootReducer is the combination of all my app reducers */
import {combineReducers} from 'redux';
import authReducer from './authReducer';
import calendarReducer from './calendarReducer';
import uiReducer from './uiReducers';


const rootReducer = combineReducers({
    ui: uiReducer,
    calendar: calendarReducer,
    auth: authReducer
})

export default rootReducer;
