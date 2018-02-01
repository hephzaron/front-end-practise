import types from 'Actions/types';

const { ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE } = types;

/**
 * @description creates action to add flash messages
 * @param {object} message payload
 * @returns {object} this returns action creator
 */

const addFlashMessage = (message) => ({
    type: ADD_FLASH_MESSAGE,
    message
})

const deleteFlashMessage = () => ({
    type: DELETE_FLASH_MESSAGE
})

export default { addFlashMessage, deleteFlashMessage };