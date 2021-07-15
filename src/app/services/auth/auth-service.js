import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

const register = async (name, lastname, email, password) => {
  return axios.post(API_URL + "signup", {
    name,
    lastname,
    email,
    password,
  });
};

const login = async (email, password) => {
  return axios
    .post(API_URL + "signin", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
};