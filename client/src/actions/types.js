/**
 * @description sets all immutable types for pure redux function
 */
import mirrorKeys from 'Utils/mirrorKeys'

const actions = [
    'ADD_FLASH_MESSAGE',
    'DELETE_FLASH_MESSAGE',
    'SET_CURRENT_USER',
    'UNSET_CURRENT_USER',
    'GET_NOTIFICATIONS',
    'SHOW_MODAL',
    'HIDE_MODAL'
]

export default mirrorKeys(actions);