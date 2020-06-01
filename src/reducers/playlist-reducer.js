import { ActionTypes } from '../actions';

const initialState = {
  playlist: '',
  all: [],
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
    default:
      return state;
  }
};

export default playlistReducer;
