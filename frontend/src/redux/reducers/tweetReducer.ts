import * as ActionTypes from "../constants/tweetConstants";

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
        case ActionTypes.GET_TWEETS:
            return{
                ...state,
                loading: true,
                error: null,
            }
        case ActionTypes.GET_TWEETS_FAIL:
            return{
                ...state,
                loading: false,
                error: action.payload,
            }
        case ActionTypes.GET_TWEETS_SUCCESS:
            return{
                ...state,
                loading: false,
                tweet: action.payload,
            }
        default:
            return state;
    }
}