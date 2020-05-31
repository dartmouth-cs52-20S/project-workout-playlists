import { combineReducers } from 'redux';

import authReducer from './auth-reducer';
import userReducer from './user-reducer';
import playlistReducer from './playlist-reducer';
import playerReducer from './player-reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  playlist: playlistReducer,
  player: playerReducer,
});

export default rootReducer;
