import { combineReducers } from 'redux';
import flashMessage from './flashMessage';
import auth from './userAuth';
import modal from './modal'

const reducers = combineReducers({
    flashMessage,
    modal,
    auth
});

export default reducers;