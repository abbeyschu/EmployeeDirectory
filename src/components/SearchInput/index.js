import React from "react";
import "./style.css";

function SearchInput(props) {
  return (
    <form className="searchInput" onSubmit={props.handleFormSubmit}>
    <input
      className="form-control"
      value={props.value}
      name="search"
      onChange={props.handleInputChange}
      type="search"
      placeholder="Search by name"
    />
    <button type="submit" onClick={props.handleFormSubmit} className="button">Search</button>
    <button className="button">Sort Alphabetically</button>
  </form>
  );
}

export default SearchInput;