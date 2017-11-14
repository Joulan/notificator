import React, {Component} from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';

import NotificationContainer from '../lib/NotificationContainer';
import * as NotificationActions from '../lib/actions/actions'


export class NotifierComponent extends Component {
    render() {
        return (
            <div>
                <button onClick={() => {
                    let titles = ['Пример заголовка', 'Заголовок типичный', 'Zaglavie'];
                    let messages = ['Это фиаско, братан', 'Ку-ку, ёпт', 'Дратути', <Link to={'google.com'}><a>To Google</a></Link>];

                    let levels = ['error', 'info', 'success', 'warn'];
                    this.props.actions.addNotification({
                        level: levels[Math.floor(Math.random() * levels.length)],
                        title: titles[Math.floor(Math.random() * titles.length)],
                        content: messages[Math.floor(Math.random() * messages.length)]
                    });
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