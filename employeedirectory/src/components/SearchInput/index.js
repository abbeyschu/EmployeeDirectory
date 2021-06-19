import React from "react";
import "./style.css";

function SearchInput(props) {
  return (
    <div>
    <input></input>
    <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
    Search
  </button>
  </div>
  );
}

export default SearchInput;
