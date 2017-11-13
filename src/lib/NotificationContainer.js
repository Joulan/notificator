import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Notification from './Notification';
import * as NotificationActions from './actions/actions'
import './styles/notification.scss';

class NotificationContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log(this);
        return (
            <div className='notification-container'>
                {!!this.props.notifications && this.props.notifications.map(item => {
                    return <Notification key={item.id} id={item.id} level={item.level} title={item.title} content={item.content}/>
                })}
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        notifications: state.notifierReducer || []
    };
}


function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(NotificationActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationContainer);