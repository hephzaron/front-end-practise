export const initialAuthState = {
    isAuthenticated: false,
    user: {
        userId: 0
    },
};

export const initialHistoryState = {
    histories: [],
    pagination: {}
};

export const initialNotificationState = {
    pagination: {},
    notifications: []
};
export const initialModalState = {
    modalType: null
};

export default {
    initialAuthState,
    initialHistoryState,
    initialNotificationState,
    initialModalState
}