import React from "react";
import "./style.css";

function SearchInput(props) {
  return (
    <div>
    <form className="searchInput" onSubmit={props.handleFormSubmit}>
    <input
      className="form-control"
      value={props.value}
      name="search"
      onChange={props.handleInputChange}
      type="search"
      placeholder="Search by name"
    />
  </form>
  <button className="button" onClick={() => props.sortByName("name", "last", "first")}>Sort by Name</button>
  </div>
  );
}

export default SearchInput;