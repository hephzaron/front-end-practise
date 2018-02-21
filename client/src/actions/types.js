/**
 * @description sets all immutable types for pure redux function
 */
import mirrorKeys from 'Utils/mirrorKeys'

const actions = [
    'ADD_FLASH_MESSAGE',
    'REMOVE_FLASH_MESSAGE',
    'SET_CURRENT_USER',
    'UNSET_CURRENT_USER',
    'GET_NOTIFICATIONS',
    'SHOW_MODAL',
    'HIDE_MODAL',
    'ADD_BOOK',
    'ADD_BOOK_SUCCESS',
    'DELETE_BOOK',
    'DELETE_BOOK_SUCCESS',
    'FETCH_BOOK',
    'FETCH_BOOK_SUCCESS',
    'BORROW_BOOK',
    'BORROW_BOOK_SUCCESS',
    'RETURN_BOOK',
    'RETURN_BOOK_SUCCESS'
]

export default mirrorKeys(actions);