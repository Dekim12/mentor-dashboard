import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setMentorName, setGitName } from '../../store/actions';
import { Button } from '../../components';

import './MentorSearch.css';

class MentorSearch extends Component {
    constructor(props) {
        super(props);

        this.searchQuery = '';
        this.inputElem = React.createRef();
    }

    addSearchQuery = event => {
        let currentValue = event.target.value;
        this.searchQuery = currentValue.replace(/^\s+|\s+$/g, '');
    };

    findCertainData = event => {
        event.preventDefault();
        this.props.setMentorName(this.searchQuery);
    };

    shouldComponentUpdate = nextProps => {
        if (nextProps.gitName) {
            const searchShape = this.inputElem.current;
            searchShape.value = nextProps.gitName;
            this.props.setGitName(undefined);
            this.searchQuery = nextProps.gitName;
        }
        return false;
    };

    componentDidMount = () => {
        const mentorNameInStore = localStorage.getItem('mentorName');
        if (mentorNameInStore) {
            const searchShape = this.inputElem.current;
            searchShape.value = mentorNameInStore;
            this.searchQuery = mentorNameInStore;
        }
    };

    render() {
        return (
            <div className="mentor-search" onSubmit={this.findCertainData}>
                <form>
                    <input
                        type="text"
                        placeholder="Mentor's GitHub name"
                        autoFocus
                        maxLength="50"
                        onChange={this.addSearchQuery}
                        ref={this.inputElem}
                    />
                </form>
                <Button
                    content="Search"
                    className="button-for-search"
                    makeSomeСhanges={this.findCertainData}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    gitName: state.gitName
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            setMentorName,
            setGitName
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MentorSearch);
