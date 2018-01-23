/**
 * @description sets all immutable types for pure redux function
 */
import mirrorKeys from '../utils/mirrorKeys'

const actions = [
    'ADD_FLASH_MESSAGE',
    'DELETE_FLASH_MESSAGE',
    'SET_CURRENT_USER',
    'UNSET_CURRENT_USER',
    'GET_NOTIFICATIONS'
]

export default mirrorKeys(actions);