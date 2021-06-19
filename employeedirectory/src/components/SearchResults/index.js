import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <ul className="list-group search-results">
      {props.employees.map(employee => (
        <li key={employee} className="list-group-item">
          <img alt="Employee" src={employee.picture} className="img-fluid" />
          <h2>{employee.name.first} {employee.name.last}</h2>
          <div>{employee.location.city} {employee.location.state}</div>
          <div>{employee.email}</div>
          <div>{employee.phone}</div>
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;
