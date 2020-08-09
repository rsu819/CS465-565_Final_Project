// eslint-disable-next-line
import axios from "axios";
const fetch = require("node-fetch");

class AuthService {
  login() {
    try {
      fetch("http://localhost:3000/auth")
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