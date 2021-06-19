import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <div className="employeeResults">
      {props.employees.map(employee => (
        <div key={employee} className = "oneEmployee">
          <img alt="Employee" src={employee.picture.medium} className="employeeImage" />
          <div className="employeeInfo">
          <h2>{employee.name.first} {employee.name.last}</h2>
          <div>{employee.location.city}, {employee.location.state}</div>
          <div>{employee.email}</div>
          <div>{employee.phone}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
