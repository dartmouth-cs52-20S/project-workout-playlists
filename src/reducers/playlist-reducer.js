import { ActionTypes } from '../actions';

const initialState = {
  playlist: '',
  all: [],
  error: false,
  none: false,
};

const playlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_PLAYLIST:
      return {
        ...state, playlist: action.payload,
      };
    case ActionTypes.FETCH_PLAYLISTS:
      return {
        ...state, all: action.payload, none: false,
      };
    case ActionTypes.NONE_PLAYLIST:
      return {
        ...state, none: true,
      };
    case ActionTypes.FETCH_PLAYLIST_ERROR:
      return {
        ...state, error: true,
      };
    case ActionTypes.ERASE_PLAYLIST_ERROR:
      return {
        ...state, error: false,
      };
    default:
      return state;
  }
};

export default playlistReducer;
