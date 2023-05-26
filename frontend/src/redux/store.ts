import { createStore, combineReducers, applyMiddleware, Store, Action } from 'redux';
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// Import reducers
import { authReducer } from '../redux/reducers/authReducer';

// Root reducer
const rootReducer = combineReducers({
  auth: authReducer,
});

// Define root state
export type RootState = ReturnType<typeof rootReducer>;

// Define thunk types
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
export type AppDispatch = ThunkDispatch<RootState, unknown, Action<string>>;

// Create store
const store: Store<RootState, Action<string>> & {
  dispatch: AppDispatch;
} = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;