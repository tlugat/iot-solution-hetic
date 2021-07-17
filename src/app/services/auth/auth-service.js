import axios from "axios";

const API_URL = "https://iot-project-hetic.herokuapp.com/api/user/";

const register = async (name, lastName, email, password, confirmPassword) => {
  return axios.post(API_URL + "register", {
    name,
    lastName,
    email,
    password,
    confirmPassword
  })
};

const login = async (email, password) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
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