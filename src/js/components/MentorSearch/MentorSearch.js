import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setMentorName } from '../../store/actions';
import { Button } from '../../components';

import './MentorSearch.css';

class MentorSearch extends Component {
    constructor(props) {
        super(props);

        this.searchQuery = '';
        this.inputElem = React.createRef();
    }

    addSearchQuery = event => {
        this.searchQuery = event.target.value;
    };

    findCertainData = event => {
        event.preventDefault();
        this.props.setMentorName(this.searchQuery);
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
                    <label>
                        GitHub name:
                        <input
                            type="text"
                            placeholder="Name"
                            autoFocus
                            maxLength="50"
                            onChange={this.addSearchQuery}
                            ref={this.inputElem}
                        />
                    </label>
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
)(MentorSearch);
