// the starting point for your redux store
// this defines what your store state will look like
import { combineReducers } from 'redux';

import authReducer from './auth-reducer';
import userReducer from './user-reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});

export default rootReducer;
