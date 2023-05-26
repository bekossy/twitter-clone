import * as actionTypes from '../constants/authConstants';
import axios from "axios";


export const login = (email: string, password: string):any => async (dispatch:any) => {
  try {
    dispatch({ type: actionTypes.POST_AUTH });

    const { data } = await axios.post("http://localhost:5000/api/auth/login", { email, password });

    dispatch({ type: actionTypes.POST_AUTH_SUCCESS, payload: data });
    
  } catch (error: any) {
    dispatch({
      type: actionTypes.POST_AUTH_FAIL,
      payload: error.response.data.error
    });
  }
};



export const signup = (email: string, password: string, username:string, profileName:string):any => async (dispatch:any) => {
    try {
    dispatch({ type: actionTypes.POST_AUTH });

    const { data } = await axios.post("http://localhost:5000/api/auth/register", { email, password, username, profileName });

    dispatch({ type: actionTypes.POST_AUTH_SUCCESS, payload: data });
    
  } catch (error: any) {
    dispatch({
      type: actionTypes.POST_AUTH_FAIL,
      payload: error.response.data.error
    });
  }
}