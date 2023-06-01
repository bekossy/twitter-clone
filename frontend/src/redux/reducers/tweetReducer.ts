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

export const tweetReducer = (state = initialState, action:any):TweetState => {
    switch (action.type) {
        case actionTypes.GET_TWEETS_REQUEST:
            case actionTypes.DELETE_TWEET_REQUEST:
                case actionTypes.POST_TWEET_REQUEST:
                    return{
                        ...state,
                        loading: true,
                        error: null,
                    }

        case actionTypes.GET_TWEETS_SUCCESS:
            return{
                ...state,
                loading: false,
                data: action.payload,
            }
        case actionTypes.POST_TWEET_SUCCESS:
            return{
                ...state,
                loading: false,
                data: [action.payload, ...state.data]
            }
        case actionTypes.DELETE_TWEET_SUCCESS:
            return{
                ...state,
                loading: false,
                data: state.data.filter((item) => item._id !== action.payload),
            }

        case actionTypes.GET_TWEETS_FAIL:
            case actionTypes.DELETE_TWEET_FAIL:
                case actionTypes.POST_TWEET_FAIL:
                    return{
                        ...state,
                        loading: false,
                        error: action.payload,
                    }
        default:
            return state;
    }
}