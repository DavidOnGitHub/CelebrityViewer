import {combineReducers} from 'redux';
import celebrities from './celebrityReducer';
import message from './messageReducer';
import control from './controlReducer';

export default combineReducers({
    celebrities,
    message,
    control
});