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
    'SET_BOOKS',
    'ADD_BOOK',
    'BOOK_DELETED',
    'BOOK_FETCHED',
    'BOOK_EDITED',
    'BORROWED_FETCHED',
    'SET_BORROWED_BOOKS',
    'SET_UNRETURNED_BOOKS',
    'BORROWED_RETURNED',
    'AUTHOR_ASSIGNED',
    'SET_AUTHOR',
    'AUTHOR_FETCHED',
    'ADD_AUTHOR',
    'AUTHOR_EDITED',
    'AUTHOR_DELETED',
    'SET_GENRES',
    'ADD_GENRE'
]

export default mirrorKeys(actions);