// eslint-disable-next-line
import axios from "axios";
const fetch = require("node-fetch");

class AuthService {
  login() {
    try {
      fetch("/auth")
        .then((res) => {
          if (res.data) {
            localStorage.setItem("user", JSON.stringify(res.data));
          }
          return res.data;
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

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();