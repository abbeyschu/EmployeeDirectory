import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API"
import SearchInput from "../SearchInput";
import SearchResults from "../SearchResults"

class Employees extends Component {
  state = {
    search: "",
    employees: [],
    filterEmployees: [],
    error: ""
  };

  // When the component mounts, call API
  componentDidMount() {
    API.getEmployeeList()
      .then(res => this.setState({ employees: res.data.results },{ filteredEmployees: res.data.results }))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getEmployeesOfName(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ employees: res.data.results, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };
  render() {
    return (
      <div>
          <SearchInput
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
          />
          <SearchResults results={this.state.results} />
      </div>
    );
  }
}

export default Employees;
