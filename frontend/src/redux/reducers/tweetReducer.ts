import * as actionTypes from "../constants/tweetConstants";

export interface dataObj{
    createdAt: string;
    profileName: string;
    tweet: string;
    _id: string;
    __v?: number;
    user_id: string;
    username: string;
    updatedAt: string
}

interface TweetState {
  loading: boolean;
  error: string | null;
  data: dataObj[];
}

const initialState: TweetState = {
  loading: false,
  error: null,
  data: [],
};

export const getTweetsReducer = (state = initialState, action:any):TweetState => {
    switch (action.type) {
        case actionTypes.GET_TWEETS:
            return{
                ...state,
                loading: true,
                error: null,
            }
        case actionTypes.GET_TWEETS_FAIL:
            return{
                ...state,
                loading: false,
                error: action.payload,
            }
        case actionTypes.GET_TWEETS_SUCCESS:
            return{
                ...state,
                loading: false,
                data: action.payload,
            }
        default:
            return state;
    }
}