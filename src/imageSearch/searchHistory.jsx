import React, { Component } from "react";
import { connect } from "react-redux";
import { removeSavedQuery } from "../store/actions";

class searchHistory extends Component {
  constructor() {
    super();

    this.state = {};
  }

  removeSavedQuery = (e, input) => {
    e.stopPropagation();
    this.props.removeSavedQuery(input);
  };

  render() {
    return (
      <ul className="list-group searchHistory">
        {this.props.savedInputs.map((input, index) => {
          return (
            <li
              key={index}
              onClick={() => this.props.handleSavedClick(input)}
              className="list-group-item"
            >
              {input}{" "}
              <span onClick={e => this.removeSavedQuery(e, input)}>×</span>
            </li>
          );
        })}
      </ul>
    );
  }
}

const MapDispatchToProps = dispatch => {
  return {
    removeSavedQuery: query => dispatch(removeSavedQuery(query))
  };
};

const MapStateToProps = state => {
  return {
    savedInputs: state.saved
  };
};

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(searchHistory);
