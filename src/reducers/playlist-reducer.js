import { ActionTypes } from '../actions';

const initialState = {
  playlist: '',
  all: [],
  error: '',
};

const playlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_PLAYLIST:
      return {
        ...state, playlist: action.payload,
      };
    case ActionTypes.FETCH_PLAYLISTS:
      return {
        ...state, all: action.payload,
      };
    case ActionTypes.FETCH_PLAYLIST_ERROR:
      return {
        ...state, error: action.payload,
      };
    default:
      return state;
  }
};

export default playlistReducer;
