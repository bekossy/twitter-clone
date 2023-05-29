import * as actionTypes from '../constants/authConstants';
import axios from "axios";


export const login = (email: string, password: string):any => async (dispatch:any) => {
  try {
    dispatch({ type: actionTypes.POST_AUTH });

    const { data } = await axios.post("http://localhost:5000/api/auth/login", { email, password });

    dispatch({ type: actionTypes.POST_AUTH_SUCCESS, payload: data });    
    
  } catch (error: any) {
    if (error.response) {
      dispatch({
        type: actionTypes.POST_AUTH_FAIL,
        payload: error.response.data.error
      });
    } else if (error.request) {
      dispatch({
        type: actionTypes.POST_AUTH_FAIL,
        payload: "Please check your internet connection."
      });
    } else {
      dispatch({
        type: actionTypes.POST_AUTH_FAIL,
        payload: "An error occurred while processing the request."
      });
    }
  }
};

export const logout = ():any => (dispatch:any) => {
  dispatch({type: actionTypes.AUTH_LOGOUT});
  localStorage.removeItem("user");
}

export const signup = (email: string, password: string, username:string, profileName:string):any => async (dispatch:any) => {
    try {
    dispatch({ type: actionTypes.POST_AUTH });

    const { data } = await axios.post("http://localhost:5000/api/auth/register", { email, password, username, profileName });

    dispatch({ type: actionTypes.POST_AUTH_SUCCESS, payload: data });
    localStorage.setItem("user", JSON.stringify(data));
    
  } catch (error: any) {
    if (error.response) {
      dispatch({
        type: actionTypes.POST_AUTH_FAIL,
        payload: error.response.data.error
      });
    } else if (error.request) {
      dispatch({
        type: actionTypes.POST_AUTH_FAIL,
        payload: "Please check your internet connection."
      });
    } else {
      dispatch({
        type: actionTypes.POST_AUTH_FAIL,
        payload: "An error occurred while processing the request."
      });
    }
  }
}