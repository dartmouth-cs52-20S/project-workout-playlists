import { ActionTypes } from '../actions';

const initialState = {
  playlist: '',
};

const playlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_PLAYLIST:
      return {
        ...state, playlist: action.payload,
      };
    default:
      return state;
  }
};

export default playlistReducer;