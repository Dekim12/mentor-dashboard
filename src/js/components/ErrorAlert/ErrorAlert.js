import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setMentorName } from '../../store/actions';
import { sleep } from '../../utils';

import './ErrorAlert.css';

class ErrorAlert extends Component {
    componentDidMount = () => {
        const changeName = this.props.setMentorName;
        sleep(2000).then(() => {
            changeName(undefined);
        });
    };

    render() {
        return (
            <div className="error-window">
                <div className="error-alert">
                    <p>Sorry...</p>
                    <p>A mentor with that name does not exist.</p>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            setMentorName
        },
        dispatch
    );

export default connect(
    null,
    mapDispatchToProps
)(ErrorAlert);
