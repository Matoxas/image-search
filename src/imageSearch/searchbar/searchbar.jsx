import React, { Component } from "react";
import "./searchbar.css";
import { connect } from "react-redux";
import { saveQuery } from "../../store/actions";

class SearchBar extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-12 col-md-9">
            <input
              onChange={this.props.handleInputChange}
              onKeyPress={this.props.handleKeyPress}
              value={this.props.searchInput}
              className="form-control form-control-lg mb-2 form-control-borderless"
              type="search"
              placeholder="Search input"
            />
          </div>
          <div className="col-12 mb-2 col-md-3 searchbarButtons">
            <button
              onClick={this.props.handleSubmit}
              className="btn btn-lg btn-light"
              type="button"
            >
              Search
            </button>
            <button
              onClick={() => this.props.saveQuery(this.props.searchInput)}
              className="btn btn-lg btn-light ml-2"
              type="button"
            >
              Save
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const MapDispatchToProps = dispatch => {
  return {
    saveQuery: query => dispatch(saveQuery(query))
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
)(SearchBar);
