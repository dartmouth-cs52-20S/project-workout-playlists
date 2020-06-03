import { combineReducers } from 'redux';

import authReducer from './auth-reducer';
import playlistReducer from './playlist-reducer';
import playerReducer from './player-reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  playlist: playlistReducer,
  player: playerReducer,
});

export default rootReducer;
