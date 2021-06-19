import React, { Component } from "react";
import "./style.css";
import SearchInput from "../SearchInput";
import SearchResults from "../SearchResults"
import API from "../../utils/API"

class Employees extends Component {
  state = {
    search: "",
    employees: [],
    error: ""
  };

  // When the component mounts, call API
  componentDidMount() {
    API.getEmployeeList()
      .then(res => this.setState({ employees: res.data.results }))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;

    // Updating the input's state
    this.setState({search: value});
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
          <SearchResults employees={this.state.employees} />
      </div>
    );
  }
}

export default Employees;
