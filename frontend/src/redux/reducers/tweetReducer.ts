import * as actionTypes from "../constants/tweetConstants";

interface TweetState {
  loading: boolean;
  error: string | null;
  tweet: string[];
}

const initialState: TweetState = {
  loading: false,
  error: null,
  tweet: [],
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
                tweet: action.payload,
            }
        default:
            return state;
    }
}