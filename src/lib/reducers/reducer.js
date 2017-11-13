import {ADD_NOTIFICATION, REMOVE_NOTIFICATION, REMOVE_ALL_NOTIFICATIONS} from '../constants/constants'

const initialState = {};

// TODO redo
export default function notifierReducer(state = initialState, action) {

    switch (action.type) {
        case ADD_NOTIFICATION:
            return [
                ...state,
                {
                    id: action.payload.id,
                    level: action.payload.level,
                    title: action.payload.title,
                    content: action.payload.content
                }
            ];
        case REMOVE_NOTIFICATION:
            return state.filter(notification => {
                return notification.id !== action.payload.id;
            });
        case REMOVE_ALL_NOTIFICATIONS:
            return [];

        default:
            return [];
    }

}
