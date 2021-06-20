import React, { Component } from "react";
import "./style.css";
import SearchInput from "../SearchInput";
import SearchResults from "../SearchResults"
import API from "../../utils/API"

class Employees extends Component {
  state = {
    search: "",
    employees: [],
    filterEmployees: [],
    sortEmployees: this.initialSortEmployees,
    error: ""
  };

  get initialSortEmployees() {
    return {
      name: "",
      location: "",
      email: "",
      phone: "",
    };
  }

  // When the component mounts, call API
  componentDidMount() {
    API.getEmployeeList()
      .then(res => this.setState({ employees: res.data.results , filterEmployees: res.data.results }))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;

    // Updating the input's state
    this.setState({search: value});
    this.filterByEmployees(value.toLowerCase().trim())
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.filterByEmployees(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ employees: res.data.results, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };

  sortByName = (key, primary = 0, secondary = 0) => {
    let sortedEmployees = this.state.filterEmployees;
    if (this.state.sortEmployees[key]) {
      this.setState({
        filterEmployees: sortedEmployees.reverse(),
        sortEmployees: {
          ...this.initialSortEmployees,
          [key]: this.state.sortEmployees[key] === "asc" ? "desc" : "asc",
        },
      });
    } else {
      sortedEmployees = this.state.filterEmployees.sort((a, b) => {
        a = a[key];
        b = b[key];
        if (primary) {
          if (secondary && a[primary] === b[primary]) {
            return a[secondary].localeCompare(b[secondary]);
          }
          return a[primary].localeCompare(b[primary]);
        } else {
          return a.localeCompare(b);
        }
      });

      this.setState({
        filterEmployees: sortedEmployees,
        sortEmployees: {
          ...this.initialSortEmployees,
          [key]: "asc",
        },
      });
    }
  };

  filterByEmployees = (value) => {
    if (value) {
      this.setState({
        filterEmployees: this.state.employees.filter((employee) => {
          return (
            employee.name.first
              .toLowerCase()
              .concat(" ", employee.name.last.toLowerCase())
              .includes(value)
            // employee.phone.includes(input),
            // employee.email.includes(input)
          );
        }),
      });
    } else {
      this.setState({ filterEmployees: this.state.employees });
    }
  };

  render() {
    return (
      <div>
          <SearchInput
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            sortByName={this.sortByName}
            filterByEmployees={this.filterByEmployees}
          />
          <SearchResults 
          state={this.state}
          employees={this.state.employees} 
          filterEmployees={this.state.filterEmployees}
          />
      </div>
    );
  }
}

export default Employees;
