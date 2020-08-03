import axios from "axios";

class AuthService {
  login() {
    return axios
      .get('/auth')
      .then(response => {
        console.log(response);
        if (response.data) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();