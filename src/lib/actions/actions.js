import {ADD_NOTIFICATION, REMOVE_NOTIFICATION, REMOVE_ALL_NOTIFICATIONS} from '../constants/constants'

export function addNotification(params) {
    return (dispatch) => {
        dispatch({
            type: ADD_NOTIFICATION,
            payload: {
                id: params.id || Date.now(),
                level: params.level,
                title: params.title,
                content: params.content
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
