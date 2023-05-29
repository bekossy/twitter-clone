import * as actionTypes from '../constants/authConstants';

interface AuthState {
  loading: boolean;
  error: string | null;
  user: any;
}

const initialState: AuthState = {
  loading: false,
  error: null,
  user: null,
};

export const authReducer = (state = initialState, action: any): AuthState => {
  switch (action.type) {
    case actionTypes.POST_AUTH:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.POST_AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case actionTypes.POST_AUTH_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case actionTypes.AUTH_LOGOUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;