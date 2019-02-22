import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fb } from './firebase.service';
import { setData, setMentorName, setGitName } from './js/store/actions';
import { isNameExist, fetchData } from './js/appLogic';
import {
    MentorSearch,
    ErrorAlert,
    ResultsTable,
    Spinner
} from './js/components';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentSearchContent: null
        };
    }

    static getDerivedStateFromProps = (props, state) => {
        const possibleName = props.mentorName;
        const data = props.data;

        if (possibleName === undefined) {
            return { ...state, currentSearchContent: null };
        } else if (isNameExist(possibleName, data)) {
            return {
                ...state,
                currentSearchContent: (
                    <ResultsTable
                        mentorName={possibleName.toLowerCase()}
                        data={data}
                    />
                )
            };
        } else if (!isNameExist(possibleName, data)) {
            return { ...state, currentSearchContent: <ErrorAlert /> };
        }
    };

    componentDidMount = () => {
        fetchData(this.props.setData);
    };

    login = () => {
        fb.login()
            .then(result => {
                const user = result.user.displayName;
                this.props.setGitName(user);
                this.props.setMentorName(user);
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorCode, errorMessage);
            });
    };

    render() {
        const currentContent = this.state.currentSearchContent;

        return (
            <div className="app">
                <h1>Mentor dashboard</h1>
                <MentorSearch />
                <button onClick={this.login} className="authorization">
                    <i className="fa fa-github fa-2x" aria-hidden="true" />
                </button>
                {currentContent}
                {this.props.indicator ? <Spinner /> : null}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    mentorName: state.mentorName,
    data: state.data,
    indicator: state.isLoading
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            setData,
            setMentorName,
            setGitName
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
