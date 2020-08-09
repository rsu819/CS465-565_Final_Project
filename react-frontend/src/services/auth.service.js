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
  }

  logout() {
    localStorage.removeItem("user");
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default new AuthService();