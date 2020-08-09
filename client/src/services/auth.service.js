// eslint-disable-next-line
import axios from "axios";
const fetch = require("node-fetch");
const baseUrl = (process.env.NODE_ENV === 'production') ? "https://plantsplantsplants.herokuapp.com" : "http://localhost:3000";

class AuthService {
  login() {
    try {
      fetch(`${baseUrl}/auth`)
        .then((res) => {
          console.log(res);
          return res.json();
        })
        .then((res) => {
          console.log(res);
          if (res) {
            localStorage.setItem("user", JSON.stringify(res));
          }
        })
    } catch (err) {
      console.log(err);
    }
    // return axios
    //   .get('/auth')
    //   .then(response => {
    //     console.log(response);
    //     if (response.data) {
    //       localStorage.setItem("user", JSON.stringify(response.data));
    //     }

    //     return response.data;
    //   });
  }

  logout() {
    localStorage.removeItem("user");
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default new AuthService();