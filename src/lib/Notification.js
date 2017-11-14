import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import FaClose from 'react-icons/lib/fa/close';
import FaInfoCircle from 'react-icons/lib/fa/info-circle';
import FaCheckCircle from 'react-icons/lib/fa/check-circle';
import FaExclamationTriangle from 'react-icons/lib/fa/exclamation-triangle';
import FaMinusCircle from 'react-icons/lib/fa/minus-circle';

import * as NotificationActions from './actions/actions';
import './styles/notification.scss';

export class Notification extends Component {

    constructor(props) {
        super(props);
        this.state = {
            animatedClass: ''
        };
        this.removeMe = this.removeMe.bind(this);
    }

    componentDidMount() {
        setTimeout(() => this.setState({
            animatedClass: 'show'
        }), 0);
    }

    removeMe() {
        this.setState({animatedClass: ''});
        setTimeout(() => {
            this.props.actions.removeNotification(this.props.id);
        }, 1000);
    }

    render() {
        return (
            <div id={this.props.id} className={'notification-' + this.props.level + ' ' + this.state.animatedClass}>
                {this.props.level === 'error' && <FaMinusCircle className={'notification-sign'}/>}
                {this.props.level === 'success' && <FaCheckCircle className={'notification-sign'}/>}
                {this.props.level === 'info' && <FaInfoCircle className={'notification-sign'}/>}
                {this.props.level === 'warn' && <FaExclamationTriangle className={'notification-sign'}/>}
                <div className={'notification-body'}>
                    {this.props.title && <p className={'notification-title'}>{this.props.title}</p>}
                    {this.props.content}
                </div>
                <span onClick={this.removeMe} className={'notification-close'}>
                    <FaClose/>
                </span>
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