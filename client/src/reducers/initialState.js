export const initialAuthState = {
    isAuthenticated: false,
    user: {
        userId: 0
    }
};

export const initialHistoryState = {
    histories: [],
    pagination: {}
};

export const initialNotificationState = {
    pagination: {},
    notifications: []
};

export default {
    initialAuthState,
    initialHistoryState,
    initialNotificationState
}