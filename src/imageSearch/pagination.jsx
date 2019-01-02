import React from "react";

const pagination = props => {
  return (
    <nav className={props.className} aria-label="pagination">
      <ul className="pagination pagination-lg justify-content-center">
        <li
          onClick={props.pageDown}
          className={`${props.page <= 1 ? "disabled" : ""} page-item`}
        >
          <div className="page-link" href="#">
            Previous
          </div>
        </li>
        <li
          onClick={props.pageDown}
          className={`${props.page <= 1 ? "disabled" : ""} page-item`}
        >
          <div className="page-link" href="#">
            {props.page - 1}
          </div>
        </li>
        <li className="page-item disabled">
          <div className="page-link" href="#">
            {props.page}
          </div>
        </li>
        <li
          onClick={props.pageUp}
          className={`${
            props.page < props.totalPages ? "" : "disabled"
          } page-item`}
        >
          <div className="page-link" href="#">
            {props.page + 1}
          </div>
        </li>
        <li
          onClick={props.pageUp}
          className={`${
            props.page < props.totalPages ? "" : "disabled"
          } page-item`}
        >
          <div className="page-link" href="#">
            Next
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default pagination;
