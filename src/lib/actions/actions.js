import {ADD_NOTIFICATION, REMOVE_NOTIFICATION, REMOVE_ALL_NOTIFICATIONS} from '../constants/constants'

export function addNotification(id, level, title, content) {
    return (dispatch) => {
        dispatch({
            type: ADD_NOTIFICATION,
            payload: {
                id: id || Date.now(),
                level: level,
                title: title,
                content: content
            }
        })
    }
}

export function removeNotification(id) {
    return (dispatch) => {
        dispatch({
            type: REMOVE_NOTIFICATION,
            payload: {
                id: id
            }
        })
    }
}

export function removeAllNotifications() {
    return (dispatch) => {
        dispatch({
            type: REMOVE_ALL_NOTIFICATIONS
        })
    }
}
