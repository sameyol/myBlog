import axios from "axios";
// import { toast } from "react-hot-toast";

export const registerUsers = (user) => async (dispatch) => {
  dispatch({ type: "USER_REGISTER_REQUEST" });

  try {
    const response = await axios.post("/api/users/signup", user);
    console.log(response);
    dispatch({ type: "USER_REGISTER_SUCCESS" });
  } catch (error) {
    dispatch({ type: "USER_REGISTER_FAILED", payload: error });
  }
};

export const loginUsers = (user) => async (dispatch) => {
  dispatch({ type: "USER_LOGIN_REQUEST" });

  try {
    const response = await axios.post("/api/users/login", user);
    console.log(response);
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: response.data });
    // toast.success("Welcome back boss");
    localStorage.setItem("currentUser", JSON.stringify(response.data));
  } catch (error) {
    dispatch({ type: "USER_LOGIN_FAILED", payload: error });
    // toast.error("Invalid email or password");
  }
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("currentUser");
  window.location.href = "/";
};
