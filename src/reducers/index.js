import { combineReducers } from 'redux';

import authReducer from './auth-reducer';
import playlistReducer from './playlist-reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  playlist: playlistReducer,
});

export default rootReducer;
