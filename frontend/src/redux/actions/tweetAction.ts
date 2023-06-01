import * as actionTypes from "../constants/tweetConstants";
import axios from "axios";
import { RootState } from "../store";

export const getTweets = ():any => async (dispatch:any, getState: () => RootState) => {
    const {user} = getState().auth;
    try {
        dispatch({type: actionTypes.GET_TWEETS_REQUEST});
        const {data} = await axios.get("http://localhost:5000/api/tweets", {
            headers: {"Authorization": `Bearer ${user.token}`}
        });

        dispatch({type: actionTypes.GET_TWEETS_SUCCESS, payload: data})
    } catch (error:any) {
        dispatch({type: actionTypes.GET_TWEETS_FAIL, payload: error.response})
    }
}

export const postTweets = (tweet:string):any => async (dispatch:any, getState: () => RootState) => {
    const {user} = getState().auth
    try {
        dispatch({type: actionTypes.POST_TWEET_REQUEST});
        const {data} = await axios.post("http://localhost:5000/api/tweets", {tweet}, {
            headers: {"Authorization": `Bearer ${user.token}`}
        });

        dispatch({type: actionTypes.POST_TWEET_SUCCESS, payload: data})
    } catch (error:any) {
        dispatch({type: actionTypes.POST_TWEET_FAIL, payload: error.response})
    }
}

export const deleteTweet = (id:string):any => async (dispatch:any, getState: () => RootState) => {
    const {user} = getState().auth;
    try {
        dispatch({type: actionTypes.DELETE_TWEET_REQUEST});
        const {data} = await axios.delete(`http://localhost:5000/api/tweets/${id}`, {
            headers: {"Authorization": `Bearer ${user.token}`}
        });        

        dispatch({type: actionTypes.DELETE_TWEET_SUCCESS, payload: data._id})
    } catch (error:any) {
        dispatch({type: actionTypes.DELETE_TWEET_FAIL, payload: error.response})
    }
}