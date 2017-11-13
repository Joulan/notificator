import React, {Component} from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import NotificationContainer from '../lib/NotificationContainer';
import * as NotificationActions from '../lib/actions/actions'


export class NotifierComponent extends Component {
    render() {
        return (
            <div>
                <button onClick={() => {
                    let titles = ['Пример заголовка', 'Заголовок типичный', 'Zaglavie'];
                    let messages = ['Это фиаско, братан', 'Ку-ку, ёпт', 'Дратути', 'Датвиданиня'];
                    let levels = ['error', 'info', 'success'];
                    this.props.actions.addNotification(undefined, levels[Math.floor(Math.random() * levels.length)], titles[Math.floor(Math.random() * titles.length)], messages[Math.floor(Math.random() * messages.length)]);
                }}>Send Random Notification
                </button>
                <NotificationContainer/>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(NotificationActions, dispatch)
    };
}

export default connect(null, mapDispatchToProps)(NotifierComponent)