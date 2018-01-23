import axios from 'axios';
import types from './types';
import { addFlashMessage } from './flashMessage';

const { GET_NOTIFICATIONS } = types;

/**
 * @description Action creator when notifications have been fetched
 * @param {array} notifications - all notifications object
 * @returns {object} action
 */

export const fetchNotifications = (notifications) => ({
    type: GET_NOTIFICATIONS,
    ...notifications
});

/**
 * @description Make network request to get all notifications
 * @param {object} options -options for getting notifications
 * @returns {promise} Axios http response
 */

export const getNotifications = options => {
    dispatch => {
        //converts an object to query string
        const searchQuery = options ? new URLSearchParams(options) : null;
        //converts it to string
        const toQueryString = options ? searchQuery.toString() : '';
        return axios
            .get(`notifications?${toQueryString}`)
            .then(
                (response) => {
                    dispatch(
                        fetchNotifications({
                            notifications: response.data.notifications,
                            //pagination: response.data.pagination
                        });
                    );
                },
                (errors) => {
                    dispatch(
                        addFlashMessage({
                            type: 'error',
                            text: errors.response.data.message
                        })
                    );
                    return errors;
                }
            );
    }
};