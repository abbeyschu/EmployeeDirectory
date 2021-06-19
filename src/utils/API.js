import axios from "axios";

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  getEmployeeList: function() {
    return axios.get("https://randomuser.me/api/?results=100&nat=us");
  }
};

