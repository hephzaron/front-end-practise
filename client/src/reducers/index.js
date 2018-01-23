import { combineReducers } from 'redux';
import flashMessage from './flashMessage';
import userAuth from './userAuth';

const reducers = combineReducers({
    flashMessage,
    userAuth
});

export default reducers;