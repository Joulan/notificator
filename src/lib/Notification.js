import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as NotificationActions from './actions/actions';
import './styles/notification.scss';

export class Notification extends Component {

    constructor(props) {
        super(props);
        console.log(this.props);
    }

    render() {
        return (
            <div id={this.props.id} className={'notification'} onClick={() => {
                this.props.actions.removeNotification(this.props.id);
            }}>
                <div className={'notification-body-' + this.props.level}>
                    {this.props.title + ': ' + this.props.content}
                </div>
            </div>
        );
    }

}

Notification.PropTypes = {
    id: PropTypes.number.isRequired,
    isPermanent: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([
        PropTypes.string,
        Component
    ]).isRequired
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(NotificationActions, dispatch)
    };
}

export default connect(null, mapDispatchToProps)(Notification);