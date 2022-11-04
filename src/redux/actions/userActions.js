import axios from "axios";
import * as userActions from "../constants/userTypes";

export const register = (user, history) => async (dispatch) => {
  dispatch({ type: userActions.LOAD_USER });
  try {
    const res = await axios.post("/api/auth/signup", user);
    dispatch({ type: userActions.REGISTER_USER, payload: res.data });
    history.push("/login");
  } catch (error) {
    dispatch({ type: userActions.FAIL_USER, payload: error.response.data });
  }
};

export const login = (user, history) => async (dispatch) => {
  dispatch({ type: userActions.LOAD_USER });
  try {
    const res = await axios.post("/api/auth/login", user);
    dispatch({ type: userActions.LOGIN_USER, payload: res.data });
    history.push("/dashboard");
  } catch (error) {
    dispatch({ type: userActions.FAIL_USER, payload: error.response.data });
  }
};

export const current = () => async (dispatch) => {
  try {
    axios.defaults.headers.common["Authorization"] =
      "END " + localStorage.getItem("token");
    const res = await axios.get("/api/auth/current");
    dispatch({ type: userActions.CURRENT_USER, payload: res.data });
  } catch (error) {
    dispatch({ type: userActions.FAIL_USER, payload: error.response.data });
  }
};

export const logout = () => {
  axios.defaults.headers.common["Authorization"] = "";

  return {
    type: userActions.LOGOUT,
  };
};
