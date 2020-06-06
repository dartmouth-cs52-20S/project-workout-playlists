import { ActionTypes } from '../actions';

const initialState = {
  playlist: '',
  all: [],
  error: '',
  none: true,
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
        ...state, error: action.payload,
      };
    default:
      return state;
  }
};

export default playlistReducer;
