import { isEmpty } from 'lodash';
import types from '../actions/types';
import { initialAuthState } from '../reducers/initialState';

const { SET_CURRENT_USER } = types;

/**
 * @description This handles user authentication
 * @param {object} state - redux state
 * @param {object} action - creates action
 * 
 * @returns {object} new state
 */

const authUser = (state = initialAuthState, action = {}) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                isAuthenticated: !isEmpty(action.user),
                user: action.user
            };
        default:
            return state;
    }
};

export default authUser;