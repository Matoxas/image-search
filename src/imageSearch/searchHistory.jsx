import React from "react";

const searchHistory = props => {
  return (
    <ul className="list-group searchHistory">
      {props.savedInputs.map((input, index) => {
        return (
          <li
            key={index}
            onClick={() => props.handleSavedClick(input)}
            className="list-group-item"
          >
            {input} <span onClick={e => props.removeSaved(e, input)}>×</span>
          </li>
        );
      })}
    </ul>
  );
};

export default searchHistory;
