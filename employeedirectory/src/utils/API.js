import axios from "axios";

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  getUser: function() {
    return axios.get("https://randomuser.me/api/?results=150&nat=us");
  }
};

