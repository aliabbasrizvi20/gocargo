import axios from "axios";
import { setUser, logout } from "./authSlice";
import { API } from "../../helpers/requests";
import { PATH } from "../../helpers/constants";

export const session = () => async (dispatch) => {
  try {
    const response = await API.get(PATH.SESSION);
    if(response.data._id){
      dispatch(setUser(response.data));
    }
  } catch (error) {
    console.error("Session failed:", error);
  }
};
export const loginUser = (userData) => async (dispatch) => {
  try {
    const response = await API.post(PATH.LOGIN, userData);
    if(response.status === 200){
      dispatch(session());
    }
  } catch (error) {
    console.error("Login failed:", error);
  }
};

export const logoutUser = () => async (dispatch) => {
    try {
        const response = await API.get(PATH.LOGOUT);
        if(response.status === 200){
            dispatch(logout());
        }
    }
    catch (error) {
        console.error("Logout failed:", error);
    }
};
