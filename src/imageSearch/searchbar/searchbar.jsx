import React from "react";
import "./searchbar.css";

const SearchBar = props => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-12 col-md-9">
          <input
            onChange={props.handleInputChange}
            className="form-control form-control-lg form-control-borderless"
            type="search"
            placeholder="Search input"
          />
        </div>
        <div className="col-12 col-md-3">
          <button
            onClick={props.handleSubmit}
            className="btn btn-lg btn-light"
            type="button"
          >
            Search
          </button>
          <button className="btn btn-lg btn-light ml-2" type="button">
            Save
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SearchBar;
