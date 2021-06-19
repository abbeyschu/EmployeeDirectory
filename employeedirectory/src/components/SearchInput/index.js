import React from "react";
import "./style.css";

function SearchInput(props) {
  return (
    <form onSubmit={props.handleFormSubmit}>
    <input
      className="form-control"
      value={props.value}
      name="search"
      onChange={props.handleInputChange}
      type="search"
      placeholder="Search"
    />
    <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
    Search
  </button>
  </form>
  );
}

export default SearchInput;