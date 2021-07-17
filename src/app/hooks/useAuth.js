import React, { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";
import authService from "app/services/auth/auth-service";

const API_URL = "https://iot-project-hetic.herokuapp.com/api/user/";

const authContext = createContext();

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};

// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const [user, setUser] = useState(localStorage.getItem("user") || null);

  // Wrap any methods we want to use making sure ...
  // ... to save the user to state.
  const login = (email, password) => {
    return axios
      .post(API_URL + "login", {
        email,
        password,
      })
      .then(response => {
        localStorage.setItem("user", response.data);
        setUser(response.data)
      })
  };

  const register = (name, lastName, email, password, confirmPassword) => {
    return axios.post(API_URL + "register", {
      name,
      lastName,
      email,
      password,
      confirmPassword
    })
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(false);
  };

  // const sendPasswordResetEmail = (email) => {
  //   return firebase
  //     .auth()
  //     .sendPasswordResetEmail(email)
  //     .then(() => {
  //       return true;
  //     });
  // };

  // const confirmPasswordReset = (code, password) => {
  //   return firebase
  //     .auth()
  //     .confirmPasswordReset(code, password)
  //     .then(() => {
  //       return true;
  //     });
  // };

  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  useEffect(() => {
    const unsubscribe = user => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    };
    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  // Return the user object and auth methods
  return {
    user,
    login,
    register,
    logout,
    // sendPasswordResetEmail,
    // confirmPasswordReset,
  };
}