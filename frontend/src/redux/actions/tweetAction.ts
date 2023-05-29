import * as ActionTypes from "../constants/tweetConstants";
import axios from "axios";
import {useSelector} from "react-redux";
import { RootState } from "../store";

export const getTweets = ():any => async (dispatch:any) => {
    const {user} = useSelector((state:RootState) => state.auth);
    try {
        dispatch({type: ActionTypes.GET_TWEETS});
        const {data} = await axios("http://localhost:5000/api/tweets/", {
            headers: {"Authorization": `Bearer ${user.token}`}
        });

        dispatch({type: ActionTypes.GET_TWEETS_SUCCESS, payload: data})
    } catch (error:any) {
        dispatch({type: ActionTypes.GET_TWEETS_FAIL, payload: error.response})
    }
}